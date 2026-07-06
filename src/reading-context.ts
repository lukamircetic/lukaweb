import { createContext } from "react";
import { Article } from "./types";

export interface ReadingContextType {
  articles: Article[];
  totalArticles: number;
  isLoading: boolean;
  error: Error | null;
  fetchArticlesByPage: (page: number, signal?: AbortSignal) => Promise<void>;
}

export const ReadingContext = createContext<ReadingContextType | undefined>(
  undefined
);
