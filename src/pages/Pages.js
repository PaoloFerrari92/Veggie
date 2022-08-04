import React from "react";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import RecipeCuisine from "./RecipeCuisine";
import Searched from "./Searched";
import RecipeItem from "./RecipeItem";
import 'animate.css';


function Pages () {
    return (

        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/cuisine/:type" element={ <RecipeCuisine /> } />
            <Route path="/searched/:search" element={ <Searched /> } />
            <Route path="/recipe/:name" element={ <RecipeItem /> } />
        </Routes>
    );
}

export default Pages;