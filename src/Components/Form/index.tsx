import { IeditMode } from "@/Interfaces/IeditMode";
import { Itodo } from "@/Interfaces/Itodo";
import { useEffect, useState } from "react";
import Button from "../Button";

const Form = () => {

    const [todoText, setTodoText] = useState<string>('')

    const [todoList, setTodoList] = useState<Itodo[]>([])
    
    const [editMode, setEditMode] = useState<IeditMode>({
        isEnable: false,
        Id: null
      })

    useEffect(() => {
        if (editMode.isEnable) {
            const tempEditTodo = todoList.find(item => item.Id === editMode.Id)
            tempEditTodo && setTodoText(tempEditTodo?.Text)
        } else {
            setTodoText('')
        }
    }, [editMode])


    return (
        <>
            <div className="bottomShadow w-full max-w-[351px] h-[162px] p-[24px] border border-[#959595] shadow-xl">

                <form className="w-full h-full flex flex-col justify-between items-center">

                    <input
                        value={todoText}
                        onChange={(e) => setTodoText(e.target.value)}
                        className="w-full rounded-[8px] p-[8px] border border-[#D4D4D4]"
                        placeholder="Title..."
                    />
                    <Button>{editMode.isEnable ? 'Update' : 'Add'}</Button>

                </form>

            </div >
        </>
    )
}

export default Form