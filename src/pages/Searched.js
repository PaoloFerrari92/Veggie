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
        <div className="pb-16">
            <div className="bg-gray-100 flex flex-col justify-center items-center pt-9 sm:pt-12 lg:pt-16 pb-24 sm:pb-52">
                <div className="2xl:container 2xl:mx-auto flex flex-col justify-center items-center sm:pb-12 lg:pb-0 space-y-4 px-4 md:px-6 2xl:px-0">
                    <div className="flex flex-col justify-center items-center"> 
                        {searchedRecipes.map((item) => {
                        return (
                            <div className="recipeTile" key ={item.id}> 
                                <Link to={"/recipe/" + item.id}>
                                    <img  className="flex flex-col justify-center items-center" src={item.image} alt={item.title} />
                                    <h5 className="bg-gray-100 flex flex-col justify-center items-center pt-9 sm:pt-12 lg:pt-16 pb-12 sm:pb-12 font-semibold">{item.title}</h5>
                                </Link>
                            </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Searched;