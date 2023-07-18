import React from 'react'

const Header = ( {page} ) => {
  return (
    <div className='header'>
      { page === 'employee' && 
      <div className='arrowContainer'>
        <p className='arrow'>˂</p>
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
