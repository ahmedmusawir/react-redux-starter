import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteUser } from '../../store/actions/userActions';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

export class User extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    deleteUser: PropTypes.func.isRequired,
  };
  state = {
    showUserInfo: false,
  };
  onShowClick = () => {
    this.setState({
      showUserInfo: !this.state.showUserInfo,
    });
  };
  onDeleteClick = id => {
    confirmAlert({
      title: 'Confirm Delete',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => this.props.deleteUser(id),
        },
        {
          label: 'No',
          onClick: () => 'do nothing',
        },
      ],
    });
  };

  render() {
    const { id, name, email, phone } = this.props;
    const { showUserInfo } = this.state;

    return (
      <div className="col-sm-6 col-md-6 col-lg-6">
        <div className="card card-body mb-3">
          <h4 className="animated bounceIn">
            <i
              className="fa fa-arrow-circle-down text-secondary"
              aria-hidden="true"
              onClick={this.onShowClick}
              style={{ cursor: 'pointer' }}
            />{' '}
            {name}
            <i
              className="fa fa-times float-right"
              aria-hidden="true"
              onClick={this.onDeleteClick.bind(this, id)}
              style={{ cursor: 'pointer' }}
            />
            <Link to={`/users/edit/${id}`}>
              <i
                className="fa fa-pencil-square-o float-right pr-3 pt-1"
                aria-hidden="true"
                style={{ cursor: 'pointer' }}
              />
            </Link>
          </h4>
          <ul className={showUserInfo ? 'list-group animated bounceIn' : 'd-none'}>
            <li className="list-group-item">
              <strong className="text-danger">
                <i className="fa fa-phone-square" aria-hidden="true" /> Phone:
              </strong>{' '}
              {phone}
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

const mapDispatchToProps = { deleteUser };

export default connect(
  null,
  mapDispatchToProps,
)(User);
