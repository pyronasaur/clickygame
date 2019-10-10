import React from "react";
import "./style.css";

function Header(props) {

        return(
            <nav className="navbar fixed-top">
                <ul>
                    <li className="brand">
                        <a href="/">Clicky Game</a>
                    </li>
                    <li>
                        {props.message}
                    </li>
                    <li>
                        Score: {props.score} | Top Score: {props.topScore}
                    </li>
                </ul>
            </nav>
        )
    
}

export default Header;