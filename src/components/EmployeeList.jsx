import React, { useContext } from 'react'
import { AppContext } from '../contexts/app_context'
import EmployeeListItem from './EmployeeListItem'

const EmployeeList = () => {

    let { employees } = useContext(AppContext)

  return (
    <div className='employeeList'>
        {employees.map((employee) => {
            return (
                <EmployeeListItem employee={employee} />
            )
        })}
      
    </div>
  )
}

export default EmployeeList
