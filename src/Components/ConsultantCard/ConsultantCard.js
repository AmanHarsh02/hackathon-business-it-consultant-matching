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
        <img src="https://e1.pxfuel.com/desktop-wallpaper/429/293/desktop-wallpaper-coque-et-etui-iphone-luffy-smiling-zoro-aesthetic-ps4-thumbnail.jpg" alt="" widht={135} height={150}/>
        <div className="match-container">
          <p>70%</p>
          <small>Match Score</small>
        </div>

        <div className="main-container">
          <b>Company Name</b>
          <p>This is the favorite company of all time</p>
        </div>

        <div className="footer-container">
          <button>Shortlist</button>
          <div className="price-container">
            <strong>100000Rs</strong>
            <small>Effort Estimate</small>
          </div>
        </div>
      </div>

    </div>
    </>
  );
};

// [{consultantId,overallRating,budgetRating}]
// lin 13full card container
// line 14 avatar: image (JD)
// line 17 consultant k details, Name n descrition
// line 25 short list ka button
// together with stars
// line 20 container is match score container, it was circle, now its clean number
