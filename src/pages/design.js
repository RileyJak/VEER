import React from "react";
import Card from "../components/card";
import "../styles/grid.css";

// icons
import pdf from "../assets/icons/PDF.svg";
import img from "../assets/icons/IMG.svg";
import zip from "../assets/icons/Zip.svg";
import doc from "../assets/icons/Google Doc.svg";
import link from "../assets/icons/Links.svg";

//documents
import Blob from "../assets/zips/Blob Sketches.zip";
import ColorEx from "../assets/documents/Color Exploration.pdf";
import Cb from "../assets/documents/Content Bible.docx";
import vg from "../assets/documents/Voice Guide.docx";
import lps from "../assets/zips/Lesson Plan.zip";
import lpf from "../assets/zips/Lesson Plan Flow .zip";
import sk from "../assets/zips/Sketches.zip";
import lofi from "../assets/zips/Lo-Fi Prototype.zip";
import charbib from "../assets/documents/Character Bible.docx";
import cosc from "../assets/pictures/Color Scheme.png";
import dsc from "../assets/pictures/Design System - Components.png";
import dsb from "../assets/pictures/Design System - Badges.png";
import dn from "../assets/zips/Design Notes.zip";
import mifi from "../assets/zips/Mid-Fi Prototype.zip";
import con from "../assets/pictures/Contrast.png";

//blob
import blob from "../assets/Blobs/blob-02.svg";

function Design() {
	return (
		<div>
			<h1>Design</h1>
			<img className="blob" src={blob} alt="blob" />
			<hr />
			<div className="grid-container">
				{/* Prototypes */}
				<Card
					title="Figma Bible"
					icon={link}
					doc={
						"https://www.figma.com/file/4QxsgOwL6bbNSwpEEzUoM7/IAM-Team-Spring-21-Content-Stuff?node-id=12%3A4"
					}
				/>
				<Card title="Lo-Fi Prototype" icon={zip} doc={lofi} />
				<Card title="Mid-Fi Prototype" icon={zip} doc={mifi} />

				{/* Design Systems */}
				<Card title="Design System - Components" icon={img} doc={dsc} />
				<Card title="Design System - Badges" icon={img} doc={dsb} />

				{/* Color */}
				<Card title="Color Exploration" icon={pdf} doc={ColorEx} />
				<Card title="Color Scheme" icon={img} doc={cosc} />
				<Card title="Color Contrast" icon={img} doc={con} />

				{/* Sketches */}
				<Card title="Sketches" icon={zip} doc={sk} />

				{/* Blob */}
				<Card title="Blob Sketches" icon={zip} doc={Blob} />
				<Card title="Character Bible" icon={doc} doc={charbib} />

				{/* Content */}
				<Card title="Voice Guide" icon={doc} doc={vg} />
				<Card title="Content Bible" icon={doc} doc={Cb} />
				<Card title="Lesson Plan Sample" icon={doc} doc={lps} />
				<Card title="Lesson Plan Flow" icon={zip} doc={lpf} />

				{/* Notes */}
				<Card title="Design Notes" icon={zip} doc={dn} />
			</div>
		</div>
	);
}

export default Design;
