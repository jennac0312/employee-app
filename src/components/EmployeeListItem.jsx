import React, { useContext } from 'react'
import { AppContext } from '../contexts/app_context'

const EmployeeListItem = ( {employee, index, parent} ) => {
    // console.log(typeof index)

    let { changeEmployee } = useContext(AppContext)

  return (
    // <div className='employeeContainer' onClick={() => changeEmployee(index)}>
    <div className='employeeContainer' onClick={() => {parent !== 'employee' && changeEmployee(index)}}>
      <div className='left'>
        <img src={employee.image}/>
      </div>
      <div className='right'>
        <h4 className='name'>{employee.name}</h4>
        <p className='role'>{employee.role}</p>
      </div>
    </div>
  )
}

export default EmployeeListItem
