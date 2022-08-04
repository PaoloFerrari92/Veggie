import { Link } from "react-router-dom";


export default function Recipe ( { recipe } ) {
    return (
        <div className="grid-cols-2	grid-template-columns: repeat(2, minmax(0, 1fr));
                            " key={ recipe.id }>
            <Link to={ '/recipe/' + recipe.id }>
                <h3 className="bg-gray-100 text-center justify-center items-center pt-9 sm:pt-12 lg:pt-16 pb-12 sm:pb-12 font-semibold overflow: hidden; truncate text-ellipsis overflow-hidden ... space-x-0.5 ">{ recipe.title }</h3>
                <img className="object-center object-cover" src={ recipe.image } />
            </Link>
        </div>
    );
}

