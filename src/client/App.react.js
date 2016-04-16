import Admin from 'src/components/Admin/Admin.react';
import Profile from 'src/components/Profile/Profile.react';
import React from 'react';

import {
  Router,
  Route,
  Redirect,
  browserHistory
} from 'react-router';

const Empty = React.createClass({
  render() {
    return <div>Not yet implemented</div>;
  }
});

export default class App extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path='admin' component={Admin} />
        <Route path='/' component={Profile} />
      </Router>
    );
  }
}