import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
	root: {
	  flexGrow: 1,
	},
	
  }));

  export default function PresentationVideo() {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
          <Grid item xs={12}>
            <iframe
              width="1350"
              height="600"
              src="https://www.youtube.com/embed/mJeQtW2n4rU"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              ></iframe>
        </Grid>
        </div>
    );
}
