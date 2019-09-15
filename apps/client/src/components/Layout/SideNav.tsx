import * as React from 'react';
import styled from 'styled-components';
import {
  CORN_FLOWER_BLUE,
  CORN_FLOWER_BLUE_02,
  MEDIUM_SEA_GREEN,
  WHITE,
} from 'styles/_colors';

function SideNav() {
  return (
    <SideNav.Wrapper>
      <SideNav.List>
        <SideNav.Logo>
          ch
        </SideNav.Logo>
        <SideNav.Item>
          <i className="icon ion-md-people" />
        </SideNav.Item>
        <SideNav.Item>
          <i className="icon ion-md-settings" />
        </SideNav.Item>
        <SideNav.Item>
          <i className="icon ion-md-calendar" />
        </SideNav.Item>
      </SideNav.List>
    </SideNav.Wrapper>
  );
}

SideNav.Wrapper = styled.nav`
  background-color: ${CORN_FLOWER_BLUE};
  width: 70px;
  height: 100vh;
  box-shadow: 0 0.32em 2em rgba(153, 153, 153, .2);
  position: fixed;
  top: 0;
  left: 0;
`;

SideNav.List = styled.ul`
  list-style-type: none;
`;

SideNav.Item = styled.li`
  padding: 15px 0px;
  width: 100%;
  text-align: center;
  border-bottom: 2px solid ${CORN_FLOWER_BLUE_02};

  &:hover {
    background-color: ${MEDIUM_SEA_GREEN};
    cursor: pointer;
  }

  i {
    font-size: 1.5em;
    color: ${WHITE};
  }
`;

SideNav.Logo = styled.h2`
  font-size: 1.5em;
  padding: 15px 0px;
  width: 100%;
  text-align: center;
  border-bottom: 2px solid ${CORN_FLOWER_BLUE_02};
  font-weight: 600;
  color: ${WHITE};
  background-color: #2862D3;
`;

export default SideNav;
