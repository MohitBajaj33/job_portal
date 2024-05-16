import React from 'react'
import Location from './Location'
import Salary from './Salary'
import JobPostingData from './JobPostingData'
import WorkExparerience from './WorkExparerience'
import EmploymentType from './EmploymentType'
const Sidebar = ({handleChange,handleClick}) => {
  return (
    <div className='space-y-5'>
      <h3 className='text-lg font-bold mb-2'>Filters</h3>
      <Location handleChange={handleChange}/>
      <Salary handleClick={handleClick} handleChange={handleChange}/>
      <JobPostingData handleChange={handleChange}/>
      <WorkExparerience handleChange={handleChange}/>
      <EmploymentType handleChange={handleChange}/>
    </div>
  )
}

export default Sidebar
