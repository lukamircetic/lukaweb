import { ArticleType, type Article } from "../types";
import { ExpandButton } from "./ExpandButton";
import { ArrowUpRight, Check } from "lucide-react";

interface ArticleProps {
  article: Article;
  openArticle: number;
  setOpenArticle: React.Dispatch<React.SetStateAction<number>>;
}

export function Article({
  article,
  openArticle,
  setOpenArticle,
}: ArticleProps) {
  const formatAuthor = (author: string): string => {
    if (!author.includes(",")) {
      return author;
    }
    return author.split(",")[0] + " et al.";
  };

  const toggleArticle = () => {
    if (openArticle === article.id) {
      setOpenArticle(-1);
    } else {
      setOpenArticle(article.id);
    }
  };

  return (
    <div className="flex flex-col gap-1">
      <a
        href={article.link}
        target="_blank"
        className="flex flex-row text-lg items-center gap-1 hover:underline"
      >
        <span className="whitespace-nowrap overflow-hidden text-ellipsis min-w-0">
          {article.title}
        </span>
        <ArrowUpRight />
      </a>
      <div className="flex flex-row gap-2 text-slate-300">
        <ExpandButton
          isOpen={article.id === openArticle}
          toggleArticle={toggleArticle}
        />
        <div className="group flex gap-1 justify-between items-center w-full">
          <div className="flex flex-row gap-3">
            <span className="">{formatAuthor(article.author)}</span>
            <span className="">{article.datePublished}</span>
            <span className="">{ArticleType[article.type]}</span>
          </div>
          {/* <span className="flex-grow border-t border-slate-400 self-center mx-3 opacity-10"></span> */}
          <span className="flex flex-row gap-1 items-center">
            <Check size={18} />
            {article.dateRead}
          </span>
        </div>
      </div>
      {article.id === openArticle && <div className="">{article.summary}</div>}
    </div>
  );
}
