import { createContext, useContext, useReducer } from "react";
import { consultantDB } from "../ConsultantData";

const MatchingDataContext = createContext();

export function MatchingDataProvider({ children }) {
  const FormReducer = (request, { type, payload, inputField }) => {
    switch (type) {
      case "CHANGE_TEXT":
        return {
          ...request,
          formFields: { ...request.formFields, [inputField]: payload },
        };

      case "CONSULTANTS_LIST":
        return {
          ...request,
          matchedConsultants: [...request.matchedConsultants, payload],
        };

        case "CONSULTANTS_LIST_REFRESH":
        return{
            ...request,
            matchedConsultants: []
        }
        case "CONSULTANTS_SHORTLIST":
            return {
              ...request,
              shortListedConsultants: [...request.shortListedConsultants, payload]
            };
        
        default:
            return{...request}
    }
  };
  const initialState = {
    formFields: {
      requiredDomain: "Fintech",
      requiredSoftware: "CRM",
      userNumber: "23",
      budget: "10000",
      deadline: "20",
    },
    matchedConsultants: [],
    shortListedConsultants:[]
  };
  const [state, dispatch] = useReducer(FormReducer, initialState);
  const { matchedConsultants } = state;

  const matchCategories = (formData) => {
    if (!formData) {
      console.log("Form data is undefined");
      return;
    }
  
    const { requiredDomain, requiredSoftware, budget, deadline } = formData;
  
    consultantDB?.map(({ id, empDomain, software, manDayCost }) => {
      let requirementMatch = 0;
      let requirementBudget = 0;
  
      requirementMatch = empDomain.reduce(
        (acc, { domain, projects }) =>
          domain === requiredDomain ? acc * projects : acc,
        1
      ) + software.reduce((acc, curr) => (curr === requiredSoftware ? acc + 1 : acc), 0);
  
      requirementBudget = Math.floor(
        (Number(budget) / (Number(deadline) * Number(manDayCost))) * 100
      );
      if (requirementBudget > 100) requirementBudget = 100;
  
      addToMatchedConsultants(id, requirementMatch, requirementBudget);
    });
  };
  
  const addToMatchedConsultants = (
    consultantId,
    overallRating,
    budgetRating
  ) => {
    dispatch({
      type: "CONSULTANTS_LIST",
      payload: { consultantId, overallRating, budgetRating },
    });
  };
  return (
    <MatchingDataContext.Provider value={{ state, dispatch, matchCategories,matchedConsultants }}>
      {children}
    </MatchingDataContext.Provider>
  );
}

export const useMatchingData = () => useContext(MatchingDataContext);
