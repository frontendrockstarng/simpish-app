import React, { Component } from 'react'
import './Getstuff.css'

class Searchbar extends Component {
    render(){
        return(
            <div>
                <div className="searchBarDiv">
                <form className="searchForm">
                    <div className="searchBarContainer">
                            <input type="text" placeholder="Enter the code for the 
                            stuff you want to.."  title="Enter the unique code to get 
                            the stuff you need" className="mainSearchBar"/>
                            <button className="btnSearch">  Get </button>
                    </div>
                </form>
                <div className="redHint"><small>Hint: ha21-1234b</small></div>
                </div>
            </div>
        )
    }
}

export default Searchbar