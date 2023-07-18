import React, { useContext } from 'react'
import { AppContext } from '../contexts/app_context'
import EmployeeListItem from './EmployeeListItem'

const EmployeeList = () => {

    let { employees, currentEmployee, changeEmployee, arrayEmployees, filteredEmployees } = useContext(AppContext)
    //filteredEmployees is delayed by 1 key
  return (
    <div className='employeeList'>
        {filteredEmployees.map((employee, index) => {
            return (
                <EmployeeListItem employee={employee} index={index} key={index}/>
            )
        })}
      
    </div>
  )
}

export default EmployeeList
