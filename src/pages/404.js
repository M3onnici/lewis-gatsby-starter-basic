import React from 'react';

import { HeadingXL, Layout, SEO } from '../components';

const NotFoundPage = () => (
  <Layout>
    <SEO title={404} />
    <HeadingXL>Page not found</HeadingXL>
  </Layout>
);

export default NotFoundPage;
