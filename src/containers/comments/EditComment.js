import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class EditComments extends Component {
  static propTypes = {};

  render() {
    return (
      <div>
        <h1>Comments Edit Page</h1>
        <h5>Route Param: {this.props.match.params.id}</h5>
      </div>
    );
  }
}

export default EditComments;
