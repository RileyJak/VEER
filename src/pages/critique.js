import React from "react";
import Card from "../components/card";
import "../styles/grid.css";

//icons
import zip from "../assets/icons/Zip.svg";

//documents
import cc from "../assets/zips/Client Critique .zip";

function Critique() {
	return (
		<div>
			<h1>Critique</h1>
			<hr />
			<div className="grid-container">
				<Card title="Client Critique" icon={zip} doc={cc} />
			</div>
		</div>
	);
}

export default Critique;
