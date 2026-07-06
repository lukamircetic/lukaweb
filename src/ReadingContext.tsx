import { ReactNode, useCallback, useState } from "react";

import { Article } from "./types";
import { ReadingContext } from "./reading-context";

interface ArticlePage {
  totalArticles: number;
  articles: Article[];
}

export const ReadingProvider = ({ children }: { children: ReactNode }) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [totalArticles, setTotalArticles] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchArticles = useCallback(
    async (page?: number, signal?: AbortSignal) => {
      setIsLoading(true);
      setError(null);

      try {
        const url = createPaginatedUrl(page);
        const response = await fetch(url, { signal });
        if (!response.ok) {
          throw new Error("failed to fetch articles");
        }
        const data: ArticlePage = await response.json();
        setArticles(data.articles);
        setTotalArticles(data.totalArticles);
      } catch (err) {
        if (err instanceof Error && err.name === "AbortError") {
          return;
        }

        setError(
          err instanceof Error
            ? err
            : new Error("error while fetching articles from api")
        );
      } finally {
        if (!signal?.aborted) {
          setIsLoading(false);
        }
      }
    },
    []
  );

  const fetchArticlesByPage = useCallback(
    async (page: number, signal?: AbortSignal) => {
      await fetchArticles(page, signal);
    },
    [fetchArticles]
  );

  return (
    <ReadingContext.Provider
      value={{ articles, totalArticles, fetchArticlesByPage, isLoading, error }}
    >
      {children}
    </ReadingContext.Provider>
  );
};

const createPaginatedUrl = (page?: number) => {
  const url = import.meta.env.VITE_API_URL_PROD;
  if (!page) {
    return url;
  } else {
    return url + `?page=${page}`;
  }
};
