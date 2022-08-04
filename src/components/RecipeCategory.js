import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles } from "react-icons/gi";
import { NavLink } from "react-router-dom";


function RecipeCategory () {
    return (
        <div className="flex  justify-center mb-8" role="group">
            <ul className="flex  justify-items-center mb-8 py-2 px-4 text-sm font-medium text-gray-900   
                border border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500
                focus:bg-gray-900  dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                <li className="ml-12">
                    <NavLink to={ "/cuisine/Italian" }>
                        <FaPizzaSlice />
                        <h4 className="flex  justify-items-center mt-2">Italian</h4>
                    </NavLink >
                </li>
                <li className="ml-12">
                    <NavLink to={ "/cuisine/American" }>
                        <FaHamburger />
                        <h4 className="flex  justify-items-center mt-2">American</h4>
                    </NavLink>
                </li>
                <li className="ml-12 mr-8">
                    <NavLink to={ "/cuisine/Thai" } >
                        <GiNoodles />
                        <h4 className="flex  justify-items-center mt-2">Thai</h4>
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default RecipeCategory;