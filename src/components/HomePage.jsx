import React from 'react'
import Header from './Header'
import SearchBar from './SearchBar'
import EmployeeList from './EmployeeList'

const HomePage = () => {
  return (
    <div className='homePage'>
        <Header page='home'/>
        <SearchBar />
        <EmployeeList />
    </div>
  )
}

export default HomePage
