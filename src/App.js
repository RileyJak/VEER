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
			<div className="selection-grid">
			<Switch>
				<Route path="/" exact>
					<Home />
				</Route>
				<Route path="/research">
					<Research />
				</Route>
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
			</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
