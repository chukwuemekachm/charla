import * as React from 'react';
import styled from 'styled-components';

function Banner() {
  return (
    <Banner.Wrapper></Banner.Wrapper>
  );
}

Banner.Wrapper = styled.div`
  width: 65vw;
  height: 100vh;
  background-color: rgba(142, 142, 167, 0.4);
`;

Banner.Overlay = styled.div``;

export default Banner;
