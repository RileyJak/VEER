import React from "react";
import Card from "../components/card";
import "../styles/grid.css";

//icons
import zip from "../assets/icons/Zip.svg";
import img from "../assets/icons/IMG.svg";

//documents
import ct from "../assets/zips/Color Testing.zip";
import uts1 from "../assets/pictures/User Testing Synthesis.png";
import uts2 from "../assets/pictures/Mid-Fi User Interview Synthesis Anna.jpg";
import afd from "../assets/pictures/User Tests Affinity Diagram.png";
import uin from "../assets/zips/User Testing Notes.zip";
import uts from "../assets/zips/User Testing Scripts.zip";

function Testing() {
	return (
		<div>
			<h1>Testing</h1>
			<hr />
			<div className="grid-container">
				{/* Color Testing */}
				<Card title="Color Testing" icon={zip} doc={ct} />

				{/* User Testing */}
				<Card title="User Testing Scripts" icon={zip} doc={uts} />
				<Card title="User Testing Notes" icon={zip} doc={uin} />
				<Card title="User Testing Synthesis 1" icon={img} doc={uts1} />
				<Card title="User Testing Synthesis 2" icon={img} doc={uts2} />
				<Card title="User Testing Affinity Diagram" icon={img} doc={afd} />
			</div>
		</div>
	);
}

export default Testing;
