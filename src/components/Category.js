import { FaPizzaSlice,FaHamburger } from "react-icons/fa";
import { GiNoodles} from "react-icons/gi";
import { NavLink} from "react-router-dom";


function Category(){
    return (
        <div className="category">
            <ul className="ul_category">
            <NavLink to={"/cuisine/Italian"} className="icon_category">
                <FaPizzaSlice />
                <h4>Italian</h4>
            </NavLink >
            <NavLink to={"/cuisine/American"} className="icon_category">
                <FaHamburger />
                <h4>American</h4>
            </NavLink>
            <NavLink to={"/cuisine/Thai"} className="icon_category">
                <GiNoodles />
                <h4>Thai</h4>
            </NavLink>
            </ul>
        </div>
    )
}

export default Category;