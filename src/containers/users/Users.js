import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import User from './User';
import { getUsers } from '../../store/actions/userActions';

export class Users extends Component {
  static propTypes = {
    users: PropTypes.array.isRequired,
    getUsers: PropTypes.func.isRequired,
  };
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    const { users } = this.props;
    return (
      <div className="home-page pt-5">
        <h1 className="text-center mb-4">Redux User List</h1>
        <div className="row mb-5">
          <Link className="btn btn-secondary btn-block float-right" to={`/users/add`}>
            <i
              className="fa fa-pencil pr-3 pt-1"
              aria-hidden="true"
              style={{ cursor: 'pointer' }}
            />
            Add A User
          </Link>
        </div>
        <div className="row">
          {users.map(user => (
            <User
              key={user.id}
              id={user.id}
              name={user.name}
              email={user.email}
              phone={user.phone}
            />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.userReducer.users,
});
const mapDispatchToProps = { getUsers };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Users);
