import React, { useContext, useReducer } from "react";

const AppContext = React.createContext({});

export const ADD_TO_DATAS = 'INCREMENT';

const reducer = (state = [],action:any) => {
    switch (action.type) {
        case ADD_TO_DATAS : return [...action.payload];
        default : return state;
    }
}

export const AppProvider = ({ children }: any) => (
    <AppContext.Provider value={useReducer(reducer,[])}>{children}</AppContext.Provider>
);

export const useApp = () => useContext(AppContext);
