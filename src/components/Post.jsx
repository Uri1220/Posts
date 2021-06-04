import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginTop:50
  },
  
  text: {
    fontSize: 14,
    margin:'20px 0',
  },
  
});

export default function Post({ state }) {
  const classes = useStyles();

  const history = useHistory();
  const { id } = useParams();

  const [post, setPost] = useState([]);

  React.useEffect(() => {
    setPost(state.filter((el) => el.id.toString() === id));
  }, [id, state]);


  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {post[0]?.title}
        </Typography>
        <Divider/>
        <Typography
          className={classes.text}
          color="textSecondary"
          gutterBottom
        >
          {post[0]?.text}
        </Typography>
        <Divider/>
       
      </CardContent>
      <CardActions>
        <Button 
         variant="outlined"
        size="small"
        onClick={() => {history.push("/")}}
        >
          Back
          </Button>
      </CardActions>
    </Card>
  );
}
