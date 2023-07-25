import { useState, createContext, useEffect } from "react";
import employees from "../models/employees";


// create context
export const AppContext = createContext()

// create context provider function
const AppContextProvider = (props) => {
    // global context
    const [currentEmployee, setCurrentEmployee] = useState(employees[1])
    const [showEmployee, setShowEmployee] = useState(false)
    const [buttonCount, setButtonCount] = useState(0)
    const [searchEmployee, setSearchEmployee] = useState('') //for input
    const [filteredEmployees, setFilteredEmployees] = useState(employees) // to hold employees from filters... start will all employees

    const changeEmployee = (index) => {
        setCurrentEmployee(filteredEmployees[index]) //almost missed this fix
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

    const handleInput = (e) => {
        e.preventDefault()
        let name = e.target.value
        // console.log(name)
        setSearchEmployee(name.toLowerCase())
        console.log(`%csearched employee:  ${searchEmployee}`, 'color: lime')
        console.log('handling input...')
        filterAllEmployees()
    }

    let arrayEmployees = [] // holding names that match input
    const filterAllEmployees = () => {
        employees.filter((employee) => {
            let match = employee.name.toLowerCase().includes(searchEmployee)
            // console.log('MATCHHHHHHHH', match)
            if(match){
                arrayEmployees.push(employee)
                setFilteredEmployees(arrayEmployees)
            }
        })
        console.log(arrayEmployees)
        console.log(`%cFiltered Employees: ${filteredEmployees.length}`, 'color: red')
        console.log(filteredEmployees)
    }

    useEffect(() => {
        // setFilteredEmployees(arrayEmployees)
        console.log(`USE EFFECT FILTERED EMPLOYEES`, filteredEmployees)
    }, [arrayEmployees])

    return(
    <AppContext.Provider value={{
        employees,
        currentEmployee, setCurrentEmployee, changeEmployee,
        showEmployee, setShowEmployee, toggleEmployeePage,
        searchEmployee, setSearchEmployee, handleInput,
        filteredEmployees, filterAllEmployees,
        arrayEmployees

    }}>
        {props.children}
    </AppContext.Provider>

    )
}

export default AppContextProvider