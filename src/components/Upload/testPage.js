import react from "react";
import { useState } from "react";

export default function testJs(){
    const [page, setPage] = useState(1)
    return(
        <div>
            {page === 1 && <testingPage1 />}
        </div>
    )
}

function testingPage1(){
    return(
        <div>the first testing page</div>
    )
}