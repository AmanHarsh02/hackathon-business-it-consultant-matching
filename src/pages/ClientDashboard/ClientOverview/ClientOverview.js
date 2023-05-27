import "../ClientOverview/ClientOverview.css";
import { ConsultantCard } from "../../../Components/index";
import { useMatchingData } from "../../../contexts/MatchingDataContext";

export function ClientOverview() {
const {matchedConsultants} = useMatchingData()
const sortedData = matchedConsultants.sort((a,b) => (b.overallRating - a.overallRating))
  return (
    <div className="client__overview__container">
      <h2>Client Overview Page</h2>
      <div className="consultant__card__container">
        {sortedData.map((consultantInfo)=><ConsultantCard {...consultantInfo} />)}
      </div>
    </div>
  );
}
