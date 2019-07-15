import React from "react";
import { tsPropertySignature } from "@babel/types";



function Jumbotron(props) {
    return (
        
        <div
            style={{ height: 20, clear: "both", paddingTop: 10, opacity: .8}}
            className="jumbotron "
        >
       
        <h2 style={{textAlign: "center", fontSize: "20px"}}>{props.children}</h2>
       
        </div>
        
    );
}

export default Jumbotron;