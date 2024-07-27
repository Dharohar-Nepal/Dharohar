import React, { useState } from "react";
import Data from '../Data'


const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [item, setItem] = useState(Data)

    return <AppContext.Provider value={{ item, setItem }} >
        {
            children
        }
    </AppContext.Provider>
}

export { AppContext, AppProvider }