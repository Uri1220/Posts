import React, { useState, useContext } from "react";
import { Context } from "../context";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import CommentIcon from "@material-ui/icons/Comment";
import Divider from "@material-ui/core/Divider";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import Button from "@material-ui/core/Button";
import { NavLink, useHistory } from "react-router-dom";
import ReactPaginate from "react-paginate";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 600,
    marginTop: 20,
    margin: "0 auto",
    backgroundColor: theme.palette.background.paper,
  },
  app: {
    display: "flex",
    flexDirection: "column",
    justifyContent: 'space-between',
    height:'90vh',
    alignItems: "center",
  },
}));

export default function PostsList({ state }) {
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 4;
  const pagesVisited = pageNumber * usersPerPage;

  const history = useHistory();
  const classes = useStyles();

  const { dispatch } = useContext(Context);

  function handleClick() {
    history.push("/create");
  }

  const displayPosts = state
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((value) => {
      return (
        <div  key={value.id}>
        <ListItem
          role={undefined}
          dense
          button
        >
           <NavLink 
            style={{textDecoration: 'none'}}
           to={`/post/${value.id}`}
           
           >
             
          <ListItemText
            style={{ paddingRight: 70 }}
            primary={value.title}
            secondary={value.text}
          />
           </NavLink>
          <ListItemSecondaryAction >
            <IconButton
              edge="end"
              aria-label="comments"
              color="primary"
            >
              <NavLink to={`/post/${value.id}`}>
                <CommentIcon />
              </NavLink>
            </IconButton>

            <IconButton
              onClick={() => dispatch({
                type: 'del',
                payload: value.id
              })} 
              style={{ margin:'0 0 10px 20px' }}
              aria-label="delete"
              variant="outlined"
              color="secondary"
            >
              <DeleteOutlinedIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        <Divider />
      </div>
      );
    });

  const pageCount = Math.ceil(state.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <div className={classes.app}>
      <div>
       <Button
        style={{ marginTop:40 }}
        variant="outlined"
        color="primary"
        onClick={handleClick}
      >
        Add post
      </Button>

      <List className={classes.root}>
      {displayPosts}
      </List>
      </div>

      <ReactPaginate
       style={{ marginBottom:40 }}
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
}
