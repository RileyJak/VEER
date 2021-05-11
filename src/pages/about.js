import React from "react";
import "../styles/about.css";

// blobs
import blob1 from "../assets/Blobs/blob-01.svg";
import blob2 from "../assets/Blobs/blob-02.svg";
import blob3 from "../assets/Blobs/blob-03.svg";
import blob4 from "../assets/Blobs/blob-04.svg";

function About() {
	return (
		<>
			<h1 className="about-title">About</h1>
			<img className="blob" src={blob1} alt="blob" />
			<img className="blob" src={blob2} alt="blob" />
			<img className="blob" src={blob3} alt="blob" />
			<img className="blob" src={blob4} alt="blob" />
			<hr className="about-line" />
			<p className="text">
				VEER is an app designed to help guide you through the voting process, no
				matter where you are in your voter journey. Through bite-sized lessons
				established by your level of expertise, VEER is a practical and
				efficient way to learn about voting!
			</p>

			<div className="container">
				<h2 className="subhead">Our Mission and Vision</h2>

				<div className="box">
					<h3>Our Mission</h3>
					<p>
						VEER’s mission is to empower new and young voters by guiding them
						through the voting process in a way that is effortless, fun, and
						convenient.
					</p>
				</div>

				<div className="box">
					<h3>Our Vision</h3>
					<p>
						We at VEER believe that the power to vote is the power to change the
						world around you, and we strive for a future in which everyone holds
						that power equally
					</p>
				</div>
			</div>

			<div className="container">
				<h2 className="subhead">Our Values</h2>
				<div className="box-2">
					<h3>Inclusive and Diverse</h3>
					<p>
						Inclusive of all people, identities, experiences, and perspectives.
					</p>
				</div>
				<div className="box-2">
					<h3>Innovative</h3>
					<p> New and fresh, in both concept and design.</p>
				</div>
				<div className="box-2">
					<h3>Fun</h3>
					<p>Critically engaging while never becoming boring.</p>
				</div>
			</div>

			<div className="team-container">
				<h2 className="team-title">Our Team</h2>
				<p className="text">
					Matt Basil, Audree Borror, Chris Bowling, Tim Bradish, Rigo Cervantes,
					Mackenzie Chernok, Artur Ciecierski, Anna Gingle, Jennica Yvonne
					Hontiveros, Riley Jakusik, Vicki Lei, Sneh Mehta, Tyler Morales,
					Christopher Morris, Beck Rivera, Cassi Seifert, Lourdes Serrano,
					Georgia Swinand
				</p>
				<p className="text">In collaboration with Kin + Carta</p>
			</div>
		</>
	);
}

export default About;
