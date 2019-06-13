import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import CurrentDrive from './pages/CurrentDrive'
import PastDrives from './pages/PastDrives'
import ThingsYouMissed from './pages/ThingsYouMissed'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/current" exact component={CurrentDrive} />
          <Route path="/past" exact component={PastDrives} />
          <Route path="/save" exact component={ThingsYouMissed} />
        </Switch>
      </Router>
    )
  }
}

export default App
