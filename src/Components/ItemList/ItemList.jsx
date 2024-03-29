import React, { useEffect } from "react";
import SingleItem from "../SingleItem/SingleItem";
import {
   CircularProgress,
   makeStyles,
   Grid,
   Button,
   Typography,
} from "@material-ui/core";
import { useSelector } from "react-redux";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";


const mapThroughItems = (items) => {
   return items.map((item, idx) => {
      return <SingleItem key={idx} item={item} />;
   });
};

const useStyles = makeStyles((theme) => ({
   container: {
      display: "flex",
      justifyContent: "center",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(10),
   },
   progress: {
      padding: theme.spacing(10),
   },
   marginTopTwo: {
      marginTop: theme.spacing(2),
   },
}));

const ItemList = () => {
   const classes = useStyles();
   const { pending, items } = useSelector((state) => state.app);
   const navigate = useNavigate();

   useEffect(() => {

   }, []);

   return (
      <>
      {pending ? (
         <Grid className={classNames(classes.progress, classes.container)} container>
            <CircularProgress size="5rem" />
         </Grid>
      ) : (
         (items && items.length > 0) ? (
            <Grid
               className={classes.container}
               container
               item
               spacing={4}
               xs={10}
               sm={8}
            >
               {mapThroughItems(items)}
            </Grid>
         ) : ( 
            <Grid
               className={classes.container}
               direction="column"
               alignItems="center"
               container
               item
            >
               <Typography variant="h4" color="initial">
                  No Items Found
               </Typography>
               <Button
                  color="primary"
                  onClick={() => navigate("/")}
                  variant="contained"
                  className={classes.marginTopTwo}
               >
                  Back to home
               </Button>
            </Grid>
         )
      )}
      </>
   )
};

export default ItemList;
