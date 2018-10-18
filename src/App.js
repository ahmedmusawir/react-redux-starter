import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './components/Home';
import Header from './components/layout/Header';
import NotFound404 from './components/NotFound404';
import Posts from './containers/posts/Posts';
import AddPosts from './containers/posts/AddPosts';
import EditPosts from './containers/posts/EditPosts';
import Users from './containers/users/Users';
import AddUsers from './containers/users/AddUsers';
import EditUsers from './containers/users/EditUsers';
import Comments from './containers/comments/Comments';
import AddComments from './containers/comments/AddComments';
import EditComments from './containers/comments/EditComments';
import store from './store';

class App extends Component {
  state = {
    branding: 'React Redux Starter',
  };
  render() {
    return (
      // <Provider store={store}>
      <Router>
        <div className="contact-context-app">
          <Header branding={this.state.branding} />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/posts" component={Posts} />
              <Route exact path="/posts/add" component={AddPosts} />
              <Route exact path="/posts/edit/:id" component={EditPosts} />
              <Route exact path="/users" component={Users} />
              <Route exact path="/users/add" component={AddUsers} />
              <Route exact path="/users/edit/:id" component={EditUsers} />
              <Route exact path="/comments" component={Comments} />
              <Route exact path="/comments/add" component={AddComments} />
              <Route exact path="/comments/edit/:id" component={EditComments} />
              <Route component={NotFound404} />
            </Switch>
          </div>
        </div>
      </Router>
      // </Provider>
    );
  }
}

export default App;
