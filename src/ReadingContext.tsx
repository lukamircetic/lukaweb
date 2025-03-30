import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

import { Article } from "./types";

interface ReadingContextType {
  articles: Article[];
  totalArticles: number;
  isLoading: boolean;
  error: Error | null;
  fetchArticlesByPage: (page: number) => Promise<void>;
}

interface ArticlePage {
  totalArticles: number;
  articles: Article[];
}

const ReadingContext = createContext<ReadingContextType | undefined>(undefined);

export const ReadingProvider = ({ children }: { children: ReactNode }) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [totalArticles, setTotalArticles] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchArticles = async (page?: number) => {
    try {
      const url = createPaginatedUrl(page);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("failed to fetch articles");
      }
      const data: ArticlePage = await response.json();
      setArticles(data.articles);
      setTotalArticles(data.totalArticles);
    } catch (err) {
      setError(
        err instanceof Error
          ? err
          : new Error("error while fetching articles from api")
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticlesByPage = async (page: number) => {
    await fetchArticles(page);
  };

  return (
    <ReadingContext.Provider
      value={{ articles, totalArticles, fetchArticlesByPage, isLoading, error }}
    >
      {children}
    </ReadingContext.Provider>
  );
};

export const useReading = () => {
  const context = useContext(ReadingContext);
  if (context === undefined) {
    throw new Error("useReading must be used within a ReadingProvider");
  }
  return context;
};

const createPaginatedUrl = (page?: number) => {
  let url = "https://mojecitanje.lukamircetic.ca/articles";
  if (!page) {
    return url;
  } else {
    return url + `?page=${page}`;
  }
};
