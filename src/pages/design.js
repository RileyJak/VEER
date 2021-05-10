import React from "react";
import Card from "../components/card";
import "../styles/grid.css";

// icons
import pdf from "../assets/icons/PDF.svg";
import img from "../assets/icons/IMG.svg";
import zip from "../assets/icons/Zip.svg";
import doc from "../assets/icons/Google Doc.svg";
import sheet from "../assets/icons/sheet.svg";

//documents
import Blob from "../assets/zips/Blob Sketches.zip";
import ColorEx from "../assets/documents/Color Exploration.pdf";
import Cb from "../assets/documents/Content Bible.docx";
import vg from "../assets/documents/Voice Guide.docx";
import lps from "../assets/zips/Lesson Plan.zip";
import lpf from "../assets/zips/Lesson Plan Flow .zip";
import uf from "../assets/zips/User Flow.zip";
import sk from "../assets/zips/Sketches.zip";
import lofi from "../assets/zips/Lo-Fi Prototype.zip";
import charbib from "../assets/documents/Character Bible.docx";

function Design() {
	return (
		<div>
			<h1>Design</h1>
			<hr />
			<div className="grid-container">
				<Card title="Blob Sketches" icon={zip} doc={Blob} />
				<Card title="Color Exploration" icon={pdf} doc={ColorEx} />
				<Card title="Content Bible" icon={doc} doc={Cb} />
				<Card title="Character Bible" icon={doc} doc={charbib} />
				<Card title="Voice Guide" icon={doc} doc={vg} />
				<Card title="Lesson Plan Sample" icon={doc} doc={lps} />
				<Card title="Lesson Plan Flow" icon={zip} doc={lpf} />
				<Card title="User Flow" icon={zip} doc={uf} />
				<Card title="Sketches" icon={zip} doc={sk} />
				<Card title="Lo-Fi Prototype" icon={zip} doc={lofi} />
			</div>
		</div>
	);
}

export default Design;
