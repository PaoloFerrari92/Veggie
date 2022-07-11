import { useEffect, useState} from "react";
import { Link } from "react-router-dom";

function Popular () {

    const [popular, setPopular] = useState([]);

    useEffect(() => {
        getPopular()
    }, []);

const getPopular = async () => {
    const api = await fetch (
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_ARTICLES_API_KEY}&number=9`
        );
    const data = await api.json();
    setPopular(data.recipes)
    console.log(data);
}

    return (
        <div>
        <h1 class="animate__animated animate__fadeOutRightBig" className="popular_title">The Popular</h1>

             <div>   
            {popular.map((recipe) => {
                return(
                    <div className="recipeTile" key ={recipe.id}>
                        <Link to={'/recipe/' + recipe.id}>
                        <p   className="recipeTile__title" >{recipe.title}</p>
                        <img className="recipeTile__img" src={recipe.image} alt={recipe.title}/>
                        </Link>
                    </div>
                    
                );
            })}
        </div>
        </div>
    )
}

export default Popular