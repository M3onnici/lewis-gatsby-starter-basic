import React from 'react';

import { Head, Heading1, Layout } from '../components';

const NotFoundPage = () => (
  <Layout>
    <Head title={404} />
    <Heading1>Page not found</Heading1>
  </Layout>
);

export default NotFoundPage;
