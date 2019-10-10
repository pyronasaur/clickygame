import React from "react";
import "./style.css";

function Jumbo() {
    return (
    <div className="jumbotron jumbotron-fluid jumbo">
        <div className="container">
            <h1 className="display-4">Clicky Game!</h1>
            <h2 className="lead">Click on an image to earn points, but don't click on any more than once!</h2>
        </div>
    </div>
    )
}

export default Jumbo;