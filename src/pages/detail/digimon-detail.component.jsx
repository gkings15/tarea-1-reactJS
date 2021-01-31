import React from "react";
import { useParams } from "react-router-dom";

import TrainerCard from "../../components/trainer-card/trainer-card.component";
import DigimonPreview from "../../components/digimon-preview/digimon-preview.component";
import DIGIMON_DATA from "../digimons/digimons.data";
import DIRECTORY_DATA from "../../components/directory/directory.data";

const DigimonDetail = () => {
  const { id } = useParams();
  return (
    <div>
      {DIRECTORY_DATA
      .filter((directory) => directory.linkUrl === id)
      .map(({ id, ...otherCollectionsProps }) => (
          <TrainerCard key={id} {...otherCollectionsProps} />
        )
      )}
      {DIGIMON_DATA
      .filter((item) => item.routeName === id)
      .map(({ id, ...otherCollectionsProps }) => (
          <DigimonPreview key={id} {...otherCollectionsProps} />
        )
      )}
    </div>
  );
};

export default DigimonDetail;
