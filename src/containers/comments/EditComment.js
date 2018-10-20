import React, { Component } from 'react';
import InputTextarea from '../../components/layout/InputTextarea';
import InputGroup from '../../components/layout/InputGroup';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { editComment } from '../../store/actions/commentActions';
import { getComment } from '../../store/actions/commentActions';

export class EditComment extends Component {
  static propTypes = {
    comment: PropTypes.object.isRequired,
    editComment: PropTypes.func.isRequired,
    getComment: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    email: '',
    body: '',
    errors: {},
  };

  componentWillReceiveProps(nextProps, nextState) {
    const { name, email, body } = nextProps.comment;
    this.setState({
      name,
      email,
      body,
    });
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getComment(id);
  }

  onSubmit = async e => {
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
          body: 'Phone Is Required',
        },
      });
      return;
    }

    const { id } = this.props.match.params;

    const updatedComment = {
      id,
      name,
      email,
      body,
    };
    //Filling the form with comment data to be edited
    this.props.getComment(id);

    //Put Request
    this.props.editComment(updatedComment);

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
            <strong>Edit Comment</strong>
          </div>
          <div className="card-body">
            <form onSubmit={this.onSubmit.bind(this)}>
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
                      placeholder="Enter Content"
                    />
                  </div>
                </div>
                <div className="mx-auto">
                  <input
                    type="submit"
                    className="form-control form-control-lg btn btn-light mt-2"
                    value="Update Comment"
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
  comment: state.commentReducer.comment,
});
const mapDispatchToProps = { editComment, getComment };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditComment);
