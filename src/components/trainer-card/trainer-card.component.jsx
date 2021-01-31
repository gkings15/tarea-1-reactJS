import React from "react";

const TrainerCard = ({ children, imageUrlChildren }) => (
  <div className="collection-item">
    <div
      className="image"
      style={{
        backgroundImage: `url(${imageUrlChildren})`,
      }}
    />
    <div className="collection-footer">
      <span className="name">{children}</span>
    </div>
  </div>
);

export default TrainerCard;
