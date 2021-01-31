import React from "react";
import DigimonPreview from "../../components/digimon-preview/digimon-preview.component";

import DIGIMON_DATA from "./digimons.data";

class Digimons extends React.Component {
  constructor() {
    super();

    this.state = {
      collections: DIGIMON_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div>
        {collections.map(({ id, ...otherCollectionsProps }) => (
          <DigimonPreview key={id} {...otherCollectionsProps} />
        ))}
      </div>
    );
  }
}

export default Digimons;
