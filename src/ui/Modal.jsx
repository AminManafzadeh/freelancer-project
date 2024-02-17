import React, { useEffect, useRef } from 'react'
import { TiDelete } from "react-icons/ti";
import useOutsideClick from '../hooks/useOutsideClick';

function Modal({ open, onClose, children, title }) {
    const modalRef = useOutsideClick(onClose)

    return open && (
        <div className='backdrop-blur-sm fixed top-0 left-0 w-full h-screen bg-secondary-800 bg-opacity-30 z-50'>
            <div ref={modalRef} className='bg-secondary-0 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg p-4 transition-all duration-500 ease-out w-[calc(100vw-2rem)] md:max-w-[20rem] max-h-[calc(100vh-2rem)] overflow-y-auto'>
                <div className='flex items-center justify-between border-b border-b-secondary-300 pb-2 mb-6'>
                    <p>{title}</p>
                    <button onClick={onClose}>
                        <TiDelete className='w-7 h-7 text-error' />
                    </button>
                </div>
                {children}
            </div>
        </div>
    )
}

export default Modal