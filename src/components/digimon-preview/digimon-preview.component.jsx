import React from "react";

import DigimonItem from "../../components/digimon-item/digimon-item.component";

import "./digimon-preview.style.scss";

const DigimonPreview = ({ title, items }) => (
  <div className="digimon-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        // .filter((item, index) => index < 4)
        .map(({ id, ...otherItemProps }) => (
          <DigimonItem key={id} {...otherItemProps} />
        ))}
    </div>
  </div>
);

export default DigimonPreview;
