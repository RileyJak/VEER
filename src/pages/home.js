import React from "react";
import Card from "../components/card";
import "../styles/home.css";

//icons
import pdf from "../assets/icons/PDF.svg";
import video from "../assets/icons/Video.svg";
import link from "../assets/icons/Links.svg";

//documents
import deck from "../assets/documents/Veer - Deck.pdf";
import ca from "../assets/documents/caseStudy.pdf";

function Home() {
	return (
		<div>
			<div className="video">
				<iframe
					width="1350"
					height="600"
					src="https://www.youtube.com/embed/mJeQtW2n4rU"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				></iframe>
			</div>

			<div className="grid-home">
				<Card title="Presentation Deck" icon={pdf} doc={deck} />
				<Card title="Case Study" icon={pdf} doc={ca} />
				<Card
					title="Interactive Prototype"
					icon={link}
					doc={
						"https://www.figma.com/proto/4QxsgOwL6bbNSwpEEzUoM7/Veer-Prototype-Final-Version?page-id=363%3A0&node-id=363%3A108&viewport=420%2C648%2C0.053420539945364&scaling=scale-down"
					}
				/>
				<Card
					title="Prototype Video"
					icon={video}
					doc={"https://youtu.be/dqiS6nK7n4k"}
				/>
			</div>
		</div>
	);
}

export default Home;
