import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { Article } from "./components/Article";
import { Pagination } from "./components/Pagination";
import { useReading } from "./useReading";

function getCurrentPage(searchParams: URLSearchParams) {
  const page = Number(searchParams.get("page"));
  return Number.isInteger(page) && page >= 1 ? page : 1;
}

function Reading() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { articles, totalArticles, fetchArticlesByPage, isLoading, error } =
    useReading();
  const [openArticle, setOpenArticle] = useState(-1);
  const currentPage = getCurrentPage(searchParams);

  const setCurrentPage = (page: number) => {
    setOpenArticle(-1);
    setSearchParams(page <= 1 ? {} : { page: String(page) });
  };

  useEffect(() => {
    const controller = new AbortController();
    fetchArticlesByPage(currentPage, controller.signal);
    return () => controller.abort();
  }, [currentPage, fetchArticlesByPage]);

  if (isLoading) return <div>Loading articles... </div>;
  if (error) return <div>Error loading articles, please try again later </div>;

  return (
    <div className="flex flex-col gap-8 max-w-2xl">
      <div className="flex flex-col gap-6">
        {articles &&
          articles.map((article) => (
            <Article
              article={article}
              key={article.id}
              openArticle={openArticle}
              setOpenArticle={setOpenArticle}
            />
          ))}
      </div>
      <Pagination
        firstPage={1}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        lastPage={Math.max(1, Math.ceil(totalArticles / 10))}
      />
    </div>
  );
}

export default Reading;
