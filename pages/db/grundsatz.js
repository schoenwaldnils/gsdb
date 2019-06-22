import React, { PureComponent, Fragment } from 'react';

import '../../app/css/index.css';

import Page from '../../app/components/Page';

import { getEntry } from '../../app/js/contentful';
import getGrundsatzProps from '../../app/js/utils/getGrundsatzProps';
import getUrlHash from '../../app/js/utils/getUrlHash';


class Grundsatz extends PureComponent {
  constructor() {
    super();
    this.grundsatz = {};
    this.state = {
      hasLoaded: false,
    };
  }

  componentDidMount() {
    this.grundsatzId = getUrlHash();
    this.fetchGrundsatz();
  }

  fetchGrundsatz = async () => {
    const item = await getEntry(this.grundsatzId);

    if (item) {
      this.grundsatz = getGrundsatzProps(item);
    }

    this.setState({
      hasLoaded: true,
    });
  }

  render() {
    if (this.state.hasLoaded) {
      console.log(this.grundsatz);
    }

    return (
      <Page title="Datenbank">
        { this.state.hasLoaded ? (
          <Fragment>
            <table className="dbtable">
              <thead>
                <td>Typ</td>
                <td>Grundsatz</td>
                <td>Bibeltext</td>
              </thead>
              <tr key={this.grundsatz.id}>
                <td>{this.grundsatz.typ}</td>
                <td>{this.grundsatz.name}</td>
                <td>{this.grundsatz.bibeltext.stelle} - {this.grundsatz.bibeltext.text}</td>
              </tr>
            </table>
            <div>
              {this.grundsatz.content}
            </div>
          </Fragment>
        ) : (
          <div>
            Noch nicht geladen!
          </div>
        ) }
      </Page>
    );
  }
}

export default Grundsatz;
