import React, { Component } from 'react';
import InputGroup from '../../components/layout/InputGroup';
import InputTextarea from '../../components/layout/InputTextarea';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { editPost } from '../../store/actions/postActions';
import { getPost } from '../../store/actions/postActions';

export class EditPost extends Component {
  static propTypes = {
    post: PropTypes.object.isRequired,
    editPost: PropTypes.func.isRequired,
    getPost: PropTypes.func.isRequired,
  };

  state = {
    id: '',
    title: '',
    body: '',
    errors: {},
  };

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   const { id, title, body } = nextProps.post;
  //   if (nextProps.post !== prevState.post) {
  //     return {
  //       id,
  //       title,
  //       body,
  //     };
  //   }

  //   return null;
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log(this.props.post);
  //   console.log(prevState);
  //   const { id, title, body } = this.props.post;

  //   if (prevState == this.props.post) {
  //     this.setState({
  //       id,
  //       title,
  //       body,
  //     });
  //   }
  // }

  componentWillReceiveProps(nextProps, nextState) {
    const { id, title, body } = nextProps.post;
    console.log(`Next Props in Will Receive Props: ${nextProps.post.title}`);

    this.setState({
      id,
      title,
      body,
    });
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getPost(id);
  }

  onSubmit = async (e) => {
    e.preventDefault();
    const { title, body } = this.state;

    //Check For Errors
    if (title === '') {
      this.setState({
        errors: {
          title: 'Title Is Required',
        },
      });
      return;
    }

    if (body === '') {
      this.setState({
        errors: {
          body: 'Content Is Required',
        },
      });
      return;
    }

    const { id } = this.props.match.params;

    const updatedPost = {
      id,
      title,
      body,
    };
    //Filling the form with user data to be edited
    this.props.getPost(id);

    //Put Request
    this.props.editPost(updatedPost);

    //Clear State
    this.setState({
      title: '',
      body: '',
      errors: {},
    });

    //Redirect to Home
    this.props.history.push('/posts');
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { id, title, body, errors } = this.state;

    return (
      <div className="add-post-from-container animated slideInLeft pt-5">
        <div className="card mb-3">
          <div className="card-header text-danger">
            <strong>Edit Post</strong>
          </div>
          <div className="card-body">
            <h5>Article ID: {id}</h5>
            <form onSubmit={this.onSubmit.bind(this)}>
              <div className="">
                <InputGroup
                  name="title"
                  type="text"
                  placeholder="Enter Post Title"
                  value={title}
                  onChange={this.onChange}
                  error={errors.title}
                />

                <div className="row">
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
                    value="Update Post"
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

const mapStateToProps = (state) => ({
  post: state.postReducer.post,
});
const mapDispatchToProps = { editPost, getPost };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditPost);
