import React, { useState } from 'react'
import SendOTPForm from './SendOTPForm';
import CheckOTPForm from './CheckOTPForm'
import { useMutation } from '@tanstack/react-query';
import { getOtp } from '../../services/authService';
import toast from 'react-hot-toast';

function AuthContainer() {
    const [step, setStep] = useState(1)
    const [phoneNumber, setPhoneNumber] = useState("")

    const { isPending, data: otpResponse, mutateAsync } = useMutation({
        mutationFn: getOtp,
    })

    const sendOtpHandler = async (e) => {
        e.preventDefault()
        try {
            const data = await mutateAsync({ phoneNumber })
            setStep(2)
            console.log(data.message)
            toast.success(data?.message)
        } catch (error) {
            console.log(error)
            toast.error(error?.message)
        }
    }


    const renderStep = () => {
        switch (step) {
            case 1: {
                return <SendOTPForm
                    isPending={isPending}
                    onSendOtp={sendOtpHandler}
                    phoneNumber={phoneNumber}
                    onChange={e => setPhoneNumber(e.target.value)}
                />
            }
            case 2: {
                return <CheckOTPForm
                    phoneNumber={phoneNumber}
                    onBack={() => setStep(1)}
                    onReSendOtp={sendOtpHandler}
                    otpResponse={otpResponse}
                />
            }
            default:
                return null
        }
    }



    return (
        <div className='w-full sm:max-w-sm'>
            {renderStep()}
        </div>
    )
}

export default AuthContainer