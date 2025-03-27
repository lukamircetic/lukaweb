interface Article {
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

interface ArticleProps {
  article: Article;
  isOpen: boolean;
}

export function Article({ article, isOpen }: ArticleProps) {
  return (
    <div className="flex flex-col gap-1">
      <div className="text-lg">{article.title}</div>
      <div className="flex flex-row gap-4 text-slate-300 italic">
        <div>{article.author}</div>
        <div>{article.datePublished}</div>
        <div>{article.dateRead}</div>
        <div>{article.type}</div>
      </div>
      <div>{article.summary}</div>
    </div>
  );
}
