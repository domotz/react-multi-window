import {useContext, createContext} from 'react';

export const NewWindowContext = createContext({});

export const useDocument = () => useContext(NewWindowContext)?.document ?? window.document;
export const useNewWindow = () => useContext(NewWindowContext)?.document ?? window.document;
