import React, { useEffect, useState}from "react";
import {Link, useParams} from "react-router-dom";

function Cuisine() {

    const [cuisine, setCuisine] = useState([]);
    let params = useParams();

    const getCuisine = async (name) => {
        const data = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_ARTICLES_API_KEY}&cuisine=${name}&tags=vegetarian`
        )
        const recipes = await data.json();
        setCuisine(recipes.results);
    }

    useEffect(() => {
        getCuisine(params.type);
        console.log(params.type);
    }, [params.type]);

    return (
        <div className="recipeTile_cuisine">
            {cuisine.map((item) => {
                return (
                    <div  key ={item.id}> 
                    <Link to={"/recipe/" + item.id}>
                       <img className="recipeTile__img" src={item.image} alt={item.title} />
                       <h4 className="recipeTile__title_cuisine">{item.title}</h4>
                       </Link>
                    </div>
                )

            })}
        </div>
    )
}

export default Cuisine;