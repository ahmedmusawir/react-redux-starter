import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './components/Home';
import Header from './components/layout/Header';
import NotFound404 from './components/NotFound404';
import Posts from './containers/posts/Posts';
import AddPost from './containers/posts/AddPost';
import EditPost from './containers/posts/EditPost';
import Users from './containers/users/Users';
import AddUser from './containers/users/AddUser';
import EditUser from './containers/users/EditUser';
import Comments from './containers/comments/Comments';
import AddComment from './containers/comments/AddComment';
import EditComment from './containers/comments/EditComment';
import store from './store';

class App extends Component {
  state = {
    branding: 'React Redux Starter',
  };
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="contact-context-app">
            <Header branding={this.state.branding} />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/posts" component={Posts} />
                <Route exact path="/posts/add" component={AddPost} />
                <Route exact path="/posts/edit/:id" component={EditPost} />
                <Route exact path="/users" component={Users} />
                <Route exact path="/users/add" component={AddUser} />
                <Route exact path="/users/edit/:id" component={EditUser} />
                <Route exact path="/comments" component={Comments} />
                <Route exact path="/comments/add" component={AddComment} />
                <Route exact path="/comments/edit/:id" component={EditComment} />
                <Route component={NotFound404} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
