import React, { useContext } from 'react'
import { AppContext } from '../contexts/app_context'
import EmployeeListItem from './EmployeeListItem'

const EmployeeList = () => {

    let { employees, currentEmployee, changeEmployee } = useContext(AppContext)
    
  return (
    <div className='employeeList'>
        {employees.map((employee, index) => {
            return (
                <EmployeeListItem employee={employee} index={index} key={index}/>
            )
        })}
      
    </div>
  )
}

export default EmployeeList
