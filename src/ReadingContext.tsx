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
  isLoading: boolean;
  error: Error | null;
}

const ReadingContext = createContext<ReadingContextType | undefined>(undefined);

export const ReadingProvider = ({ children }: { children: ReactNode }) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(
          "https://mojecitanje.lukamircetic.ca/articles"
        );
        if (!response.ok) {
          throw new Error("failed to fetch articles");
        }
        const data: Article[] = await response.json();
        setArticles(data);
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

    fetchArticles();
  }, []);

  return (
    <ReadingContext.Provider value={{ articles, isLoading, error }}>
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
