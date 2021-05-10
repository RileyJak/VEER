import React from "react";
import Card from "../components/card";
import "../styles/home.css";

//icons
import pdf from "../assets/icons/PDF.svg";
import video from "../assets/icons/Video.svg";
import link from "../assets/icons/Links.svg";

//documents
import hold from "../assets/documents/Audience.docx";

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
				<Card title="Prototype Video" icon={video} doc={hold} />
			</div>
		</div>
	);
}

export default Home;
