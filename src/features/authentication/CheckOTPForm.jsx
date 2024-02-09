import { useMutation } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'
import OTPInput from 'react-otp-input'
import { checkotp } from '../../services/authService'
import Loading from '../../ui/Loading'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { IoArrowRedo } from "react-icons/io5";
import { FcEditImage } from "react-icons/fc";

const RESEND_TIME = 90

function CheckOTPForm({ phoneNumber, onBack, onReSendOtp, otpResponse }) {
    const [otp, setOtp] = useState("")
    const [time, setTime] = useState(RESEND_TIME)
    const navigate = useNavigate()

    const { isPending, mutateAsync } = useMutation({
        mutationFn: checkotp
    })

    const checkOtpHanler = async (e) => {
        e.preventDefault()

        try {
            const { user, message } = await mutateAsync({ phoneNumber, otp })
            console.log(user)
            toast.success(message)
            if (!user.isActive) return navigate("/complete-profile")
            if (user.status !== 2) {
                navigate("/")
                toast("پروفایل شما در انتظار تایید میباشد.", { icon: "😉" })
            }
            if (user.role === "OWNER") return navigate("/owner")
            if (user.role === "FREELANCER") return navigate("/freelancer")
        } catch (error) {
            toast.error(error?.response?.data?.message)
        }
    }

    useEffect(() => {
        const timer = time > 0 && setInterval(() => setTime(t => t - 1), 1000);

        return () => {
            if (timer) clearInterval(timer)
        }
    }, [time])


    return (
        <div>
            <button onClick={onBack}>
                <IoArrowRedo className='h-6 w-6 text-secondary-500' />
            </button>
            {
                otpResponse && (
                    <p className='flex items-center gap-x-2'>
                        {otpResponse?.message}
                        <button onClick={onBack}>
                            <FcEditImage className='text-2xl' />
                        </button>
                    </p>
                )
            }
            <div className='mt-2 mb-6'>
                {time > 0 ? <p className='text-secondary-500'>{time} ثانیه تا ارسال مجدد کد تایید</p>
                    : <button onClick={onReSendOtp} className='btn btn--primary bg-green-600 hover:bg-green-700 hover:tracking-wide'>ارسال مجدد کد تایید</button>}
            </div>
            <form onSubmit={checkOtpHanler} className='space-y-10'>
                <p className='font-bold text-secondary-800'>کد تایید را وارد کنید :</p>
                <OTPInput
                    value={otp}
                    onChange={setOtp}
                    numInputs={6}
                    renderSeparator={<span>-</span>}
                    renderInput={(props) => <input type='number' {...props} />}
                    containerStyle="flex flex-row-reverse gap-x-2 justify-center"
                    inputStyle={{
                        width: "2.5rem",
                        padding: "0.5rem 0.2rem",
                        border: "1px solid rgb(var(--color-primary-500))",
                        borderRadius: "0.5rem"
                    }}
                />
                {isPending ? <Loading /> : <button className='btn btn--primary w-full'>تایید</button>}
            </form>
        </div>
    )
}

export default CheckOTPForm