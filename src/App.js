import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';



const App = () => {
  return (
    <div className="app">
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />

      </Switch>
    </Router>
  </div>
  )
}

export default App
