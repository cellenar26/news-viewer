import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "../../node_modules/axios/index";
import NewsItem from "./NewsItem";

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

export default function NewsList() {
  const [articles, setArticles] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/top-headlines?country=kr&apiKey=cb4555c8522743e995a574b229d36f8c"
        );
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  if(loading === true) {
      return <NewsListBlock>loading...</NewsListBlock>
  }

  if (articles === "") {
      return ""
  }

  return (
      <NewsListBlock>
          {articles.map(article => (
              <NewsItem key={article.url} article={article}></NewsItem>
          ))}
      </NewsListBlock>
  );
}
