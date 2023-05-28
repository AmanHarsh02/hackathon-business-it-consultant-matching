import { ConsultantCard } from "../../../Components/index";
import { useMatchingData } from "../../../contexts/MatchingDataContext";
import { Link } from "react-router-dom";
import { NavBar } from "../../../Components/navbar/NavBar";

export function ClientOverview() {
const {matchedConsultants} = useMatchingData()
const sortedData = matchedConsultants.sort((a,b) => (b.overallRating - a.overallRating))
  return (
    <div >
      <NavBar/>
      <h2 style={{fontSize:"50px",marginBottom:"30px"}}>Client Overview Page</h2>
      <div style={{maxWidth:"550px" ,margin:"auto"}}>
        {sortedData.map((consultantInfo)=><ConsultantCard {...consultantInfo} isShortlisted />)}
      </div>
    </div>

  );
}
