import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Comment from './Comment';
import { getComments } from '../../store/actions/commentActions';

export class Comments extends Component {
  static propTypes = {
    comments: PropTypes.array.isRequired,
    getComments: PropTypes.func.isRequired,
  };
  componentDidMount() {
    this.props.getComments();
  }

  render() {
    const { comments } = this.props;
    return (
      <div className="home-page pt-5">
        <h1 className="text-center mb-4">Redux Comment List</h1>
        <div className="row mb-5">
          <Link className="btn btn-secondary btn-block float-right" to={`/comments/add`}>
            <i
              className="fa fa-pencil pr-3 pt-1"
              aria-hidden="true"
              style={{ cursor: 'pointer' }}
            />
            Leave a Comment
          </Link>
        </div>

        <div className="row">
          {comments.map(comment => (
            <Comment
              key={comment.id}
              id={comment.id}
              name={comment.name}
              email={comment.email}
              body={comment.body}
            />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  comments: state.commentReducer.comments,
});
const mapDispatchToProps = { getComments };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Comments);
