import React, {useCallback, useContext, useEffect, useState} from 'react';
export const DataContext = React.createContext({});

export const DataProvider = ({children}) => {
    const [color, setColor] = useState("#ef3365");
    const [expanded, setExpanded] = useState(false);
    const [ind, setIndex] = useState(0);

    const contextValue = {
    color,setColor,
    expanded,setExpanded,
    ind,setIndex
    }
    return (
        <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
      );
}
export const useData = () => useContext(DataContext) 
