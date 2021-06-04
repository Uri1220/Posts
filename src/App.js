import React, { useReducer } from 'react'
import Header from '../src/components/Header'
import PostsList from '../src/components/PostsList'
import Post from '../src/components/Post'
import CreatePost from '../src/components/CreatePost'
import Container from '@material-ui/core/Container'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import reducer from './reducer'
import {Context} from './context'


function App() {

  const items = [
    { id: 1, title: 'Post1', text: 'Lorem ipsum dolor sit amet consectetur' },
    { id: 2, title: 'Post2', text: 'Lorem ipsum dolor sit amet consectetur' },
     { id: 3, title: 'Post3', text: 'Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consectetur' },
    { id: 4, title: 'Post4', text: 'Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consectetur' },
    { id: 5, title: 'Post5', text: 'Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consectetur' },
  ]

  const [state, dispatch] = useReducer(reducer, items)

  return (
    <Context.Provider value={{
      dispatch
    }}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Container maxWidth="sm" >
            <Switch>
              <Route path="/" exact>  <PostsList state={state} /> </Route>
              <Route path="/post/:id" exact>  <Post state={state} /> </Route>
              <Route path="/create" exact>  <CreatePost /> </Route>
              <Redirect to="/" />
            </Switch>
          </Container>
        </div>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
