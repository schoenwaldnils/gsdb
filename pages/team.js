import React, { Fragment } from 'react';

import '../app/css/index.css';

import Meta from '../app/components/Meta';
import Header from '../app/components/Header';

const Page = () => {
  return (
    <Fragment>
      <Meta title="Das Team" />
      <Header title="Das Team" />
      <div className="team">
        <h2>Das Team der Grundsatzdatenbank</h2>

        <p>Nils Schönwald</p>
        <p>Tatjana Russ</p>
        <p>Luis Cierjacks</p>
        <br />
        <p>
          Bei Fragen gerne eine Email schreiben. Wir bitten um Verständnis, {}
          dass wir nicht jeden Tag auf jede Email antworten können. <br />
          Hier unsere Supportmail: {}
          <a href="mailto:grundsatzdatenbank@gmail.com" title="Klicke um uns eine Mail zu schreiben!">
            grundsatzdatenbank@gmail.com
          </a>
        </p>
      </div>
    </Fragment>
  );
};

export default Page;
