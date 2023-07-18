import { useState, createContext } from "react";
import employees from "../models/employees";


// create context
export const AppContext = createContext()


// create context provider function
const AppContextProvider = (props) => {
    // global context
    let [test, setTest] = useState('testing')
    return(
    <AppContext.Provider value={{
        employees,

        
    }}>
        {props.children}
    </AppContext.Provider>

    )
}

export default AppContextProvider