import React, { Component } from 'react';
import InputTextarea from '../../components/layout/InputTextarea';
import InputGroup from '../../components/layout/InputGroup';
import uuid from 'uuid';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addComment } from '../../store/actions/commentActions';

export class AddComment extends Component {
  static propTypes = {
    addComment: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    email: '',
    body: '',
    errors: {},
  };

  onSubmit = e => {
    e.preventDefault();
    const { name, email, body } = this.state;

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

    if (body === '') {
      this.setState({
        errors: {
          body: 'Comment Is Required',
        },
      });
      return;
    }

    const newComment = {
      id: uuid(),
      name,
      email,
      body,
    };

    //Adding Data to Redux
    this.props.addComment(newComment);

    //Clear State
    this.setState({
      name: '',
      email: '',
      body: '',
      errors: {},
    });

    //Redirect to Home
    this.props.history.push('/comments');
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { name, email, body, errors } = this.state;

    return (
      <div className="add-comment-from-container animated slideInLeft pt-5">
        <div className="card mb-3">
          <div className="card-header text-danger">
            <strong>Add Comment</strong>
          </div>
          <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <div className="">
                <div className="row">
                  <div className="col-md-6">
                    <InputGroup
                      name="name"
                      type="name"
                      placeholder="Enter Name"
                      value={name}
                      onChange={this.onChange}
                      error={errors.name}
                    />
                  </div>
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
                  <div className="col-md-12">
                    <InputTextarea
                      name="body"
                      value={body}
                      onChange={this.onChange}
                      error={errors.body}
                      placeholder="Leave Comment"
                    />
                  </div>
                </div>
                <div className="mx-auto">
                  <input
                    type="submit"
                    className="form-control form-control-lg btn btn-light mt-2"
                    value="Add Comment"
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

const mapDispatchToProps = { addComment };

export default connect(
  null,
  mapDispatchToProps,
)(AddComment);
