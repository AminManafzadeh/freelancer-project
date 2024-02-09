import React from 'react'

function TextField({ name, value, onChange, label, type }) {
    return (
        <div>
            <div>
                <label className='mb-2 block' htmlFor={name}>{label}</label>
                <input
                    value={value}
                    onChange={onChange}
                    name={name}
                    autoComplete='off'
                    id={name} className='textField__input' type={type} />
            </div>
        </div>
    )
}

export default TextField