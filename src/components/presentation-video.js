import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
	root: {
	  flexGrow: 1,
	},

  presentation: {

    padding: theme.spacing(12),
  
    justifyContent: 'center',
    height: 140,
    width: 100,
    justifyContent: 'center',

  },
	
  }));

  export default function PresentationVideo() {
    const classes = useStyles();
    
    return (



        

           

            <div className={classes.presentation}>
            <iframe
              width="1350"
              height="600"
              src="https://www.youtube.com/embed/mJeQtW2n4rU"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              ></iframe>
            </div>
  

        


     
    );
}
