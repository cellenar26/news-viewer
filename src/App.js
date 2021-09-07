import React, { useCallback, useState } from "react";
import "./App.css";
import axios from "../node_modules/axios/index";
import NewsList from "./components/NewsList";
import Categories from "./components/Categories";
import { Route } from 'react-router';
import NewsPage from './pages/NewsPage';

function App() {
  const [category, setCategory] = useState('all')
  const onSelect = useCallback(category => setCategory(category), [])
  return (
    <>
      <Route path="/:category?" component={NewsPage}></Route>
    </>
  );
}

export default App;
