import { BrowserRouter, Route, Switch } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { createBrowserHistory } from "history";
import "./App.css";
import Header from "./common/header";
import About from "./pages/about";
import Critique from "./pages/critique";
import Design from "./pages/design";
import Home from "./pages/home";
import Research from "./pages/research";
import Testing from "./pages/testing";

function App() {
	const history = createBrowserHistory({
		basename: process.env.PUBLIC_URL,
	});
	return (
		<BrowserRouter>
			<Header />
			<Switch>
				<history>
					<Route path="/" history>
						<Home />
					</Route>
				</history>

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
		</BrowserRouter>
	);
}

export default App;
