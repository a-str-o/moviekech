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
        console.log(this.state.clicked)
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