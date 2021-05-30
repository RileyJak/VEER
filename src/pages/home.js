import React from "react";
//material ui
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from "../components/card";
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { createMuiTheme } from '@material-ui/core/styles';

//componets
import PresentationVideo from "../components/presentation-video";

//styles
import "../styles/home.css";

//icons
import pdf from "../assets/icons/PDF.svg";
import video from "../assets/icons/Video.svg";
import link from "../assets/icons/Links.svg";

//documents
import deck from "../assets/documents/Veer - Deck.pdf";
import ca from "../assets/documents/caseStudy.pdf";

import { Redirect } from "react-router";

const useStyles = makeStyles((theme) => ({
	root: {
	  flexGrow: 1,
	},
	grid: {
		alignContent: 'space-between',
		justifyContent: 'center',
		flexBasis:  '0%',
	},
	
  }));
  const theme = createMuiTheme({
	overrides: {
	  // Style sheet name ⚛️
	  muigrid: {
		// Name of the rule
		muiGridgridxs6: {
		  // Some CSS
		  flexBasis: '0%',
		  justify: 'space-evenly',
		},
	  },
	},
  });
function Home() {
	const classes = useStyles();
	return (
	
		<div className={classes.root}>
			
		<Grid container spacing={6}>

				<Grid item lg={12}>
					<Container>
						<PresentationVideo />
					</Container>
				</Grid>


				<Grid item md={6}>
					<Container>
					<Card  title="Presentation Deck" icon={pdf} doc={deck} className={classes.paper}>xs=6 </Card>
					</Container>
				</Grid>

				<Grid item md={6}>
					<Container>
						<Card title="Case Study" icon={pdf} doc={ca} className={classes.card}>xs=6 </Card>
					</Container>
				</Grid>

				<Grid item md={6}>
					<Container>
						<Card
							title="Interactive Prototype"
							icon={link}
							doc={
								"https://www.figma.com/proto/4QxsgOwL6bbNSwpEEzUoM7/Veer-Prototype-Final-Version?page-id=363%3A0&node-id=363%3A108&viewport=420%2C648%2C0.053420539945364&scaling=scale-down"
							} className={classes.paper}>xs=6 </Card>
					</Container>
				</Grid>

				<Grid item md={6}>
					<Container>
						<Card
							title="Prototype Video"
							icon={video}
							doc={"https://youtu.be/dqiS6nK7n4k"}
							className={classes.paper}>xs=6 </Card>
					</Container>
				</Grid>
	</Grid>
	</div>

		

	);
}

export default Home;
