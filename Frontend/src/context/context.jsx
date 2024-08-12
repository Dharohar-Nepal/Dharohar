import React, { useState } from "react";
import Data from '../Data' //fetched data from file
import Articles from '../Articles'


const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [item, setItem] = useState(Data) //for state management

    const [articles, setArticles] = useState(Articles)



    //passing the values obtained from data in the name of item to any of the component 
    return <AppContext.Provider value={{ item, setItem, articles, setArticles }} > 
        {
            children
        }
    </AppContext.Provider>
}

export { AppContext, AppProvider }