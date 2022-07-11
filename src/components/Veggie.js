import { useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';




function Veggie (){

    const [veggie, setVeggie] = useState([]);

    useEffect(() => {
        getVeggie()
    }, []);

const getVeggie = async () => {
    const api = await fetch (
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_ARTICLES_API_KEY}&number=9&tags=vegetarian`
        );
    const data = await api.json();
    setVeggie(data.recipes)
    console.log(data);
}

    return (
        <div >
            <h1 className="veggie_title">The Vegetarian</h1>
                <div>
                <Splide 
                options={{
                    perPage: 5,
                    arrows: false,
                    pagination: false,
                    drag: "free",
                    gap: "5rem",
                }}
                >
                {veggie.map((recipe) => {
                    return(
                        <SplideSlide>
                        <div key ={recipe.id}>
                            <div>
                            <Link to={"/recipe/" + recipe.id}>
                            <img src={recipe.image} alt={recipe.title} className="card_veggie_icon"/>
                            <p className="card_veggie_title">{recipe.title}</p>
                            </Link>
                            </div>
                        </div>
                        </SplideSlide>
                    );
                    
                })}
                </Splide>
            </div>
        </div>
    )
}

export default Veggie;