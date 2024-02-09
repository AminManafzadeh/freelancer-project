import React from 'react'

function RadioInput({ label, value, onChange, id, name, checked }) {
    return (
        <div className='flex items-center gap-x-2'>
            <input
                className='radio-box'
                type="radio"
                name={name}
                value={value}
                id={id}
                onChange={onChange}
                checked={checked}
            />
            <label htmlFor={id}>{label}</label>
        </div>
    )
}

export default RadioInput