/* eslint-disable react/display-name */
import React from 'react';
import PropTypes from 'prop-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';

import BibelText from '../BibelText';

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => {
      if (!children || (children.length === 1 && children[0] === '')) {
        return null;
      }
      return <p>{children}</p>;
    },
    [BLOCKS.EMBEDDED_ENTRY]: (node) => {
      const { target } = node.data;
      const { id } = target.sys.contentType.sys;
      const { fields } = target;

      switch (id) {
        case 'bibeltext':
          // TODO: add Bibeltext Component
          return (
            <BibelText {...fields} />
          );

        default:
          return null;
      }
    },
  },
};

const RichText = ({ content }) => (
  <div className="u-richText">
    {documentToReactComponents(content, options)}
  </div>
);

RichText.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  content: PropTypes.object.isRequired,
};

export default RichText;
