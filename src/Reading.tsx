import { useEffect, useState } from "react";
import { Article } from "./components/Article";
import { Pagination } from "./components/Pagination";
import { useReading } from "./ReadingContext";

function Reading() {
  const { articles, totalArticles, fetchArticlesByPage, isLoading, error } =
    useReading();
  const [currentPage, setCurrentPage] = useState(1);
  const [openArticle, setOpenArticle] = useState(-1);
  const [listHeight, setListHeight] = useState("875");

  if (isLoading) return <div>Loading articles... </div>;
  if (error) return <div>Error loading articles, please try again later </div>;

  useEffect(() => {
    fetchArticlesByPage(currentPage);
    const height = getListHeight();
    setListHeight(height);
  }, [currentPage]);

  const getListHeight = () => {
    const viewPortHeight = window.innerHeight;
    const lastPage = Math.ceil(totalArticles / 10);
    const numArticlesOnLastPage = totalArticles % 10;
    if (
      currentPage !== lastPage ||
      numArticlesOnLastPage === 0 ||
      viewPortHeight >= 1200
    ) {
      return "875";
    }
    return `${150 + 80 * (numArticlesOnLastPage - 1)}`;
  };

  return (
    <div className="flex flex-col gap-4 max-w-2xl">
      <div
        className={`flex flex-col gap-6`}
        style={{ minHeight: `${listHeight}px` }}
      >
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
        lastPage={Math.ceil(totalArticles / 10)}
      />
    </div>
  );
}

export default Reading;
