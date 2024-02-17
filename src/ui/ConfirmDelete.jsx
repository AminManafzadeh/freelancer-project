import React from 'react'

function ConfirmDelete({ resourceName, onConfirm, onClose, disabled }) {
    return (
        <div>
            <h2 className='font-bold mb-4 text-base'>
                آیا از حذف {resourceName} مطمعن هستید؟
            </h2>
            <div className='flex items-center justify-between gap-x-16'>
                <button
                    onClick={onClose}
                    disabled={disabled}
                    className='btn btn--primary flex-1'>لغو</button>
                <button
                    onClick={onConfirm}
                    disabled={disabled}
                    className='btn btn--danger py-3 flex-1'
                >تایید</button>
            </div>
        </div>
    )
}

export default ConfirmDelete