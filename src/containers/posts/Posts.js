import React, { Component } from 'react';
import Post from './Post';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPosts } from '../../store/actions/postActions';

export class Posts extends Component {
  static propTypes = {
    posts: PropTypes.array.isRequired,
    getPosts: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    // console.log(this.props.posts);
    const { posts } = this.props;
    return (
      <div className="home-page pt-5">
        <h1 className="text-center mb-4">Redux Post List</h1>
        <div className="row">
          {posts.map((post) => (
            <Post key={post.id} id={post.id} title={post.title} body={post.body} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: state.postReducer.posts,
});

const mapDispatchToProps = { getPosts };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Posts);
