import React from "react";
import ReactDOM from "react-dom";
import Favicon from "react-favicon";
import blob from "./assets/Blobs/blob-02.svg";
import App from "./App";

ReactDOM.render(
	<React.StrictMode>
		<Favicon url={blob} />
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);
