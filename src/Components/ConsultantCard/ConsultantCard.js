import "../ConsultantCard/ConsultantCard.css";
import React from "react";

export const ConsultantCard = ({
  consultant: { name, description, matchedScore, mandayHours },
}) => {
  return (
    <div className="consultant__card">
      <div className="consultant__avatar">
        {`${name.split(" ")[0][0]} ${name.split(" ")[1][0]}`}
      </div>
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
        <p>{matchedScore}</p>
        <p>{mandayHours}</p>
      </div>
    </div>
  );
};

// [{consultantId,overallRating,budgetRating}]
