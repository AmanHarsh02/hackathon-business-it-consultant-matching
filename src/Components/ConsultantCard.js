import React from 'react'

const ConsultantCard = ({name,description,matchedScore,mandayHours}) => {
  return (
    <div>
        <h3>{name}</h3>
        <p>{description}</p>
        <article>{description}</article>
        <p>{matchedScore}</p>
        <p>{mandayHours}</p>
    </div>
  )
}

export default ConsultantCard

// [{consultantId,overallRating,budgetRating}]