import { ArticleType, type Article } from "../types";
import { ArrowUpRight, Check, ChevronRight } from "lucide-react";

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
        <ArrowUpRight size={24} className="flex-shrink-0" />
      </a>
      <button
        className="flex flex-row gap-2 text-slate-300"
        onClick={() => toggleArticle()}
      >
        <ChevronRight
          // transform transition-transform duration-200 ease-in-out
          className={`ml-[-4px] ${
            article.id === openArticle ? "rotate-90" : "rotate-0"
          }`}
        />
        <div className="group flex gap-1 justify-between items-center w-full italic">
          <div className="flex flex-row gap-3">
            <span className="">{formatAuthor(article.author)}</span>
            <span className="hidden sm:inline">{article.datePublished}</span>
            <span className="hidden sm:inline">
              {ArticleType[article.type]}
            </span>
          </div>
          {/* <span className="flex-grow border-t border-slate-400 self-center mx-3 opacity-10"></span> */}
          <span className="flex-row gap-1 items-center hidden lg:flex">
            <Check size={18} />
            {article.dateRead}
          </span>
        </div>
      </button>
      {article.id === openArticle && (
        <div className="text-sm sm:text-base">{article.summary}</div>
      )}
    </div>
  );
}
