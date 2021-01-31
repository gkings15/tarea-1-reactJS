import React from "react";

import "./digimon-item.styles.scss";

const DigimonItem = ({ name, imageUrl, children }) => (
  <div className="collection-item">
    <div
      className="image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="name">{`Niño elegido: ${children}`}</span>
    </div>
  </div>
);

export default DigimonItem;
