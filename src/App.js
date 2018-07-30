import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'


// Auth Providers
import GoogleA from 'routes/Google'
import FaceBookA from 'routes/FaceBook'

class App extends Component {
  constructor(props){
    super(props)

  }
  render() {
    return (
      <Router>
        <div>
          <h2>Auth Test</h2>
          <ul>
            <li><Link to={'/google'}>Google</Link></li>
            <li><Link to={'/facebook'}>FaceBook</Link></li>
          </ul>

          <Switch>
            <Route exact path='/google' component={GoogleA}/>
            <Route exact path='/facebook' component={FaceBookA}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
