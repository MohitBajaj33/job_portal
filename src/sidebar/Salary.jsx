import React from 'react'
import Button from '../components/Button'
import InputField from '../components/InputField'

const Salary = ({ handleClick, handleChange }) => {
    return (
        <>
            <h4 className='text-lg font-medium mb-2'>Salary</h4>
            <div>
                <Button handleClick={handleClick} value="" title="Hourly" />
                <Button handleClick={handleClick} value="Monthly" title="Monthly" />
                <Button handleClick={handleClick} value="Yearly" title="Yearly" />
            </div>


            <div>
                <label className='sidebar-label-container'>
                    <input type="radio" name='test2' id='test' value="" onChange={handleChange} />
                    <span className='checkmark'></span>Any
                </label>
                <InputField
                    handleChange={handleChange}
                    value={30}
                    title="< 30000k"
                    name="test2"
                />

                <InputField
                    handleChange={handleChange}
                    value={50}
                    title="< 50000k"
                    name="test2"
                />

                <InputField
                    handleChange={handleChange}
                    value={80}
                    title="< 80000k"
                    name="test2"
                />

                <InputField
                    handleChange={handleChange}
                    value={100}
                    title="< 100000k"
                    name="test2"
                />
            </div>
        </>
    )
}

export default Salary
