import React from "react";
import Nav from "./nav";
import "../styles/header.css";

import logo from "../assets/pictures/logo.svg";

function Header() {
	return (
		<div className="header">
			<img className="logo" alt="veer logo" src={logo} />
			<Nav />
		</div>
	);
}

export default Header;
