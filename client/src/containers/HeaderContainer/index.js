import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as ROLES from '../../constants/roles';
import * as LINKS from '../../constants/links';

import Header from '../../components/Header';

class HeaderContainer extends Component {
  render() {
    const { user } = this.props;

    return (
      <>
        {user === null && (
          <Header links={LINKS.PUBLIC_LINKS} isAuthenticated={false} />
        )}
        {user && user.role === ROLES.ADMIN && (
          <Header links={LINKS.ADMIN_LINKS} isAuthenticated={true} />
        )}
        {user && user.role === ROLES.COMPANY && (
          <Header links={LINKS.COMPANY_LINKS} isAuthenticated={true} />
        )}
        {user && user.role === ROLES.USER && (
          <Header links={LINKS.USER_LINKS} isAuthenticated={true} />
        )}
      </>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(mapStateToProps)(HeaderContainer);
