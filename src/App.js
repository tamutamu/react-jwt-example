import React, { Component } from 'react';
import { Route} from 'react-router-dom';



import { withStyles } from '@material-ui/core/styles';

import Login from './containers/Login';
import Dashboard from './containers/Dashboard';
import { PrivateRoute } from './components/PrivateRoute';


const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  }
}

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <PrivateRoute path="/dashboard" component={Dashboard}></PrivateRoute>
        <Route path="/login" component={Login}></Route>
      </div>
    );
  }
}

export default withStyles(styles)(App);
