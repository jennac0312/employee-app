import React, { useContext } from 'react'
import Header from './Header'
import { AppContext } from '../contexts/app_context'
import EmployeeListItem from './EmployeeListItem'

const EmployeePage = () => {
    let { employees } = useContext(AppContext)

    let currentEmployee = employees[1]
    console.log(currentEmployee)

  return (
    <div className='employeePage'>
        <Header page="employee"/>
        <div className='employeeInfo'>
            <EmployeeListItem employee={currentEmployee}/>
            {currentEmployee.contacts.map((contact) => {
                return (
                <div className='contactContainer'>
                    <div className='left'>
                        <h4>{contact.method}</h4>
                        <p className='contactNumber'>{contact.number}</p>
                    </div>
                    <div className='right'>
                        <p className='arrow'>˃</p>
                    </div>
                </div>

                )
            })}
        </div>
      
    </div>
  )
}

export default EmployeePage
