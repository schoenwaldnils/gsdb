import React, { Fragment } from 'react';
import PropsTypes from 'prop-types';

import Meta from '../Meta';
import Header from '../Header';
import './Page.css';

const Page = ({ title, children }) => (
  <Fragment>
    <Meta title={title} />
    <div className="Page">
      <Header title={title} />
      <div className="Page-content">
        {children}
      </div>
    </div>

  </Fragment>
);

Page.propTypes = {
  title: PropsTypes.string.isRequired,
  children: PropsTypes.node.isRequired,
};

export default Page;
