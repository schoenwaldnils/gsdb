import React, { Fragment } from 'react';

import '../app/css/index.css';

import Meta from '../app/components/Meta';
import Header from '../app/components/Header';

const Page = () => {
  return (
    <Fragment>
      <Meta title="Forum" />
      <Header title="Forum" />
    </Fragment>
  );
};

export default Page;
