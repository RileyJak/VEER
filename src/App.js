import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./common/footer";
import Nav from "./common/nav";
import About from "./pages/about";
import Design from "./pages/design";
import Home from "./pages/home";
import Research from "./pages/research";
import Testing from "./pages/testing";

function App() {
	return (
		<BrowserRouter>
			<Nav />
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
			</Switch>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
