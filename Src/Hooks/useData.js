import React, {useCallback, useContext, useEffect, useState} from 'react';
export const DataContext = React.createContext({});

export const DataProvider = ({children}) => {
    const [color, setColor] = useState("#ef3365");

    const contextValue = {
    color,setColor
    }
    return (
        <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
      );
}
export const useData = () => useContext(DataContext) 
