import * as React from 'react';
import styled from 'styled-components';

import facebookLogo from '../../assets/logo-facebook.svg';
import googleLogo from '../../assets/logo-google.svg';
import twitterLogo from '../../assets/logo-twitter.svg';

import {
  WHITE_SMOKE,
  LIGHT_STEEL_BLUE,
  CORN_FLOWER_BLUE,
  BLACK,
} from 'styles/_colors';

function Social() {
  return (
    <Social.Wrapper>
      <Social.SocialLogins>
        <Social.LoginButton href="http://localhost:3000/api/v1/oauth/google">
          <img src={googleLogo} /> Login with Google
        </Social.LoginButton>
        <Social.LoginButton>
          <img src={facebookLogo} /> Login with Facebook
        </Social.LoginButton>
        <Social.LoginButton>
          <img src={twitterLogo} /> Login with Twitter
        </Social.LoginButton>
      </Social.SocialLogins>
    </Social.Wrapper>
  );
}

Social.Wrapper = styled.div`
  width: 35vw;
  height: 100vh;
  background-color: ${CORN_FLOWER_BLUE};
  box-shadow: 0 0.32em 2em rgba(0, 0, 0, .7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

Social.SocialLogins = styled.div``;

Social.LoginButton = styled.a`
  display: flex;
  align-items: center;
  padding: 5px 30px;
  width: 20vw;
  box-shadow: 0 0.32em 2em rgba(255, 255, 255, .2);
  box-sizing: border-box;
  background-color: ${WHITE_SMOKE};
  margin-bottom: 15px;
  border-radius: 2px;
  text-decoration: none;
  color: ${BLACK};

  img {
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }

  &:hover {
    cursor: pointer;
    background-color: ${LIGHT_STEEL_BLUE};
  }
`;

export default Social;
