import { useState, createContext, useEffect } from "react";
import employees from "../models/employees";


// create context
export const AppContext = createContext()

// create context provider function
const AppContextProvider = (props) => {
    // global context
    const [currentEmployee, setCurrentEmployee] = useState(employees[1])
    const [showEmployee, setShowEmployee] = useState(true)
    const [buttonCount, setButtonCount] = useState(0)

    const changeEmployee = (index) => {
        setCurrentEmployee(employees[index])
        setShowEmployee(true)
    }

    const toggleEmployeePage = () => {
        setButtonCount((prev) => prev + 1)
        console.log('toggle employee page')
        setShowEmployee((prev) => !prev)
        console.log(showEmployee)
    }

    useEffect(() => {
        console.log(showEmployee)
    },[buttonCount])

    return(
    <AppContext.Provider value={{
        employees,
        currentEmployee, setCurrentEmployee, changeEmployee,
        showEmployee, setShowEmployee, toggleEmployeePage


    }}>
        {props.children}
    </AppContext.Provider>

    )
}

export default AppContextProvider