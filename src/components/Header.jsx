import React, { useContext } from 'react'
import { AppContext } from '../contexts/app_context'

const Header = ( {page} ) => {

  let { toggleEmployeePage } = useContext(AppContext)

  return (
    <div className='header'>
      { page === 'employee' && 
      <div className='arrowContainer'>
        <p className='arrow' onClick={toggleEmployeePage}>˂</p>
      </div>
      }

      { page === 'home' ? 
      <h3>Employee Directory</h3> :
      <h3>Employee</h3>
      }
    </div>
  )
}

export default Header
