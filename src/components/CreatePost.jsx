import React, { useContext } from "react";
import { Context } from "../context";
import { useHistory } from "react-router-dom";

import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useForm } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { dispatch } = useContext(Context);

  const onSubmit = (data) => {
    dispatch({
      type: "add",
      payload: data,
    });
    history.push("/");
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Button
          style={{marginBottom:30 }}
          variant="outlined"
          color="primary"
          onClick={() => {
            history.push("/");
          }}
        >
          back
        </Button>

        <Typography component="h1" variant="h5">
          Post
        </Typography>
        <form
          className={classes.form}
          noValidate
          onSubmit={handleSubmit(onSubmit)}
        >
          <TextField
            variant="outlined"
            margin="normal"
            {...register("title", {
              required: "Title field is required",
              minLength: {
                value: 3,
                message: "Minimum field length is 3 characters",
              },
            })}
            required
            fullWidth
            id="title"
            label="Title"
            name="title"
            autoComplete="title"
            autoFocus
          />
          {errors.title && <p style ={{color:'red'}}>{errors.title.message}</p>}
          <TextField
            variant="outlined"
            margin="normal"
            {...register("text", {
              required: "Text field is required",
              maxLength: {
                value: 300,
                message: "Maximum field length is 300 characters",
              },
            })}
            required
            fullWidth
            rows={4}
            name="text"
            label="Text"
            type="text"
            id="text"
            autoComplete="current-password"
          />
          {errors.text && <p style ={{color:'red'}} >{errors.text.message}</p>}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Create Post
          </Button>
        </form>
      </div>
    </Container>
  );
}
