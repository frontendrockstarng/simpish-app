import React from "react";
import '../Upload/Upload.css';
import './GeneratedPage.css'
import { useState,useEffect } from "react";
import Preloader from "./Preloader";
import UploadedResultImage from '../../images/uploadedresultimage.svg'
import GeneratedCode from "./Generatedcode";

export default function GeneratedPage(){
    const [loading, setLoading] = useState(false);
    useEffect(()=>{
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 8000);
    }, [])
    return(
        <div className="mainUploadDiv first">
            {
                loading ? 
                <Preloader />
                :
                <div className="preLoadPage">
                    <div className="loadedImageDiv">
                        <img src={UploadedResultImage} className="loadedImage" alt="successful"/>
                    </div>
                    <GeneratedCode />
                   
                </div>
            }
        </div>
    )
}