import React from "react";
import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";


function Searched(){

    const [searchedRecipes, setSearchedRecipes] =  useState([]);
    let params = useParams();

    const getSearched = async (name) => {
        const data = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_ARTICLES_API_KEY}&query=${name}&tags=vegetarian`
        )
        const recipes = await data.json();
        setSearchedRecipes(recipes.results);
    };
    useEffect(() => {
        getSearched(params.search);
    }, [params.search]);

    return(
        <div className="searched">
            {searchedRecipes.map((item) => {
            return (
                <div key ={item.id}> 
                <Link to={"/recipe/" + item.id}>
                   <img src={item.image} alt={item.title} />
                   <h4>{item.title}</h4>
                   </Link>
                </div>
            )

        })}
        </div>
    )
}

export default Searched;