import * as React from 'react';
import styled from 'styled-components';

import Social from 'components/ui/Social';
import Banner from 'components/ui/Banner';
import { authenticateUser } from 'services';

const { useEffect } = React;

async function loginUser(search) {
  const res = await authenticateUser(search);
}

function Authentication({ location: { search } }) {
  useEffect(function () {
    if (search && typeof search === 'string') {
      loginUser(search);
    }
  });

  return (
    <Authentication.Wrapper>
      <Social />
      <Banner />
    </Authentication.Wrapper>
  );
}

Authentication.Wrapper = styled.div`
  display: flex;
  background-image: url('https://images.unsplash.com/photo-1562184724-0b0833e5ba27?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1966&q=80');
  background-position: center;
`;

export default Authentication;
// https://cdn.dribbble.com/users/1545170/screenshots/7147772/media/09638e07d8215857000e43dd102572db.jpg
