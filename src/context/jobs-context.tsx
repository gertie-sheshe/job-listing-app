import React, { useReducer, createContext } from 'react';
import { data } from '../data';

type Data = {
  id: number;
  company: string;
  logo: typeof import('*.svg');
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
};

type InitialStateType = {
  data: Data[];
};

type ActionType = {
  type: string;
  payload: string;
};

const initialState: InitialStateType = {
  data,
};

export const JobsContext = createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<any>;
}>({ state: initialState, dispatch: () => null });

const reducer = (state: InitialStateType, action: ActionType) => {
  switch (action.type) {
    case 'FILTER_DATA':
      let test = new RegExp(action.payload, 'gi');
      return {
        data: data.filter((data: Data) => data.role.match(test)),
      };
    default:
      return state;
  }
};

export const JobsContextProvider = (props: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <JobsContext.Provider value={{ state, dispatch }}>
      {props.children}
    </JobsContext.Provider>
  );
};
