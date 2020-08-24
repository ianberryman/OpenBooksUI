import logo from "../res/images/openbooks_test_logo.png";
import React from "react";

export default function Logo(props) {
    return (
        <img
            src={logo}
            onClick={() => props.onClick()}
            className={"logo"}/>
    );
}
