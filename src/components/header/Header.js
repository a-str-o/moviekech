<<<<<<< HEAD
import React from "react"
import "./Header.css"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="header">
            <div className="headerLeft">
                <Link to="/"><img alt="img" className="header__icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" /></Link>
                <Link to="/movies/popular" style={{textDecoration: "none"}}><span>Popular</span></Link>
                <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>Top Rated</span></Link>
                <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span>Upcoming</span></Link>
            </div>
        </div>
    )
=======
import React, { Component } from "react";
import "./Header.css";
// import { Link } from "react-router-dom"
import { ReactComponent as ReactLogo } from './image/MovieKech-1.svg';
import { render } from "@testing-library/react";
import { MenuData } from "./MenuData";


class Header extends Component {
    state = {clicked: false};
    handleClick =()=>{
        this.setState({...this.state, clicked: !this.state.clicked})
    }
    
    render(){
        return (
            <nav className="NavbarItems">
                <ReactLogo />
                <div className="menu-icons" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {MenuData.map((item, index) => {
                        return (
                            <li key={index}>
                                <a href={item.url} className={item.cName}> <i className={item.icon}></i>{item.title}</a>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        )
    }
>>>>>>> 334c6a9642efb4873f96f9e2f6eb36e5df6ea0b6
}

export default Header






// cons  t Header = () => {
//     return (
//         <div className="header">
//             <div className="headerLeft">
//                 <ReactLogo />
//             </div>
//                 <navbar>
//                     <Link to="/movies/popular" style={{textDecoration: "none"}}><span>Popular</span></Link>
//                     <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>Top Rated</span></Link>
//                     <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span>Upcoming</span></Link>
//                 </navbar>
//         </div>
//     )
// }
