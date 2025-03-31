export type Article = {
  id: number;
  title: string;
  author: string;
  summary: string;
  dateRead: string;
  datePublished: string;
  link: string;
  image_path: string;
  type: number;
}

export enum ArticleType {
  Blog = 0,
  Paper = 1,
  Book = 2,
}