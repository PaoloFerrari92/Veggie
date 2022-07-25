import { FaPizzaSlice,FaHamburger } from "react-icons/fa";
import { GiNoodles} from "react-icons/gi";
import { NavLink} from "react-router-dom";


function Category(){
    return (
        <div className="flex  justify-center mb-8" role="group">
            <ul className="flex  justify-items-center mb-8 py-2 px-4 text-sm font-medium text-gray-900   
                border border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500
                focus:bg-gray-900  dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                    <NavLink to={"/cuisine/Italian"} className="ml-12">
                        <FaPizzaSlice />
                        <h4>Italian</h4>
                    </NavLink >
                    <NavLink to={"/cuisine/American"} className="ml-12">
                        <FaHamburger />
                        <h4>American</h4>
                    </NavLink>
                    <NavLink to={"/cuisine/Thai"} className="ml-12 mr-8">
                        <GiNoodles />
                        <h4>Thai</h4>
                    </NavLink>
            </ul>
        </div>
    )
}

export default Category;