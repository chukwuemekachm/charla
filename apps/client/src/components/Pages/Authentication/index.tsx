import * as React from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import { Location } from 'history';

import Social from 'components/ui/Social';
import Banner from 'components/ui/Banner';
import { authenticateUser } from 'services';
import { withContext } from 'providers';


interface AuthenticationProps {
  location: Location;
  context: any;
}

class Authentication extends React.PureComponent<AuthenticationProps, {}> {
  async componentDidMount() {
    const {
      location: { search },
      context: { auth: { setUser } },
    } = this.props;

    if (search && typeof search === 'string') {
      const { data } = await authenticateUser(search);
      if (data) {
        setUser(data);
      }
    }
  }

  render() {
    const {
      context: { auth: { isAuthenticated } },
    } = this.props;

    if (isAuthenticated) {
      return <Redirect to="/" />
    }

    return (
      <Wrapper>
        <Social />
        <Banner />
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  display: flex;
  background-image: url('https://images.unsplash.com/photo-1562184724-0b0833e5ba27?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1966&q=80');
  background-position: center;
`;

export default withContext(Authentication);
