import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

    render(){
        return(
            <div>
                <h1>My MERN App</h1>
                <p>Pretty neat, huh?</p>
            </div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);