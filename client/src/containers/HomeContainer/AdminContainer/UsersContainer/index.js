import React, { Component } from 'react';
import { withAPI } from '../../../../services/api';

import Users from '../../../../components/Home/Admin/Users';

class UsersContainer extends Component {
  state = { users: [], isProcessing: false, selectedUserId: '' };

  componentDidMount() {
    this.getUsers();
  }

  getUsers = () => {
    const { api } = this.props;

    api
      .getUsers()
      .then(response => {
        this.setState({ users: response.data });
      })
      .catch(error => console.log(error.response.data.message));
  };

  handleDelete = e => {
    const { api } = this.props;
    const id = e.target.dataset.id;

    this.setState({ isProcessing: true, selectedUserId: id });

    api
      .deleteUser(id)
      .then(() => this.getUsers())
      .catch(error => console.log(error.response.data.message));
  };

  render() {
    const { users, isProcessing, selectedUserId } = this.state;

    return (
      <Users
        users={users}
        handleDelete={this.handleDelete}
        isProcessing={isProcessing}
        selectedUserId={selectedUserId}
      />
    );
  }
}

export default withAPI(UsersContainer);
