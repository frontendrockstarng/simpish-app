import React from "react";
import '../Upload/Upload.css';
import './GeneratedPage.css'

export default function Preloader(){
    return(
        <div className="preLoadPage">
            <h2 id="loadText">Generating</h2>
            <div class="container">
                <div class="Loading"></div>
            </div>
        </div>
    )
}
