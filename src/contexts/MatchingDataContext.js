import { createContext, useContext } from "react";

const MatchingDataContext = createContext();

export function MatchingDataProvider({ children }) {
  return (
    <MatchingDataContext.Provider>{children}</MatchingDataContext.Provider>
  );
}

export const useMatchingData = () => useContext(MatchingDataContext);
