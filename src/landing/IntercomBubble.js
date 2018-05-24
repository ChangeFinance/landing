// @flow
import React, { Component } from 'react';
import config from 'react-global-configuration';
import Intercom from 'react-intercom';

const appId = 'sj3ny015';

type State = {
  intercomUser: any,
};

type AccessToken = {
  access_token: string,
};

const fetchIntercomUser = async (accessToken: AccessToken) => {
  if(!accessToken) {
    return null;
  }
  const headers = new Headers();
  headers.append('Authorizaton', `Bearer ${accessToken.access_token}`);
  const userPromise = fetch(`${config.get('apiUrl')}/v1/me`, { headers });
  const profilePromise = fetch(`${config.get('apiUrl')}/v1/me/profile`, {
    headers,
  });
  const [userResponse, profileResponse] = await Promise.all([
    userPromise,
    profilePromise,
  ]);
  if (!userResponse.ok || !profileResponse.ok) {
    return null;
  }
  const profile = await profileResponse.json();
  const user = await userResponse.json();
  return {
    user_id: user.id,
    email: user.email,
    name:
      profile.firstName &&
      profile.lastName &&
      `${profile.firstName} ${profile.lastName}`,
  };
};

export class IntercomBubble extends Component<*, State> {
  state = {
    intercomUser: undefined,
  };

  componentDidMount() {
    if (window.localStorage) {
      const accessToken = window.localStorage.getItem('accessToken');
      fetchIntercomUser(JSON.parse(accessToken)).then(intercomUser => {
        this.setState(() => ({
          intercomUser,
        }));
      });
    } else {
      this.setState(() => ({ intercomUser: null }));
    }
  }

  render() {
    const { intercomUser } = this.state;
    if (intercomUser === null) {
      return <Intercom appID={appId} />;
    } else if (intercomUser) {
      return <Intercom appID={appId} {...intercomUser} />;
    } else {
      return null;
    }
  }
}

export default IntercomBubble;
