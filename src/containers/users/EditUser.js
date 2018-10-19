import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class EditUsers extends Component {
  static propTypes = {};

  render() {
    return (
      <div>
        <h1>Edit User Page</h1>
        <h5>Route Param: {this.props.match.params.id}</h5>
      </div>
    );
  }
}

export default EditUsers;
