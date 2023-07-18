import { useState, createContext } from "react";


// create context
export const AppContext = createContext()


// create context provider function
const AppContextProvider = (props) => {
    // global context
    let [test, setTest] = useState('testing')
    return(
    <AppContext.Provider value={{
        test
    }}>
        {props.children}
    </AppContext.Provider>

    )
}

export default AppContextProvider