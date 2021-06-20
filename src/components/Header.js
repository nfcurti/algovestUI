import React from "react";
import IMG_LOGO from "../assets/logo512.jpeg";


export default function Chart() {
    return (

        <nav className="navbar navbar-light ">
		  <a className="navbar-brand" href="#"><img className="logo" src={IMG_LOGO} /></a>
		  <button type="button" class="connect_button">Connect</button>
		</nav>
    )
}