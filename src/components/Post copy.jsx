import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { useHistory, useParams } from "react-router-dom";

function Post({ state }) {
  const history = useHistory();
  const { id } = useParams();

  const [post, setPost] = useState([]);

  React.useEffect(() => {
    setPost(state.filter((el) => el.id.toString() === id))
   
  }, [id,state]);

  
  return (
    <div>
      <Button
        style={{ margin: "40px 0 0 40px" }}
        variant="outlined"
        color="primary"
        onClick={() => {history.push("/")}}
      >
        back
      </Button>


       <p>Title:{post[0]?.title}</p> 
       <p>Text:{post[0]?.text}</p>  
    </div>
  );
}

export default Post;

