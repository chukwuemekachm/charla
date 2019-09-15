import * as React from 'react';
import styled from 'styled-components';
import SearchContact from './SearchContact';
import NavStrip from './NavStrip';

function NavBar() {
  return (
    <NavBar.Wrapper>
      <SearchContact />
      <NavStrip />
    </NavBar.Wrapper>
  );
}

NavBar.Wrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  margin-left: 70px;
  width: calc(100vw - 70px);
  box-shadow: 0 0.32em 2em rgba(153, 153, 153, .2);
`;

export default NavBar;
