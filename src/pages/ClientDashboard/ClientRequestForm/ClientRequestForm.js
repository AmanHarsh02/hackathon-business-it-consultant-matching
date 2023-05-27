import React, { useRef, useState } from "react";
import { useMatchingData } from "../../../contexts/MatchingDataContext";
import { SelectOption, InputOption } from "./FormOptions";
import { Link } from "react-router-dom";

export function ClientRequestForm() {
  const domainsOfExpertise = ["EdTech", "Fintech", "HealthTech", "AgTech", "SAAS"];
  const softwareOptions = ["CRM", "ERP", "Order"];
  const { state, dispatch, matchCategories, matchedConsultants } = useMatchingData();

  const refreshHandler = () => {
    dispatch({ type: "CONSULTANTS_LIST_REFRESH" });
  };

  const expertiseRef = useRef("");
  const softwareRef = useRef("");
  const numOfUsersRef = useRef("");
  const budgetRef = useRef("");
  const startDateRef = useRef("");
  const endDateRef = useRef("");

  const sendRequirements = () => {
    const startDate = new Date(startDateRef.current.value);
    const endDate = new Date(endDateRef.current.value);
    const daysBetween = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24));
  
    const formData = {
      requiredDomain: expertiseRef.current.value,
      requiredSoftware: softwareRef.current.value,
      userNumber: numOfUsersRef.current.value || 0,
      budget: budgetRef.current.value || 0,
      deadline: daysBetween,
    };
  
    matchCategories(formData);
  };
  

  const clickHandler = () => {
    refreshHandler();
    matchCategories();
    sendRequirements();
  };

  return (
    <div>
      <Link to="/client-overview">go to clientOverview</Link>
      <h1>Request Form</h1>
      <SelectOption label="Domain of Expertise" ref={expertiseRef} options={domainsOfExpertise} />
      <SelectOption label="Software" ref={softwareRef} options={softwareOptions} />
      <InputOption label="Number of Users" type="number" ref={numOfUsersRef} />
      <InputOption label="Budget" type="text" ref={budgetRef} />
      <InputOption label="Start Date" type="date" ref={startDateRef} />
      <InputOption label="End Date" type="date" ref={endDateRef} />
      <button onClick={clickHandler}>Submit</button>
    </div>
  );
}
