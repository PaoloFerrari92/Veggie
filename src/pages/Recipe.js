import { useEffect, useState} from "react";
import { useParams } from "react-router-dom";


import React from "react";

function Recipe(){

let params = useParams();
const [details, setDetails] = useState({});
const [activeTab, setActiveTab] = useState("instructions");

const fetchDetails = async () => {
    const data = await fetch (
        `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_ARTICLES_API_KEY}&number=9&tags=vegetarian`
    )
    const detailData = await data.json();
    setDetails(detailData);
};

useEffect(() => {
    fetchDetails();
},[params.name]);



    return (
        <div>
            <h2 class="animate__animated animate__zoomInDown" className="recipe_title">{details.title}</h2>
            <div className="recipe">
            <img className="recipe_image" src={details.image} />
           <div className="recipe_container">
               <div className="recipe_buttons">
            <button 
                className={activeTab === 'instructions' ? 'active' : ''} 
                onClick={() => setActiveTab("instructions")}
                >
                Instructions
            </button>
            
            <button 
                className={activeTab === 'ingredients' ? 'active' : ''} 
                onClick={() => setActiveTab("ingredients")}
                >
                    Ingredients
                    </button>
                    </div>
                    
                    {activeTab === "instructions" && (
                        <div>
                            <h3 dangerouslySetInnerHTML={{__html: details.summary }} ></h3>
                            <h3 dangerouslySetInnerHTML={{__html: details.instructions }} ></h3>
                        </div>
                    )}
                    {activeTab === "ingredients" && (
                        <ul className="recipe_ul">
                        {details.extendedIngredients.map((ingredient) => (
                            <li key={ingredient.id}>{ingredient.original}</li>
                        ))}
                        </ul>
                    )}
                    </div>
                    </div>
            </div>
    )
}

export default Recipe;