import React from "react"
import {
  Link, BrowserRouter, Switch,
  Route,
  Redirect,
} from "react-router-dom"

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/about">
            <h1>О программе</h1>
          </Route>
          <Route exact path="/topics">
            <h1>Топпинг</h1>
          </Route>
          <Route exact path="/home">
            <h1>Я дома!</h1>
          </Route>
          <Route >
            <Redirect to="/home" />
          </Route>
        </Switch>
      </div>
    </BrowserRouter >
  )
}

export default Root
