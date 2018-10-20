import React, { Component } from 'react';
import InputGroup from '../../components/layout/InputGroup';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { editUser } from '../../store/actions/userActions';
import { getUser } from '../../store/actions/userActions';

export class EditUser extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    editUser: PropTypes.func.isRequired,
    getUser: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    email: '',
    phone: '',
    errors: {},
  };

  componentWillReceiveProps(nextProps, nextState) {
    const { name, email, phone } = nextProps.user;
    this.setState({
      name,
      email,
      phone,
    });
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getUser(id);
  }

  onSubmit = async e => {
    e.preventDefault();
    const { name, email, phone } = this.state;

    //Check For Errors
    if (name === '') {
      this.setState({
        errors: {
          name: 'Name Is Required',
        },
      });
      return;
    }

    if (email === '') {
      this.setState({
        errors: {
          email: 'Email Is Required',
        },
      });
      return;
    }

    if (phone === '') {
      this.setState({
        errors: {
          phone: 'Phone Is Required',
        },
      });
      return;
    }

    const { id } = this.props.match.params;

    const updatedUser = {
      id,
      name,
      email,
      phone,
    };
    //Filling the form with user data to be edited
    this.props.getUser(id);

    //Put Request
    this.props.editUser(updatedUser);

    //Clear State
    this.setState({
      name: '',
      email: '',
      phone: '',
      errors: {},
    });

    //Redirect to Home
    this.props.history.push('/users');
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <div className="add-user-from-container animated slideInLeft pt-5">
        <div className="card mb-3">
          <div className="card-header text-danger">
            <strong>Edit User</strong>
          </div>
          <div className="card-body">
            <form onSubmit={this.onSubmit.bind(this)}>
              <div className="">
                <InputGroup
                  name="name"
                  type="text"
                  placeholder="Enter Name"
                  value={name}
                  onChange={this.onChange}
                  error={errors.name}
                />

                <div className="row">
                  <div className="col-md-6">
                    <InputGroup
                      name="email"
                      type="email"
                      placeholder="Enter Email"
                      value={email}
                      onChange={this.onChange}
                      error={errors.email}
                    />
                  </div>
                  <div className="col-md-6">
                    <InputGroup
                      name="phone"
                      type="phone"
                      placeholder="Enter Phone"
                      value={phone}
                      onChange={this.onChange}
                      error={errors.phone}
                    />
                  </div>
                </div>
                <div className="mx-auto">
                  <input
                    type="submit"
                    className="form-control form-control-lg btn btn-light mt-2"
                    value="Update User"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.userReducer.user,
});
const mapDispatchToProps = { editUser, getUser };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditUser);
