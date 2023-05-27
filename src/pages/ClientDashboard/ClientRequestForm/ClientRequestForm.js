import { useMatchingData } from "../../../contexts/MatchingDataContext";
import { SelectOption, InputOption } from "./FormOptions";
import { Link } from "react-router-dom";

export function ClientRequestForm() {
  const domainsOfExpertise = ["Ed Tech", "HR", "XYZ"];
  const softwareOptions = ["Option 1", "Option 2", "Option 3"];
const { state, dispatch, matchCategories,matchedConsultants } = useMatchingData()

const refreshHandler = ()=>{dispatch({type:'CONSULTANTS_LIST_REFRESH'})}
  const clickHandler = () =>{
    refreshHandler()
    matchCategories()
  }
  
  return (

    <div>
      <Link to="/client-overview">go to clientOverview</Link>
      <h1>Request Form</h1>
      <SelectOption label="Domain of Expertise" options={domainsOfExpertise} />
      <SelectOption label="Software" options={softwareOptions} />
      <InputOption label="Number of Users" type="number" />
      <InputOption label="Budget" type="text" />
      <InputOption label="Deadine" type="date" />
      <button onClick={()=>clickHandler()}>Submit</button>
    </div>
  );
}
