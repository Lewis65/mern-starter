import React from "react";

class Form extends React.Component {
    render(){
        return (
            <div className="form">
                <form>
                    <input type="text" placeholder="Your name" />
                    <input type="textarea" placeholder="Your message" />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
    
export default Form;