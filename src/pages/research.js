import React from "react";
import Card from "../components/card";
import Doc1 from "../assets/documents/Research Summaries for Case Study.docx";
import fileIcon from "../assets/icons/Google Doc.svg";
import "../styles/grid.css";

function Research() {
	return (
		<div>
			<h1>Research</h1>
			<hr />
			<div className="grid-container">
				<Card title="Research Summary" icon={fileIcon} doc={Doc1} />
				<Card title="Research Summary" icon={fileIcon} doc={Doc1} />
				<Card title="Research Summary" icon={fileIcon} doc={Doc1} />
				<Card title="Research Summary" icon={fileIcon} doc={Doc1} />
				<Card title="Research Summary" icon={fileIcon} doc={Doc1} />
				<Card title="Research Summary" icon={fileIcon} doc={Doc1} />
				<Card title="Research Summary" icon={fileIcon} doc={Doc1} />
				<Card title="Research Summary" icon={fileIcon} doc={Doc1} />
			</div>
		</div>
	);
}

export default Research;
