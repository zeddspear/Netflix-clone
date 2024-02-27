import React from 'react';
import logo from '../logo.svg';
import { Header } from '../Components';
import { Profile } from '../Components';
import * as PATHS from '../Constants/routes';

export function SelectProfileContainer({ user, setProfile }) {
  return (
    <>
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo src={logo} alt="Netflix" to={PATHS.HOME} />
        </Header.Frame>
      </Header>
      <Profile>
        <Profile.Title>Who is watching?</Profile.Title>
        <Profile.List>
          <Profile.User
            onClick={() => {
              setProfile(user);
            }}>
            <Profile.Picture src={user.photoURL} alt="ProfilePic" />
            <Profile.Name>{user.displayName}</Profile.Name>
          </Profile.User>
        </Profile.List>
      </Profile>
    </>
  );
}
