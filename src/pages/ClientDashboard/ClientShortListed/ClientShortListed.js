import React from 'react'
import { useMatchingData } from '../../../contexts/MatchingDataContext'
import { ConsultantCard } from '../../../Components'

const ClientShortListed = () => {
    const{state} = useMatchingData()
    console.log(state)
  return (
    <div>{state?.shortListedConsultants?.map((clientInfo)=><ConsultantCard {...clientInfo} />)}</div>
  )
}

export default ClientShortListed