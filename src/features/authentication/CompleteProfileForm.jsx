import React, { useState } from 'react'
import TextField from '../../ui/TextField'
import RadioInput from '../../ui/RadioInput'
import { useMutation } from '@tanstack/react-query'
import { completeProfile } from '../../services/authService'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import Loading from '../../ui/Loading'

function CompleteProfileForm() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [role, setRole] = useState("")
    const navigate = useNavigate()

    const { isPending, error, data, mutateAsync } = useMutation({
        mutationFn: completeProfile
    })

    const submitHandler = async (e) => {
        e.preventDefault()

        try {
            const { user, message } = await mutateAsync({ name, email, role })
            console.log(data)
            toast.success(message)

            if (user.status !== 2) {
                navigate("/")
                toast("پروفایل شما در انتظار تایید میباشد.", { icon: "😉" })
                return
            }
            if (user.role === "OWNER") return navigate("/owner")
            if (user.role === "FREELANCER") return navigate("/freelancer")
        } catch (error) {
            toast.error(error?.response?.data?.message)
        }
    }

    return (
        <div className='flex justify-center pt-16'>
            <div className='w-full sm:max-w-sm'>
                <form onSubmit={submitHandler} className='space-y-6'>
                    <TextField
                        type="text"
                        label="نام خود را وارد کنید :"
                        name={name}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                        type="email"
                        label="ایمیل خود را وارد کنید :"
                        name={email}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <div className='flex items-center justify-center gap-x-4'>
                        <RadioInput checked={role === "OWNER"} onChange={(e) => setRole(e.target.value)} label="کارفرما" value="OWNER" name="role" id="OWNER" />
                        <RadioInput checked={role === "FREELANCER"} onChange={(e) => setRole(e.target.value)} label="فریلنسر" value="FREELANCER" name="role" id="FREELANCER" />
                    </div>
                    {isPending ? <Loading /> : <button className='btn btn--primary w-full'>تایید</button>}
                </form>
            </div>
        </div>
    )
}

export default CompleteProfileForm