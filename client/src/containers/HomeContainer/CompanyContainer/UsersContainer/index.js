import React, { Component } from 'react';
import { withAPI } from '../../../../services/api';

import Users from '../../../../components/Home/Company/Users';

class UsersContainer extends Component {
  state = { users: [] };

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

  render() {
    return <Users users={this.state.users} />;
  }
}

export default withAPI(UsersContainer);
