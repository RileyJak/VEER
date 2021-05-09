import React from "react";
import "../styles/card.css";

function Card({ title, icon, doc }) {
	return (
		<div className="card">
			<div>
				<img
					className="icon"
					src={icon}
					alt="an icon that depicts the file type"
				/>
			</div>

			<div className="text-container">
				<a className="name" href={doc}>
					{title}
				</a>
			</div>
		</div>
	);
}

export default Card;
