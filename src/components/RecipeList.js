import React, { useEffect, useState}from "react";
import {Link, useParams} from "react-router-dom";
import ReactLoading from 'react-loading';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

export default function RecipeList() {
    return (
      <QueryClientProvider client={queryClient}>
        <ListRecipe />
      </QueryClientProvider>
    )
  }
  function ListRecipe (){
    const [cuisine, setCuisine] = useState([]);
    const [done, setDone] = useState (undefined);
    let params = useParams();

    const getCuisine = async (name) => {
        const data = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_ARTICLES_API_KEY}&cuisine=${name}&tags=vegetarian`
        )
        const recipes = await data.json();
        setCuisine(recipes.results);
        setDone(true);
    }

    useEffect(() => {
        getCuisine(params.type);
        console.log(params.type);
    }, [params.type]);

    return (
        <div className="pb-16">
            <div className="bg-gray-100 flex flex-col justify-center items-center pt-9 sm:pt-12 lg:pt-16 pb-24 sm:pb-52">
                <div className="2xl:container 2xl:mx-auto flex flex-col justify-center items-center sm:pb-12 lg:pb-0 space-y-4 px-4 md:px-6 2xl:px-0">
                    <div className="columns-2">  

                        {cuisine.map((item) => {
                            return (
                                <div  key ={item.id}> 
                             
                                { !done ? (
                                    <ReactLoading 
                                    type={"bars"} 
                                    color={"green"} 
                                    height={'100'} 
                                    width={'100'} 
                                    />
                                    ) : (
                                    <Link to={"/recipe/" + item.id}>
                                        <img className="recipeTile__img" src={item.image} alt={item.title} />
                                        <h5 className="bg-gray-100 flex flex-col justify-center items-center pt-9 sm:pt-12 lg:pt-16 pb-12 sm:pb-12 font-semibold">{item.title}</h5>
                                    </Link>
                                    )}
                                    
                                </div>
                            )
                         })}
                    </div>
                </div>
            </div>
        </div>
    )
}

