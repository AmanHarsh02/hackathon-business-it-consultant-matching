import React from 'react'
import { useMatchingData } from '../../../contexts/MatchingDataContext'
import { ConsultantCard } from '../../../Components'
import { NavBar } from '../../../Components/navbar/NavBar'
import { ConsultantCardShortlisted } from '../../../Components/ConsultantCard/ConsultantCardShortlisted'

const ClientShortListed = () => {
    const{state} = useMatchingData()

  return (
    <div>
    <NavBar/>
    <h2 style={{fontSize:"50px",marginBottom:"30px"}}>Shortlisted Candidates</h2>
    <div>{state?.shortListedConsultants?.map((clientInfo)=><ConsultantCardShortlisted {...clientInfo} isShortlisted />)}</div>
    </div>
  )
}

export default ClientShortListed