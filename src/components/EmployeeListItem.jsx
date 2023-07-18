import React from 'react'

const EmployeeListItem = ( {employee} ) => {
  return (
    <div className='employeeContainer'>
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
