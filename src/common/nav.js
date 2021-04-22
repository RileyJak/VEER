import React from "react";
import { Link } from "react-router-dom";

function Nav() {
	return (
		<>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/research">Research</Link>
				</li>
				<li>
					<Link to="/design">Design</Link>
				</li>
				<li>
					<Link to="/testing">Testing</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
			</ul>
		</>
	);
}

export default Nav;
