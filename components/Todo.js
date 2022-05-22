import { useState } from "react";

const Todo = props => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedValue, setEditedValue] = useState(props.text)

    const handleDelete = (e) => {
        e.preventDefault();
        let tempTodos = [...props.todos]
        tempTodos = tempTodos.filter(t => t.id !== props.id);
        props.setTodos(tempTodos)
    }
    const handleEdit = (e) => {
        e.preventDefault();
        const tempTodos = [...props.todos];
        const indexToBeEdited = tempTodos.findIndex(t => t.id === props.id);
        tempTodos[indexToBeEdited] = {
            ...tempTodos[indexToBeEdited],
            text: editedValue
        }

        props.setTodos(tempTodos)
        setEditedValue('')
        setIsEditing(false)

    }

    const handleTag = (e) => {
        e.preventDefault();
        const tempTodos = [...props.todos];
        const indexToBeEdited = tempTodos.findIndex(t => t.id === props.id);
        tempTodos[indexToBeEdited] = {
            ...tempTodos[indexToBeEdited],
            isTaged: !tempTodos[indexToBeEdited].isTaged
        }

        props.setTodos(tempTodos)

    }
    const handleIsDone = (e) => {
        const tempTodos = [...props.todos];
        const indexToBeEdited = tempTodos.findIndex(t => t.id === props.id);
        tempTodos[indexToBeEdited] = {
            ...tempTodos[indexToBeEdited],
            isDone: !tempTodos[indexToBeEdited].isDone
        }

        props.setTodos(tempTodos)
    }

    return (
        <div className="ml-3 mr-3 grid grid-cols-8  m-3">

            <input className="col-start-1 justify-self-center  self-center"
                type="checkbox"
                checked={props.isDone}
                onChange={handleIsDone}
            />
            {
                isEditing ? (
                    <form className="col-start-2 col-span-4 "
                        onSubmit={handleEdit}>
                        <input type="text"
                            className="border-2"
                            value={editedValue}
                            onChange={e => setEditedValue(e.target.value)}
                        />

                    </form>
                ) : (
                    <div className="col-start-2 col-span-4">{props.text}</div>
                )
            }



            <button onClick={e => setIsEditing(true)}>edit</button>
            <button onClick={handleDelete}>delete</button>
            <button onClick={handleTag}>Pin</button>


        </div>
    )
}

export default Todo;