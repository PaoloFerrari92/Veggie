import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()


export default function Veggie () {
    return (
        <QueryClientProvider client={ queryClient }>
            <VeggieRecipe />
        </QueryClientProvider>
    )
}
function VeggieRecipe () {
    const [ veggie, setVeggie ] = useState( [] );

    useEffect( () => {
        getVeggie()
    }, [] );

    const getVeggie = async () => {
        const api = await fetch(
            `https://api.spoonacular.com/recipes/random?apiKey=${ process.env.REACT_APP_ARTICLES_API_KEY }&number=9&tags=vegetarian`
        );
        const data = await api.json();
        setVeggie( data.recipes )
        console.log( data );
    }

    return (
        <div className="pb-16">
            <div className="bg-gray-100 flex flex-col justify-center items-center pt-9 sm:pt-12 lg:pt-16 pb-24 sm:pb-52">
                <div className="2xl:container 2xl:mx-auto flex flex-col justify-center items-center sm:pb-12 lg:pb-0 space-y-4 px-4 md:px-6 2xl:px-0">
                    <div>
                        <h2 className="text-3xl lg:text-4xl font-semibold leading-9 text-center text-gray-800">The Vegetarian</h2>
                    </div>
                    <div>
                        <p1 className="text-base leading-normal sm:leading-none text-center text-gray-600 pb-8">Explore the recommended vegetarian recipes for you</p1>
                    </div>
                    <div>
                        <Splide>
                            { veggie.map( ( recipe ) => {
                                return (
                                    <SplideSlide className="grid grid-cols-1 ">
                                        <div key={ recipe.id }>
                                            <div className="relative flex flex-col justify-center items-center">
                                                <Link to={ "/recipe/" + recipe.id }>
                                                    <img src={ recipe.image } alt={ recipe.title } className="object-cover h-96 w-96" />
                                                    <h3 className="bg-gray-100 flex flex-col justify-center items-center pt-9 sm:pt-12 lg:pt-16 pb-12 sm:pb-12 font-semibold">{ recipe.title }</h3>
                                                </Link>
                                            </div>
                                        </div>
                                    </SplideSlide>
                                );
                            } ) }
                        </Splide>
                    </div>
                </div>
            </div>
        </div>
    )
}
