import * as React from 'react';
import styled from 'styled-components';

import Social from 'components/ui/Social';
import Banner from 'components/ui/Banner';
import { authenticateUser } from 'services';
import { withContext } from 'providers';

const { useEffect } = React;

let sentRequest = false;

async function loginUser(search, setUser) {
  const { data } = await authenticateUser(search);
  setUser(data);
  sentRequest = true;
}

function Authentication(props) {
  const {
    location: { search },
    context: { auth: { setUser } },
  } = props;

  useEffect(function () {
    if (search && typeof search === 'string' && !sentRequest) {
      loginUser(search, setUser);
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

export default withContext(Authentication);
