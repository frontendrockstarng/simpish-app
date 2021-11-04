import React, { Component } from 'react'
import './Getstuff.css'
import Searchbar from './Searchbar'

class Getstuff extends Component{
    render(){
        return(
            <div>
                <div className="getStuffDiv">
                <div className="mainContent getstuffContent">
                    <h2>Search and <span className="goldColor">get</span> stuff here</h2>
                    <Searchbar />
                </div>
                </div>
            </div>
        )
    }
}

export default Getstuff



