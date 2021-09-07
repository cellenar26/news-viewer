import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "../../node_modules/axios/index";
import usePromise from '../lib/usePromise';
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

export default function NewsList({category}) {
  const [loading, response, error] = usePromise(() => {
    const query = category === 'all'? '': `&category=${category}`
    return axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=cb4555c8522743e995a574b229d36f8c`,)  
  }, [category])

  if(loading === true) {
      return <NewsListBlock>loading...</NewsListBlock>
  }

  if(response === false) {
      return null
  }

  if (error) {
      return <NewsListBlock>error!</NewsListBlock>
  }
  
  const {articles} = response.data || []
  return (

      <NewsListBlock>
          {articles.map(article => (
              <NewsItem key={article.url} article={article}></NewsItem>
          ))}
      </NewsListBlock>
  );
}
