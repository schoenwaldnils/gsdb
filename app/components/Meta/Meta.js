import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import Favicons from '../Favicons';

const Meta = ({
  url, type, title, description, image,
}) => {
  return (
    <Head>
      <meta content="width=device-width,initial-scale=1" name="viewport" />

      <title>{ title } - Grundsatzdatenbank</title>
      <meta name="description" content={description} />

      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="Grundsatzdatenbank" />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="200" />
      <meta property="og:image:height" content="200" />

      <Favicons />
    </Head>
  );
};

Meta.defaultProps = {
  url: 'https://gsdb.schoen.world',
  type: 'website',
  title: 'GSDB',
  description: 'Grundsatzdatenbank',
  image: 'https://gsdb.schoen.world/static/assets/images/favicon.png',
};

Meta.propTypes = {
  url: PropTypes.string,
  type: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

export default Meta;
