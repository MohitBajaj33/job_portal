import React from 'react'
import InputField from '../components/InputField'
const JobPostingData = ({ handleChange }) => {
    const now = new Date()
    // console.log(now);
    const twentyFourHoursAge = new Date(now - 24 * 60 * 60 * 1000)
    const sevenDaysAgo = new Date(now - 7 * 24 * 60 * 60 * 1000)
    const thirtyDatsAgo = new Date(now - 30 * 24 * 60 * 60 * 1000)

    // convert date to string 
    const twentyFourHoursAgeDate = twentyFourHoursAge.toISOString().slice(0, 10)
    const sevenDaysAgoDate = sevenDaysAgo.toISOString().slice(0, 10)
    const thirtyDatsAgoDate = thirtyDatsAgo.toISOString().slice(0, 10)
    // console.log(sevenDaysAgoDate);
    return (
        <div>
            <h4 className='text-lg font-medium mb-2'>Date of posting</h4>

            <div>
                <label className='sidebar-label-container'>
                    <input type="radio" name='test4' id='test' value="" onChange={handleChange} />
                    <span className='checkmark'></span>All
                </label>
                <InputField handleChange={handleChange} value={twentyFourHoursAgeDate} title="Last 24 hours" name="test4" />

                <InputField handleChange={handleChange} value={sevenDaysAgoDate} title="Last 7 days" name="test4" />

                <InputField handleChange={handleChange} value={thirtyDatsAgoDate} title="Last  Month" name="test4" />

            </div>
        </div>
    )
}

export default JobPostingData
