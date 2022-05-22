import { useState, useEffect } from "react";
import uniqid from "uniqid";
import Todo from "./Todo";

const TodoWindow = props => {
    const [todoValue, setTodoValue] = useState('')
    const [todos, setTodos] = useState([
        {
            id: uniqid(),
            text: 'task one',
            isDone: false,
            isTaged: false
        },
        {
            id: uniqid(),
            text: 'task two',
            isDone: true,
            isTaged: false
        }
    ])
    const [tagedTodos, setTagedTodos] = useState([])
    const addTodo = (e) => {
        e.preventDefault();
        const tempTodos = [...todos];
        tempTodos.push({
            id: uniqid(),
            text: todoValue,
            isDone: false,
            isTaged: false
        });
        setTodoValue('');
        setTodos(tempTodos)
    }

    return (
        <div
            className="
            bg-[#fff]
            w-2/3
            h-auto
            border-2
            border-[#E5E5E5]
            rounded-lg" >
            <h2
                className="text-center text-[#194591]
                 underline underline-offset-8 decoration-[#e46a07]">
                To Do List
            </h2>

            <form
                className="space-x-2 flex justify-center mt-10 mb-10"
                onSubmit={addTodo}>
                <input className=" w-[70%] h-auto border-2  border-[#E5E5E5] "
                    value={todoValue}
                    placeholder={'Add a task'}
                    onChange={(e) => setTodoValue(e.target.value)} />
                <button >Add</button>
            </form>


            <div>
                <h4 className="text-center text-m font-bold underline underline-offset-8 decoration-[#e46a07] mb-3 mt-3">Tagged</h4>
                {todos.map(({ id, text, isDone, isTaged }) => {
                    if (!isTaged) {
                        return
                    }
                    return (
                        <Todo
                            key={id}
                            id={id}
                            text={text}
                            isDone={isDone}
                            todos={todos}
                            setTodos={setTodos}
                        />
                    )
                })}
                <h4 className="text-center text-m font-bold underline underline-offset-8 decoration-[#e46a07] mb-3 mt-3"> Not Tagged</h4>
                {todos.map(({ id, text, isDone, isTaged }) => {
                    if (isTaged) {
                        return
                    }
                    return (
                        <Todo
                            key={id}
                            id={id}
                            text={text}
                            isDone={isDone}
                            todos={todos}
                            setTodos={setTodos}
                        />
                    )
                })}
            </div>

        </div>
    )
}

export default TodoWindow;