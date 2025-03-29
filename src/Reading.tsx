import { Article } from "./components/Article";
import { Pagination } from "./components/Pagination";
import { useReading } from "./ReadingContext";

function Reading() {
  const { articles, isLoading, error } = useReading();

  if (isLoading) return <div>Loading articles... </div>;
  if (error) return <div>Error loading articles, please try again later </div>;
  // console.log(articles);
  return (
    <div className="flex flex-col gap-4 max-w-2xl">
      <div className="flex flex-col gap-6 min-h-[875px]">
        {articles &&
          articles.map((article) => (
            <Article article={article} key={article.id} />
          ))}
      </div>
      <Pagination firstPage={0} currentPage={10} lastPage={100} />
    </div>
  );
}

export default Reading;
