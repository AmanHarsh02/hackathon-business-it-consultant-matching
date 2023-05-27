import { createContext, useContext, useReducer } from "react";

const MatchingDataContext = createContext();

export function MatchingDataProvider({ children }) {
<<<<<<< Updated upstream
  return (
    <MatchingDataContext.Provider>{children}</MatchingDataContext.Provider>
=======
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
    }
  };
  const initialState = {
    formFields: {
      domain: "FinTech",
      requiredSoftware: "CRM",
      userNumber: "23",
      budget: "10000",
      deadline: "20",
    },
    matchedConsultants: [],
  };
  const [state, dispatch] = useReducer(FormReducer, initialState);
  const { matchedConsultants } = state;

  // const consultantDB=[
  //     {id:"Emp1",empDomain:["Edtech","FinTech"],software:["CRM","ERP","Order"],manDayCost:"500"},
  //     {id:"Emp2",empDomain:["HealthTech","FinTech"],software:["CRM","ERP","Order"],manDayCost:"700"},
  //     {id:"Emp3",empDomain:["Edtech","Manufacturing"],software:["CRM","ERP","Order"],manDayCost:"900"},
  // ]

  const matchCategories = (consultantDB) => {
    const {
      formFields: { domain, requiredSoftware, userNumber, budget, deadline },
    } = state;
    consultantDB?.map(({ id, empDomain, software, manDayCost }) => {
      let requirementMatch = 0;
      let requirementBudget = 0;
      requirementMatch =
        empDomain.reduce((acc, curr) => (curr === domain ? acc + 1 : acc), 0) +
        software.reduce(
          (acc, curr) => (curr === requiredSoftware ? acc + 1 : acc),
          0
        );

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
  console.log(matchedConsultants);
  return (
    <MatchingDataContext.Provider value={{ state, dispatch, matchCategories }}>
      {children}
    </MatchingDataContext.Provider>
>>>>>>> Stashed changes
  );
}

export const useMatchingData = () => useContext(MatchingDataContext);
