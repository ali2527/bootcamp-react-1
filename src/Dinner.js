import React from "react";
import "./main.css";


function Dinner(props){
    return(
        <div classname="content">
            
            <h1>Counter </h1>
            <h1 className="counter">{props.count}</h1>

        </div>
    );
}

export default Dinner