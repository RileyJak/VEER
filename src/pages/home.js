import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from "../components/card";
import PresentationVideo from "../components/presentation-video";
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
			 <Grid container spacing={3}>
				 <PresentationVideo />
			

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
			</Grid>
		</div>
	);
}

export default Home;
