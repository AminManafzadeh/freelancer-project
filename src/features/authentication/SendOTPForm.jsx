import React from 'react'
import TextField from '../../ui/TextField'

import Loading from '../../ui/Loading'

function SendOTPForm({ onSendOtp, phoneNumber, onChange, isPending }) {



    return (
        <div>
            <form className='space-y-8' onSubmit={onSendOtp}>
                <TextField name={phoneNumber} value={phoneNumber} onChange={onChange} label="شماره موبایل :" type="number" />
                {isPending ? <Loading /> : <button type='submit' className='btn btn--primary w-full'>ارسال کد تایید</button>}
            </form>
        </div>
    )
}

export default SendOTPForm