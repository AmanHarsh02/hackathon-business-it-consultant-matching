import "../ConsultantCard/ConsultantCard.css";
import React from "react";

export const ConsultantCard = ({
  consultant: { name, description, matchedScore, mandayHours },
}) => {
  return (
    <div className="consultant__card">
      <h3>{name}</h3>
      <p>{description}</p>
      <article>{description}</article>
      <p>{matchedScore}</p>
      <p>{mandayHours}</p>
    </div>
  );
};

// [{consultantId,overallRating,budgetRating}]
