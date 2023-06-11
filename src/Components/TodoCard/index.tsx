import { AiOutlineDelete } from 'react-icons/ai'
import { AiOutlineEdit } from 'react-icons/ai'



const TodoCard = () => { 
    return (
        <>
            <div className="w-[300px] h-[80px] px-4 rounded-[4px] border border-[#959595] flex justify-between items-center">
                <p>1. Learning</p>
                <div className='flex gap-[16px] justify-center items-center text-[20px]'>
                    <button><AiOutlineEdit /></button> 
                    <button><AiOutlineDelete /></button> 
                </div>
            </div>
        </>
    )
}

export default TodoCard