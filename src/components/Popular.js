import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Recipe from "./Recipe";


const queryClient = new QueryClient()

export default function Popular () {
    return (
        <QueryClientProvider client={ queryClient }>
            <PopularRecipe />
        </QueryClientProvider>
    )
}

function PopularRecipe () {
    const [ popular, setPopular ] = useState( [] );
    useEffect( () => {
        getPopular()
    }, [] );

    const getPopular = async () => {
        const api = await fetch(
            `https://api.spoonacular.com/recipes/random?apiKey=${ process.env.REACT_APP_ARTICLES_API_KEY }&number=8`
        );
        const data = await api.json();
        setPopular( data.recipes )
        console.log( data );
    }

    return (
        <div>
            <div className="bg-gray-100 flex flex-col justify-center items-center pt-9 sm:pt-12 lg:pt-16 pb-24 sm:pb-52">
                <div className="2xl:container 2xl:mx-auto flex flex-col justify-center items-center sm:pb-12 lg:pb-0 space-y-4 px-4 md:px-6 2xl:px-0">
                    <div>
                        <h2 className="text-3xl lg:text-4xl font-semibold leading-9 text-center text-gray-800">The Popular</h2>
                    </div>
                    <div>
                        <p2 p className="text-base leading-normal sm:leading-none text-center text-gray-600 pb-8">Explore the recipes that people view most frequently</p2>
                    </div>
                    <div className="grid grid-cols-2 grid-rows-3 flex space-x-4">
                        { popular.map( ( recipe ) =>
                            <Recipe recipe={ recipe } />
                        ) }
                    </div>
                </div>
            </div>
        </div>
    )
}

