import React from "react";
import "../styles/home.css";
import Card from "../components/card";
import pdf from "../assets/icons/PDF.svg";
import link from "../assets/icons/Links.svg";
import hold from "../assets/documents/Research Summaries for Case Study.docx";

function Home() {
	return (
		<div>
			<div className="video">
				<video src={"https://www.youtube.com/watch?v=1oT5qUx8ldw"} controls />
			</div>

			<div className="grid-home">
				<Card title="Presentation Deck" icon={pdf} doc={hold} />
				<Card title="Case Study" icon={pdf} doc={hold} />
				<Card title="Prototype File" icon={link} doc={hold} />
				<Card title="Prototype Video" icon={link} doc={hold} />
			</div>
		</div>
	);
}

export default Home;
