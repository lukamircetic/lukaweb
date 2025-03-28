import { useState } from "react";
import { ArticleType, type Article } from "../types";
import { ExpandButton } from "./ExpandButton";
import { ArrowUpRight, Book, BookOpenCheck, Check, Eye } from "lucide-react";

interface ArticleProps {
  article: Article;
}

export function Article({ article }: ArticleProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="flex flex-col gap-1">
      <a
        href={article.link}
        target="_blank"
        className="flex flex-row text-lg items-center gap-1 hover:underline"
      >
        <span>{article.title}</span>
        <ArrowUpRight />
      </a>
      <div className="flex flex-row gap-2 text-slate-300">
        <ExpandButton isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className="group flex gap-1 justify-between items-center w-full">
          <div className="flex flex-row gap-3">
            <span className="">{article.author}</span>
            <span className="">{article.datePublished}</span>
            <span className="">{ArticleType[article.type]}</span>
          </div>
          <span className="flex-grow border-t border-slate-400 self-center mx-3"></span>
          <span className="flex flex-row gap-1 items-center">
            <Check size={18} />
            {article.dateRead}
          </span>
        </div>
      </div>
      {isOpen && <div className="">{article.summary}</div>}
    </div>
  );
}
