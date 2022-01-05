import './Getstuff.css'
import searchImage from '../../images/searchimage.svg'
import UploadedResultImage from '../../images/uploadedresultimage.svg'
import React from 'react'
import { useState} from 'react'

export default function Getstuff(){
    const [initialPage, setNextPage] = useState(1);
    function theNextPage(){
        setNextPage((initialPage)=> initialPage + 1);
    }
    function goFirstPage(){
        setNextPage((initialPage)=> initialPage - 1);
    }
        return(
            <div className = "containGetStuffDiv">
                {initialPage === 1 && <DownloadPage1  theNextPage = {theNextPage}/>}
                {initialPage === 2 && <DownloadPage2 goFirstPage ={goFirstPage}/>}
                {/* {page === 1 && downloadPage1()} */}
            </div>
        )
    
}


function DownloadPage1(props){
       const [empty, notEmpty] = useState('')
    return(
        
        <div>
                <div className="getStuffDiv">
                <div className="mainContent getstuffContent">
                    <h2>Search and <span className="goldColor">get</span> stuff here</h2>
                    <div className="searchBarDiv">
                        <div className="searchImgDiv"><img src={searchImage} alt="Input code to search"/></div>
        <form className="searchForm">
            <div className="searchBarContainer">
                    <input type="text" placeholder="Enter the code for the 
                    stuff you want to.."  title="Enter the unique code to get 
                    the stuff you need" className="mainSearchBar" value={empty} onChange = {e => notEmpty(e.target.value)}/>
                    <button className="btnSearch" disabled = {!empty} onClick={props.theNextPage} type="submit">  Get </button>
            </div>
        </form>
        <div className="redHint"><small>Hint: ha21-1234b</small></div>
        </div>
                </div>
                </div>
            </div>
    )
};




function DownloadPage2(props){
    return(
        <div className="getStuffDiv">
            <div className="getStuffImageDiv"><img src={UploadedResultImage}/></div>
            <div className="downloadFilePage">
                <div className = "fileDetail">
                    <label>File Name:</label>
                    {/* <p>{fileName}</p> */}
                </div>
                <div className = "fileDetail">
                    <label>File Size:</label>
                    {/* <p>{fileSize}</p> */}
                </div>
                <div className = "fileDetail">
                    <label>File Code:</label>
                    {/* <p>{fileCode}</p> */}
                </div>
            </div>
            <div className="searchAgain"><button id="downlaodBtn">Download</button></div>
            <div className="searchAgain"><button onClick={props.goFirstPage}>Search Again</button></div>
        </div>
    )
}




