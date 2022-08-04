import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import React from "react";
import ReactLoading from 'react-loading';
import styled from "styled-components";


export default function RecipeItem () {
    const [ done, setDone ] = useState( undefined );
    let params = useParams();
    const [ details, setDetails ] = useState( {} );
    const [ activeTab, setActiveTab ] = useState( "instructions" );

    const fetchDetails = async () => {
        const data = await fetch(
            `https://api.spoonacular.com/recipes/${ params.name }/information?apiKey=${ process.env.REACT_APP_ARTICLES_API_KEY }&number=9&tags=vegetarian`
        )
        const detailData = await data.json();
        setDetails( detailData );
        setDone( true );
    };

    useEffect( () => {
        fetchDetails();
    }, [ params.name ] );

    return (
        <div className=" flex flex-row xl:mx-auto xl:container">
            { !done ? (
                <ReactLoading
                    type={ "bars" }
                    color={ "green" }
                    height={ '10' }
                    width={ '10' }
                />
            ) : (
                <div className="grid grid-flow-row auto-rows-max lg:px-20 md:px-6 px-4 md:py-12 py-8">
                    <div className=" grid-cols-1 flex flex-col-reverse lg:flex-row items-center">
                        <div className=" w-full lg:w-1/2 md:py-9 py-6">
                            <img className="grid-col-1 row-span-1 object-cover h-120 w-150	" src={ details.image } />
                        </div>
                        <div className="lg:w-1/2 lg:pl-12 lg:pr-24">
                            <p className="md:text-3xl lg:text-4xl text-2xl font-semibold lg:leading-9 text-gray-800 lg:pb-6 md:pb-4 pb-2 mb-6">{ details.title }</p>
                            <div className="recipe">
                                <div className="recipe_container">
                                    <div className="md:block flex items-center justify-center">
                                        <Button class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-6 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                                            className={ activeTab === 'instructions' ? 'active' : '' }
                                            onClick={ () => setActiveTab( "instructions" ) }
                                        >
                                            Instructions
                                        </Button>
                                        <Button2 class="text-gray-900 bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-6 dark:focus:ring-yellow-900"
                                            className={ activeTab === 'ingredients' ? 'active' : '' }
                                            onClick={ () => setActiveTab( "ingredients" ) }
                                        >
                                            Ingredients
                                        </Button2>
                                    </div>

                                    { activeTab === "instructions" && (
                                        <div>
                                            <p className="mb-8 text-justify	" dangerouslySetInnerHTML={ { __html: details.summary } } ></p>
                                            <p className="text-justify" dangerouslySetInnerHTML={ { __html: details.instructions } } ></p>
                                        </div>
                                    ) }
                                    { activeTab === "ingredients" && (
                                        <ul className="mb-8 text-justify">
                                            { details.extendedIngredients.map( ( ingredient ) => (
                                                <li key={ ingredient.id }>{ ingredient.original }</li>
                                            ) ) }
                                        </ul>
                                    ) }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) }
        </div>
    )
}

const Button = styled.button`
padding: 0.5rem 1.5rem;
color: #313131;
background:#9ACD32;
border: 2px solid black;
font-weight:600;
margin-bottom: 12px;
border-radius: 26px;

`
const Button2 = styled.button`
padding: 0.5rem 1.5rem;
color: #313131;
background:#FFFF00;
border: 2px solid black;
font-weight:600;
margin-bottom: 12px;
border-radius: 26px;
margin-left:12px;
`

