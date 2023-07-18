import React, { useContext } from 'react'
import Header from './Header'
import { AppContext } from '../contexts/app_context'
import EmployeeListItem from './EmployeeListItem'

const EmployeePage = () => {
    let { currentEmployee, changeEmployee } = useContext(AppContext)
    console.log('current employee is:', currentEmployee.name)

  return (
    <div className='employeePage'>
        <Header page="employee"/>
        <div className='employeeInfo'>
            <EmployeeListItem employee={currentEmployee} parent="employee"/>
            {currentEmployee.contacts.map((contact) => {
                // {console.log(contact)}
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
