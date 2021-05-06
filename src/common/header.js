import React from "react";
import Nav from "./nav";
import "../styles/header.css";

function Header() {
	return (
		<div className="header">
			<h1 className="logo">VEER</h1>
			<Nav />
		</div>
	);
}

export default Header;
