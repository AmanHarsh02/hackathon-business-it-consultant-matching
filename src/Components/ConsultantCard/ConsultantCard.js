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
      <div className="consultant__details">
        <h3>{name}</h3>
        <p>{description}</p>
        <div className="match__score__badge__container">
          <p className="match__score__badge">{matchedScore}</p>
          <p className="match__score__text">Match Score</p>
        </div>
        {/* <p>{mandayHours}</p> */}
        <button className="shortlist__btn">Shortlist +</button>
      </div>
    </div>
  );
};

// [{consultantId,overallRating,budgetRating}]
