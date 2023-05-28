import { useNavigate } from "react-router";
import { consultantDB } from "../../ConsultantData";
import { useMatchingData } from "../../contexts/MatchingDataContext";
import "./ConsultantCard.css";
import React from "react";

export const ConsultantCardShortlisted = ({consultantId,overallRating,budgetRating},isShorlisted) => {
  const {state,dispatch} = useMatchingData()
  const navigate = useNavigate()
  const consultantCardData = consultantDB.find(({id}) =>(id === consultantId))
  const shortListCandidate = () => {
    navigate("/chat")
  }
  return (<>

    <div className="consultant-container">
      <div className="head-container">
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
          <div className="price-container">
            <strong>{consultantCardData.manDayCost * state.formFields.deadline}</strong>
            <small>Effort Estimate</small>
          </div>
          <button onClick={shortListCandidate}>Get Quote</button>
        </div>
      </div>

    </div>
    </>
  );
};

