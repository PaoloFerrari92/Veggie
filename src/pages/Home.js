import Popular from "../components/Popular";

import React from "react";
import Veggie from "../components/Veggie";

function Home () {
    return (
        <div className=" grid grid-cols-1 py-6 px-4 sm:p-6 md:py-10 md:px-8">
            <Veggie />
            <Popular />
        </div>
    )
}

export default Home;