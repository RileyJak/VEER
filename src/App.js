import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./common/header";
import About from "./pages/about";
import Critique from "./pages/critique";
import Design from "./pages/design";
import Home from "./pages/home";
import Research from "./pages/research";
import Testing from "./pages/testing";

function App() {
	return (
		<BrowserRouter>
			<Header />
<<<<<<< HEAD
			{/*Video header*/}
=======
>>>>>>> parent of 7fe9853 (Responsive design⚙️)
			<Switch>
				<div className="video-header">
					<Route path="/" exact>
						<Home />
					</Route>
				</div>
				{/* Card selection */}
				<div className="selection-grid">
				<div className="selection-row">
					<Route path="/research">
						<Research />
					</Route>
				</div>
			
				<Route path="/design">
					<Design />
				</Route>
				<Route path="/testing">
					<Testing />
				</Route>
				<Route path="/about">
					<About />
				</Route>
				<Route path="/critique">
					<Critique />
				</Route>
				</div>
			</Switch>
<<<<<<< HEAD
		
=======
>>>>>>> parent of 7fe9853 (Responsive design⚙️)
		</BrowserRouter>
	);
}

export default App;
