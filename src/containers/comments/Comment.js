import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteComment } from '../../store/actions/commentActions';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

export class Comment extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    deleteComment: PropTypes.func.isRequired,
  };
  state = {
    showCommentInfo: false,
  };
  onShowClick = () => {
    this.setState({
      showCommentInfo: !this.state.showCommentInfo,
    });
  };
  onDeleteClick = id => {
    confirmAlert({
      title: 'Confirm Delete',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => this.props.deleteComment(id),
        },
        {
          label: 'No',
          onClick: () => 'do nothing',
        },
      ],
    });
  };

  render() {
    const { id, name, email, body } = this.props;
    const { showCommentInfo } = this.state;

    return (
      <div className="col-sm-12 col-md-12 col-lg-12">
        <div className="card card-body mb-3">
          <h5 className="animated bounceIn">
            <i
              className="fa fa-arrow-circle-down text-secondary"
              aria-hidden="true"
              onClick={this.onShowClick}
              style={{ cursor: 'pointer' }}
            />{' '}
            Comment by: <small>{name}</small>
            <i
              className="fa fa-times float-right"
              aria-hidden="true"
              onClick={this.onDeleteClick.bind(this, id)}
              style={{ cursor: 'pointer' }}
            />
            <Link to={`/comments/edit/${id}`}>
              <i
                className="fa fa-pencil-square-o float-right pr-3 pt-1"
                aria-hidden="true"
                style={{ cursor: 'pointer' }}
              />
            </Link>
          </h5>
          <ul className={showCommentInfo ? 'list-group animated bounceIn' : 'd-none'}>
            <li className="list-group-item">
              <strong className="text-danger">
                <i className="fa fa-user" aria-hidden="true" /> Comment:
              </strong>{' '}
              {body}
            </li>
            <li className="list-group-item">
              <strong className="text-danger">
                <i className="fa fa-envelope" aria-hidden="true" /> Email:
              </strong>{' '}
              {email}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = { deleteComment };

export default connect(
  null,
  mapDispatchToProps,
)(Comment);
