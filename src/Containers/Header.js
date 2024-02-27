import React from 'react';
import { Header } from '../Components';
import * as PATHS from '../Constants/routes';
import logo from '../logo.svg';

function HeaderContainer({ children, signIn = false }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={PATHS.HOME} alt="NetflixLogo" src={logo} />
        {!signIn ? <Header.ButtonLink to={PATHS.SIGN_IN}>Sign In</Header.ButtonLink> : null}
      </Header.Frame>
      {children}
    </Header>
  );
}

export default HeaderContainer;
