import React from 'react';

import { Head, HeadingXL, Layout } from '../components';

const TextHome = styled.p`
  max-width: 28em;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10vh;

  font-size: 22px;
  line-height: 1.6;
  color: var(--dark-color-light);

  @media (max-width: 849px) {
    font-size: 19px;
  }
`;

const Index = () => (
  <Layout>
    <Head title={`Home`} />
    <HeadingXL>Lewis Gatsby Starter Basic</HeadingXL>
    <TextHome>
      This is a custom basic Gatsby starter template to start a website.
    </TextHome>
  </Layout>
);

export default Index;
