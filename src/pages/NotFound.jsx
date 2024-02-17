import { FaArrowRightFromBracket } from "react-icons/fa6";
import useMoveBack from "../hooks/useMoveBack";


function NotFound() {
    const moveBack = useMoveBack()

    return (
        <div className='container xl:max-w-screen-xl'>
            <div className="flex items-center justify-center h-screen">
                <div className='sm:max-w-sm'>
                    <div>
                        <h1 className='text-lg font-bold text-error mb-8'>
                            صفحه ای که به دنبالش بودید پیدا نشد
                        </h1>
                        <button onClick={moveBack} className="flex items-center justify-center gap-x-4">
                            <FaArrowRightFromBracket className="w-6 h-6 text-primary-900" />
                            <span>برگشت</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFound