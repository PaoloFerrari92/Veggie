import {useState} from "react";
import {useNavigate} from "react-router-dom";

function Search() {

const [input, setInput] = useState("");
const navigate = useNavigate();

const submitHandler = (e) => {
e.preventDefault();
navigate("/searched/" + input);
}

    return (
        <div className="search">
            <h1 class="animate__animated animate__backInDown">Food Recipe 🥑</h1>
        <form 
        className="search_form"
        onSubmit={submitHandler}>
            <div>
            <input 
            className="search_input"
            onChange={(e) => setInput(e.target.value)}
            type="text" 
            value={input} />
             <input 
                className="search__submit"
                type="submit" 
                value="search" />
            </div>
            
        </form>
        </div>
        )
}

export default Search;