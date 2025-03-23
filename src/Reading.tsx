import { useReading } from "./ReadingContext";

function Reading() {
  const { articles, isLoading, error } = useReading();

  if (isLoading) return <div>Loading articles... </div>;
  if (error) return <div>Error loading articles, please try again later </div>;
  console.log(articles);
  return <div>My Reading List</div>;
}

export default Reading;
