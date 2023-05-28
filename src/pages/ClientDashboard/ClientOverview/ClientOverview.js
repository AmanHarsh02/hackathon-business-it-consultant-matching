import "../ClientOverview/ClientOverview.css";
import { ConsultantCard } from "../../../Components/index";
import { useMatchingData } from "../../../contexts/MatchingDataContext";
import { Link } from "react-router-dom";

export function ClientOverview() {
const {matchedConsultants} = useMatchingData()
const sortedData = matchedConsultants.sort((a,b) => (b.overallRating - a.overallRating))
  return (<>
    <div className="client__overview__container">
      <Link to="/client-shortlist" >ShortList</Link>
      <h2>Client Overview Page</h2>
      <div className="consultant__card__container">
        {sortedData.map((consultantInfo)=><ConsultantCard {...consultantInfo} />)}
      </div>
    </div>
    <div className="consultant-container">
      <div className="head-container">
        <img src="" alt="" widht={135} height={150}/>
        <div className="match-container">
          <p>70%</p>
          <small>Match Score</small>
        </div>
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
    </>
  );
}
