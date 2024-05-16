import React from 'react'
import InputField from '../components/InputField'

const WorkExparerience = ({handleChange}) => {
  return (
    <div>
        <h4 className='text-lg font-medium mb-2'>Work Exparerience</h4>

        <div>
            <label className='sidebar-label-container'>
                <input type="radio" name='test5' id='test' value="" onChange={handleChange} />
                <span className='checkmark'></span>Any experience
            </label>
            <InputField handleChange={handleChange} value="Internship" title="Internship" name="test5"/>
            
            <InputField handleChange={handleChange} value="Work remotely" title="Work remotely" name="test5"/>
            
            
        </div>
    </div>
  )
}

export default WorkExparerience
