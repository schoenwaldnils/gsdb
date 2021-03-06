import React from 'react';

import '../app/css/index.css';

import Page from '../app/components/Page';

export default () => (
  <Page title="Home">
    <div className="idee">
      <h2>Die Idee</h2>
      <p>
        Die Ideen der Grundsatz-Datenbank sind folgende:
      </p>
      <p>
        1. Die Grundsätze sollen leicht einzusortieren und leicht wiederzufinden sein.
      </p>
      <p>
        Das bedeutet, dass es ein System gibt,
        in das die Grundsätze hineingeschrieben werden können und dank einer
        Suchfunktion leicht wiedergefunden werden können.<br />
        Wie die Seite {}
        <a href="https://de.wikipedia.org/wiki/Wikipedia:Hauptseite">Wikipedia</a>,
        soll die Grundsatzdatenbank durch Einträge von Usern gefüttert werden und immer weiter wachsen.
      </p>
      <p>
        2. Das zweite und wichtigere Ziel lässt sich gut mit einem Bibeltext beschreiben:
      </p>
      <p>
        <i className="bibeltexthome">"...lebt auch danach..." (Jakobus 1:22)</i>
      </p>
      <p>
        Es bringt nichts, die Grundsätze schön sortiert in einer Tabelle zu haben,
        wenn man sich nicht nach ihnen ausrichtet.
        Die Datenbank ist sogesehen nur eine Hilfestellung um bestimmte Grundsätze
        zu finden oder anderen zu zeigen.
      </p>
      <br /><br />
      <h2>
        Grundsatz oder Gesetz?
      </h2>
      <p>
        Was genau ist aber der Unterschied zwischen einem Gesetz und Grundsätzen?
      </p>
      <p>
        Ein Gesetz ist ein eindeutiger Befehl etwas zu tun oder nicht zu tun.
        Als Beispiel: <i>"Gehe nicht über eine rote Ampel"</i>.
        Entweder man hält sich an das Gesetz oder auch nicht.
      </p>
      <p>
        Ein Grundsatz hingegen kann von jedem anders interpretiert werden.
        Ein Beispiel wäre: <i>"Behandle andere so, wie du von ihnen behandelt werden möchtest"</i>.
        Jeder würde seine Mitmenschen, nach diesem Grundsatz, anders behandeln und das macht den Unterschied aus.
      </p>
    </div>
  </Page>
);
