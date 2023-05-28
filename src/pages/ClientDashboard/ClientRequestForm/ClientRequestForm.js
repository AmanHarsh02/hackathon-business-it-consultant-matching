import React, { useRef, useState } from "react";
import { useMatchingData } from "../../../contexts/MatchingDataContext";
import { SelectOption, InputOption } from "./FormOptions";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "./ClientRequestForm.css"

import { NavBar } from "../../../Components/navbar/NavBar";

export function ClientRequestForm() {
  const domainsOfExpertise = ["EdTech", "Fintech", "HealthTech", "AgTech", "SAAS"];
  const softwareOptions = ["CRM", "ERP", "Order"];
  const { state, dispatch, matchCategories} = useMatchingData();
  const navigate=useNavigate();

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
    navigate("./client-overview");
  };

  return (<>
  <NavBar />
    <div className="request-form-container">
      
      <h1>Request Form</h1>

      <label htmlFor="domainExpertise">Select your Domain</label>
      <SelectOption id="domainExpertise" label="Domain of Expertise" ref={expertiseRef} options={domainsOfExpertise} />

      <label htmlFor="software">Software Requirement</label>
      <SelectOption id="software" label="Software" ref={softwareRef} options={softwareOptions} />

      <label htmlFor="users">Number of Users you are expecting for your app</label>
      <InputOption  id="users" label="Number of Users" type="number" ref={numOfUsersRef} />

      <label htmlFor="Budget">Budget</label>
      <InputOption  id="Budget" label="Budget" type="text" ref={budgetRef} />

      <label htmlFor="start-date">Project Start Date</label>
      <InputOption  id="start-date" label="Start Date" type="date" ref={startDateRef} />

      <label htmlFor="end-date">Project End</label>
      <InputOption  id="end-date" label="End Date" type="date" ref={endDateRef} />
      <button onClick={clickHandler} className="form-button">Submit</button>
    </div>
    </>
  );
}
