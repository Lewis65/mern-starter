import React from "react";
import { Switch, Route } from "react-router-dom";

import "../styles/main.scss";

import Header from "./Header.js";
import Home from "./Home.js";
import Form from "./Form.js";

class App extends React.Component {

    render(){
        const App = () => (
            <div id="wrapper">
                <Header/>
                <div id="main">
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/form" component={Form}/>
                    </Switch>
                </div>
            </div>
        )
        return(
            <Switch>
                <App/>
            </Switch>
        );
    }
}

export default App;