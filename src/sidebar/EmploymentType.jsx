import React from 'react'
import InputField from '../components/InputField'

const EmploymentType = ({handleChange}) => {
  return (
    <div>
        <h4 className='text-lg font-medium mb-2'>Employment Type</h4>

        <div>
 
            <InputField handleChange={handleChange} value="Full-time" title="Full-time" name="test6"/>
            
            <InputField handleChange={handleChange} value="Temporary" title="Temporary" name="test6"/>

            <InputField handleChange={handleChange} value="Part-time" title="Part-time" name="test6"/>
            
            
        </div>
    </div>
  )
}

export default EmploymentType
