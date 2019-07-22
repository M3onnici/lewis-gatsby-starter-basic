import React from 'react';
import styled from 'styled-components';

import { GlobalStyles } from '../components';

const Wrapper = styled.div`
  padding: 0 var(--sides-padding-desktop);
  margin: 0 auto;
  max-width: 1400px;

  @media (max-width: 849px) {
    padding: 0 var(--sides-padding-mobile);
  }
`;

const Content = styled.main`
  max-width: 900px;
  margin: 0 auto;

  @media (max-width: 849px) {
    width: 100%;
  }
`;

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  </>
);

export default Layout;
