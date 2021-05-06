import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import "../styles/nav.css";

function Nav() {
	const [navbarOpen, setNavbarOpen] = useState(false);

	const handleToggle = () => {
		setNavbarOpen((prev) => !prev);
	};
	const closeMenu = () => {
		setNavbarOpen(false);
	};

	return (
		<nav className="navBar">
			<button className="button" onClick={handleToggle}>
				{navbarOpen ? (
					<MdClose className="icon1" />
				) : (
					<FiMenu className="icon2" />
				)}
			</button>

			<ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
				<div className="aContainer">
					<Link className="link" to="/home" onClick={() => closeMenu()}>
						<p className="nav-link">Home</p>
					</Link>
					<Link className="link" to="/research" onClick={() => closeMenu()}>
						<p className="nav-link">Research</p>
					</Link>
					<Link className="link" to="/design" onClick={() => closeMenu()}>
						<p className="nav-link">Design</p>
					</Link>
					<Link className="link" to="/testing" onClick={() => closeMenu()}>
						<p className="nav-link">Testing</p>
					</Link>
					<Link
						className="link"
						to="/presentations"
						onClick={() => closeMenu()}
					>
						<p className="nav-link">Presentations</p>
					</Link>
					<Link className="link" to="/about" onClick={() => closeMenu()}>
						<p className="nav-link">About</p>
					</Link>
				</div>
			</ul>
		</nav>
	);
}

export default Nav;
