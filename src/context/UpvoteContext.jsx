import React, { createContext, useContext, useCallback } from "react";
import usePersistentState from "../hooks/usePersistentState";

const UpvoteContext = createContext();
export const useUpvote = () => useContext(UpvoteContext);

export const UpvoteProvider = ({ children }) => {
  const [upvoteLists, setUpvoteLists] = usePersistentState("upvoteLists", {
    list1: [false, false],
    list2: [false, false],
  });

  const toggleUpvote = useCallback((list, index) => {
    setUpvoteLists((prev) => ({
      ...prev,
      [list]: prev[list].map((val, i) => (i === index ? !val : val)),
    }));
  }, [setUpvoteLists]);
  

  const addUpvote = useCallback((list) => {
    setUpvoteLists((prev) => ({
      ...prev,
      [list]: [...prev[list], false],
    }));
  }, [setUpvoteLists]);

  return (
    <UpvoteContext.Provider value={{ upvoteLists, toggleUpvote, addUpvote }}>
      {children}
    </UpvoteContext.Provider>
  );
};
