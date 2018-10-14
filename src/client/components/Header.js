import React from "react";
import Nav from "./Nav";

class Header extends React.Component {
    render(){
        return (
            <div id="header">
                <h1>My MERN App</h1>
                <Nav />
            </div>
        )
    }
}

export default Header;