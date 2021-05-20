import { useEffect, useState } from "react";

let globalState = {};
let listners = [];
let actions = {};

export const useStore = () => {
  const setState = useState(globalState)[1]; //Interested in second value in updating function

  //It will update react State with new Global State and it will rerender the component
  const dispatch = (actionIndentifire, payload) => {
    const newState = actions[actionIndentifire](globalState,payload);
    globalState = { ...globalState, ...newState };

    for (const listner of listners) {
      listner(globalState);
    }
  };

    // it will re render when my custom hook will used
    useEffect(() => {
      listners.push(setState); //Pushed setState in listener array and value of setState is captured here of that component which useing my custome hook

      // Clean up function for remove the listener when that lister unmount here
      return () => {
        listners = listners.filter((li) => li !== setState); // listener not equal to setState because seSate which i added into listeners 
      };
    }, [setState]);

  // Return Global state and dispatch 
  return [globalState, dispatch];
};

export const initStore = (userActions, initialState) => {
  //If initialState not null then set global State object and copy previous globalstate and initialstate using array destructuring
  if (initialState) {
    globalState = { ...globalState, ...initialState };
  }
// Merge your action with global Actions and userActions
  actions = { ...actions, ...userActions };
};
