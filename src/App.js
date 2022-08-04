import Pages from "./pages/Pages";
import React from "react";
import RecipeCategory from "./components/RecipeCategory";
import { BrowserRouter } from "react-router-dom"
import Search from "./components/Search";

function App () {
  return (
    <div>
      <BrowserRouter>
        <Search />
        <RecipeCategory />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;