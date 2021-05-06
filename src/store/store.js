import { useEffect, useState } from "react";

let globalState = {};
let listners = [];
let actions = {};

export const useStore = () => {
  const setState = useState(globalState)[1]; //Intrusted in second value in updating function

  //It will update react State with new Globalstate and it will rerender the commponent
  const dispatch = (actionIndentifire, payload) => {
    const newState = actions[actionIndentifire](globalState,payload);
    globalState = { ...globalState, ...newState };

    for (const listner of listners) {
      listner(globalState);
    }
  };

  // it will rerender when my custom hook will used
  useEffect(() => {
    listners.push(setState); //Pushed setSate in listners array and value of setSate is captured here of that component which useing my custome hook

    // Clean up funciton for remove the listener when then lister unmount here
    return () => {
      listners = listners.filter((li) => li !== setState); // listner not equal to setState because seSate which i added into listner here
    };
  }, [setState]);

  // Return Global state and dispatch 
  return [globalState, dispatch];
};

export const initStore = (userActions, initialState) => {
  //If initialSate not null then set globalState object and copy previous globalstate and initialstate using array destructuring 
  if (initialState) {
    globalState = { ...globalState, ...initialState };
  }
// Merge our action with gloabal Actions and userActions 
  actions = { ...actions, ...userActions };
};
