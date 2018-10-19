import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deletePost } from '../../store/actions/postActions';

export class Post extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    deletePost: PropTypes.func.isRequired,
  };
  state = {
    showPostInfo: false,
  };

  onDeleteClick = (id) => {
    this.props.deletePost(id);
  };

  render() {
    const { id, title, body } = this.props;

    return (
      <div className="col-sm-12 col-md-12 col-lg-12">
        <div className="card card-body mb-3">
          <h4 className="">
            Article ID: {id}
            <i
              className="fa fa-times float-right"
              aria-hidden="true"
              onClick={this.onDeleteClick.bind(this, id)}
              style={{ cursor: 'pointer' }}
            />
            <Link to={`/posts/edit/${id}`}>
              <i
                className="fa fa-pencil-square-o float-right pr-3 pt-1"
                aria-hidden="true"
                style={{ cursor: 'pointer' }}
              />
            </Link>
          </h4>
          <ul className="animated bounceIn">
            <li className="list-group-item">
              <strong className="text-danger">
                <i className="fa fa-star" aria-hidden="true" /> Title:
              </strong>{' '}
              {title}
            </li>
            <li className="list-group-item">
              <strong className="text-danger">
                <i className="fa fa-indent" aria-hidden="true" /> Content:
              </strong>{' '}
              {body}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = { deletePost };

export default connect(
  null,
  mapDispatchToProps,
)(Post);
