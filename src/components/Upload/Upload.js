import React from 'react'
import { useState} from 'react'
import './Upload.css'
import UploadBtn from '../../images/uploadbtn.svg' 
import {UploadDescription} from '../Upload/UploadDescription'
import {BtnGenerate} from '../Upload/BtnGenerate'
import Getstuff from '../Getstuff/Getstuff'
import GeneratedPage from '../GeneratedPage/GeneratedPage'


export default function Upload(){
        const [page, setPage] = useState(1);
        function goNextPage(){
            setPage((page)=> page + 1);
            console.log("worked")
        }
        function goFirstPage(){
            setPage((page) => page - 1);
        }
       
        return(
            <div className="uploadSection">
                
                {page === 1 && <UploadingOne  goNextPage = {goNextPage}/>}
                {page === 2 && <UploadingTwo goFirstPage = {goFirstPage}/>}
                
                <div className="mainUploadDiv second">
                     <Getstuff />
                </div>
            </div>
  )
  
 }


 
 function UploadingOne(props){
     
        const [file, setFile] = useState(null)
        const handleChange = (e) =>{
            setFile(e.target.files[0])
            console.log(e.target.files[0])
        }

    return(
     
        <div className="mainUploadDiv first">
            <div className="mainContent">
                <h2>Upload your stuff here</h2>
            <form >
                <div className="uploadIconDiv">
                    <input type='file' className='hiddenFileBtn' id='fileTrigger'
                    name={file} onChange={handleChange} />
                    <label htmlFor='fileTrigger' className='btnLabel'>
                        <img src={UploadBtn} className="uploadIcon" alt="upload button"/>
                    </label>
                    <div className="UploadDetailsDiv">
                        {UploadDescription.map((items,index) => {
                            return(
                            <small className = {items.cName}>{items.title}</small>
                            )
                        }
                            
                        )}
                    </div>

                    {file ? (
                         <div className = {!file ? 'noUploadedFile' : 'uploadFilePresent'}>
                        
                         <label>File Name: {file.name} </label>
                         <label>File Size: {
                             (file.size >= 1000000 & file.size <= 999999999)
                             ? Math.round(file.size * 0.000001) + "MB"
                             :(file.size >= 1000 & file.size <= 999999)
                             ? Math.round(file.size * 0.001) + "KB"
                             :(file.size >= 1000000000)
                             ? Math.round(file.size * 0.000000001) + "GB"
                             :file.size
                             
                             } </label>
                     </div>
                    ): (
                        <p className="mt-5 infoNote">Select a file to show details</p>
                    )}
                   
                </div>
                <div className='btnGenerateDiv'>
                    {BtnGenerate.map((items, index) => {
                       return(
                        <button disabled={!file}   title="Upload file beore 
                        generating code" className={items.cName} type="submit" onClick={props.goNextPage} >{items.title}</button>
                       )
                    }
                    )}
                       
                </div>
            </form>
            </div>
        </div>

    )
  }

  function UploadingTwo(props){
     return(
         <>
         <GeneratedPage />
         <div className="uploadAgain first"><button onClick={props.goFirstPage}>Upload Again</button></div>
         </>
  
     )
  }