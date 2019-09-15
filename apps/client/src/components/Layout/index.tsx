import * as React from 'react';
import styled from 'styled-components';
import SideNav from 'components/Layout/SideNav';
import NavBar from 'components/Layout/NavBar';

function Layout() {
  return (
    <Layout.Wrapper>
      <NavBar />
      <SideNav />
    </Layout.Wrapper>
  );
}

Layout.Wrapper = styled.div``;

Layout.Main = styled.main``;

export default Layout;
