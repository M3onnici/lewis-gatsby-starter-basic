import React from 'react';

import { Head, HeadingXL, Layout } from '../components';

const NotFoundPage = () => (
  <Layout>
    <Head title={404} />
    <HeadingXL>Page not found</HeadingXL>
  </Layout>
);

export default NotFoundPage;
