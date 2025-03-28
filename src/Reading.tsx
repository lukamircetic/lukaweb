import { Article } from "./components/Article";
import { useReading } from "./ReadingContext";

function Reading() {
  const { articles, isLoading, error } = useReading();

  if (isLoading) return <div>Loading articles... </div>;
  if (error) return <div>Error loading articles, please try again later </div>;
  // console.log(articles);
  return (
    <div className="flex flex-col gap-10 max-w-2xl">
      <div className="flex flex-col gap-6">
        {articles &&
          articles.map((article) => (
            <Article article={article} key={article.id} />
          ))}
      </div>
    </div>
  );
}

export default Reading;
