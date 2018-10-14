import React from "react";
import { Link } from "react-router-dom";

class Nav extends React.Component {
    render(){
        return (
            <nav>
                <Link to={"./"}>
                    Home
                </Link>
                <Link to={"./form"}>
                    Form
                </Link>
            </nav>
        )
    }
}

export default Nav;