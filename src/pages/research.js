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
import uf from "../assets/zips/User Flow.zip";
import rs from "../assets/documents/Research Synthesis.pdf";
import is from "../assets/documents/Isolation and Suppression.pdf";
import vs from "../assets/documents/Voting is Social.pdf";
import va from "../assets/documents/Voter Accessability Research.pdf";
import ctn from "../assets/zips/Color Theory Notes.zip";
import cts from "../assets/pictures/Color Theory Questions.png";
import ms from "../assets/documents/Marketing Strategy.pdf";
import ca from "../assets/documents/Competitive Analysis.docx";
import cas from "../assets/documents/Competitive Analysis Synthesis.pdf";
import aud from "../assets/documents/Audience.docx";
import vj from "../assets/pictures/Voter Map.jpeg";
import sq from "../assets/documents/Subconscious Questions.docx";
import su from "../assets/pictures/Survey.png";
import sur from "../assets/pictures/Survey Results.png";
import ss from "../assets/documents/User Survey Synthesis.pdf";
import id from "../assets/pictures/Interaction Dissection.jpg";
import vn from "../assets/documents/Voting Norms.docx";
import vsup from "../assets/documents/Voter Suppression.docx";
import gm from "../assets/zips/gerrymandering.zip";
import hm from "../assets/zips/Humor.zip";
import ii from "../assets/zips/Internet Inequality.zip";
import da from "../assets/zips/Disability and Accesibility.zip";
import sd from "../assets/documents/Service Design Research.xlsx";
import rd from "../assets/documents/Research Direction.docx";
import rm from "../assets/documents/Research Methods.docx";
import up from "../assets/zips/User Personas.zip";
import pd from "../assets/documents/Project Direction.docx";

//blob
import blob from "../assets/Blobs/blob-01.svg";

function Research() {
	return (
		<div>
			<h1>Research</h1>
			<img className="blob" src={blob} alt="blob" />
			<hr />
			<div className="grid-container">
				{/* Synthesis */}
				<Card title="Research Synthesis" icon={pdf} doc={rs} />
				<Card title="Research Direction" icon={pdf} doc={rd} />
				<Card title="Research Methods" icon={doc} doc={rm} />
				<Card title="Project Direction" icon={doc} doc={pd} />

				{/* Topics */}
				<Card title="Isolation and Suppression" icon={pdf} doc={is} />
				<Card title="Voting is Social" icon={pdf} doc={vs} />
				<Card title="Voter Accessability" icon={pdf} doc={va} />
				<Card title="Voting Norms" icon={doc} doc={vn} />
				<Card title="Voter Suppression" icon={doc} doc={vsup} />
				<Card title="Gerrymandering" icon={zip} doc={gm} />
				<Card title="Humor" icon={zip} doc={hm} />
				<Card title="Internet Inequality" icon={zip} doc={ii} />
				<Card title="Disability and Accessibility" icon={zip} doc={da} />
				<Card title="Service Design" icon={sheet} doc={sd} />

				{/* Competitive Analysis and Interaction Comparison */}
				<Card title="Modes of Interaction" icon={img} doc={id} />
				<Card title="Competitive Analysis" icon={doc} doc={ca} />
				<Card title="Marketing Strategy" icon={pdf} doc={ms} />
				<Card title="Competitive Analysis Synthesis" icon={pdf} doc={cas} />

				{/* User Survey */}
				<Card title="Subconscious Questions" icon={doc} doc={sq} />
				<Card title="User Survey" icon={img} doc={su} />
				<Card title="User Survey Results" icon={img} doc={sur} />
				<Card title="User Survey Synthesis" icon={pdf} doc={ss} />

				{/* Audience and Maps and Personas and Flows */}
				<Card title="Audience" icon={doc} doc={aud} />
				<Card title="User Personas" icon={zip} doc={up} />
				<Card title="Voter Journey Map" icon={img} doc={vj} />
				<Card title="User Flow" icon={zip} doc={uf} />

				{/* Color */}
				<Card title="Color Theory Notes" icon={zip} doc={ctn} />
				<Card title="Color Theory Synthesis" icon={img} doc={cts} />
			</div>
		</div>
	);
}

export default Research;
