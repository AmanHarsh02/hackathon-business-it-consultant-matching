import { consultantDB } from "../../ConsultantData";
import { useMatchingData } from "../../contexts/MatchingDataContext";
import "./ConsultantCard.css";
import React from "react";

export const ConsultantCard = ({consultantId,overallRating,budgetRating}) => {
  const {state,dispatch} = useMatchingData()
  const consultantCardData = consultantDB.find(({id}) =>(id === consultantId))
  const shortListCandidate = () => {
    dispatch({type:"CONSULTANTS_SHORTLIST",payload:{consultantId,overallRating,budgetRating}})
  }
  return (<>
    {/* <div className="consultant__card"> 
      <div className="consultant__avatar">
        {`${consultantCardData?.empName.split(" ")[0][0]} ${consultantCardData.empName.split(" ")[1][0]}`}
      </div>
      <div className="consultant__details">
        <h3>{consultantCardData?.empName}</h3>
        <p>{consultantCardData?.empDescription}</p>
        <div className="match__score__badge__container">
          <p className="match__score__badge">{overallRating/5 * 100}%</p>
          <p className="match__score__text">Match Score</p>
        </div>
        <p>{consultantCardData?.manDayCost}</p>
        <button onClick={shortListCandidate} className="shortlist__btn">Shortlist +</button>
      </div>
    </div> */}
    <div className="consultant-container">
      <div className="head-container">
      <div className="">
        {`${consultantCardData?.empName.split(" ")[0][0]} ${consultantCardData.empName.split(" ")[1][0]}`}
      </div>
        <img src="/images/Group 1.svg"/>
        <div>
        </div>
        <div className="match-container">
          <p className="match-score">{overallRating/5 * 100}%</p>
          <small>Match Score</small>
        </div>

        <div className="main-container">
          <b>{consultantCardData?.empName}</b>
          <p>{consultantCardData?.empDescription}</p>
        </div>

        <div className="footer-container">
          <button>Shortlist</button>
          <div className="price-container">
            <strong>{consultantCardData.manDayCost * state.formFields.deadline}</strong>
            <small>Effort Estimate</small>
          </div>
        </div>
      </div>

    </div>
    </>
  );
};
