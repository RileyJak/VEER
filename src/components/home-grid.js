import { BrowserRouter, Route, Switch } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

import About from ".src/pages/about";
import Critique from ".src/pages/critique";
import Design from ".src/pages/design";
import Home from "./pages/home";
import Research from "./pages/research";
import Testing from "./pages/testing";

const useStyles = makeStyles((theme) => ({
	root: {
	  flexGrow: 1,
	},
	
  }));

export default function CenteredGrid() {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
        <Grid container spacing={3}>
          <Switch>
            <Grid item xs={12}>
            <Route path="/" exact>
						<Home />
					</Route>
            </Grid>  
          </Switch>
        </Grid>
        </div>
    );
}