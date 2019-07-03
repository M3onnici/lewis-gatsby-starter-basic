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

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <Wrapper>
      <main>{children}</main>
    </Wrapper>
  </>
);

export default Layout;
