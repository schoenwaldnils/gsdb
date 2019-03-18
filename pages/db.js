import React, { PureComponent, Fragment } from 'react';

import '../app/css/index.css';

import Header from '../app/components/Header';

import getEntries from '../app/js/contentful';


class Page extends PureComponent {
  constructor() {
    super();
    this.grundsaetze = [];
    this.state = {
      hasLoaded: false,
    };
  }

  componentDidMount() {
    this.fetchGrundsaetze();
  }

  fetchGrundsaetze = async () => {
    const result = await getEntries('grundsatz');

    this.grundsaetze = result.items.map((item) => {
      return {
        id: item.sys.id,
        typ: item.fields.typ,
        name: item.fields.name,
        bibeltext: {
          stelle: item.fields.bibeltext.fields.biblestelle,
          text: item.fields.bibeltext.fields.text,
        },
      };
    });

    this.setState({
      hasLoaded: true,
    });
  }

  render() {
    if (this.state.hasLoaded) {
      console.log(this.grundsaetze);
    }

    return (
      <Fragment>
        <Header title="Datenbank" />
        <div className="dbtut">
          <h2>Die Anmeldung</h2>
          <p>
            Die Anmeldung ist eigendlich sehr einfach, sonst kann gerne ein
            <a href="/team">Teammitglied</a> angeschieben werden.
          </p>

          <ol>
            <li>Erstelle dir ein Account auf <a href="https://www.contentful.com/">Contentful</a></li>
            <li>...</li>
            <li>...</li>
          </ol>
        </div>

        { this.state.hasLoaded ? (
          <table className="dbtable">
            <thead>
              <td>Typ</td>
              <td>Grundsatz</td>
              <td>Bibeltext</td>
            </thead>
            { this.grundsaetze.map(grundsatz => (
              <tr key={grundsatz.id}>
                <td>{grundsatz.typ}</td>
                <td>{grundsatz.name}</td>
                <td>{grundsatz.bibeltext.stelle} - {grundsatz.bibeltext.text}</td>
              </tr>
            ))}
          </table>
        ) : (
          <div>
            Noch nicht geladen!
          </div>
        ) }
      </Fragment>
    );
  }
}

export default Page;
