import React, { useState } from "react";
import Data from '../Data' //fetched data from file


const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [item, setItem] = useState(Data) //for state management



    //passing the values obtained from data in the name of item to any of the component 
    return <AppContext.Provider value={{ item, setItem }} > 
        {
            children
        }
    </AppContext.Provider>
}

export { AppContext, AppProvider }