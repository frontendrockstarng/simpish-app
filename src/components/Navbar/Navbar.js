import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { MenuItems } from './MenuItems'
import './Navbar.css'

class Navbar extends Component{
    state = {clicked:false}
    handleClick = () =>{
        this.setState({clicked: !this.state.clicked})
    }
    render(){
        return (
            <div>
                <div className="navBar">
                    <Link to='/' className='logo'><img src='https://res.cloudinary.com/colt-copy/image/upload/v1632609221/Habari_Logo_szlveh.svg'/></Link>
                    <nav className="menuLinks">
                        <div className="logoDiv" onClick={this.handleClick}>
                        <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}> </i>
                        </div>
                        
                        <ul className={this.state.clicked ? 'menuLists active' : 'menuLists'}> 
                            {MenuItems.map((items, index) => {
                                return(
                                    <li key = {index}>
                                        <a className={items.cName} href={items.url }>
                                            {items.title}
                                        </a>
                                    </li>
                                )
                            }
                            )}
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}


export default Navbar
