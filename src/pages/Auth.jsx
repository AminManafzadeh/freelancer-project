import React from 'react'
import AuthContainer from '../features/authentication/AuthContainer'

function Auth() {
    return (
        <div className='container xl:max-w-screen-xl'>
            <div className='flex justify-center pt-16'>
                <AuthContainer />
            </div>
        </div>
    )
}

export default Auth