import * as React from 'react';
import styled from 'styled-components';

import SideNav from './SideNav';
import NavBar from './NavBar';

interface LayoutProps {
  children: JSX.Element;
}

function Layout({ children }: LayoutProps) {
  return (
    <Layout.Wrapper>
      <NavBar />
      <SideNav />
      <Layout.Main>{children}</Layout.Main>
    </Layout.Wrapper>
  );
}

Layout.Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

Layout.Main = styled.main`
  width: 100%;
  padding-left: 70px;
  padding-top: 59px;
`;

export default Layout;
