import Categories from "../components/Categories";
import NewsList from "../components/NewsList";

export default function NewsPage({ match }) {
  const category = match.params.category || "all";

  return (
    <>
      <Categories></Categories>
      <NewsList category={category}></NewsList>
    </>
  );
}
