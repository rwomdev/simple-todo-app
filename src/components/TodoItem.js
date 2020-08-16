import React from 'react'


const TodoItem = (props) => {
    const { id, title, completed } = props.todo

    const completedStyle = {
        fontStyle: "italic",
        color: "#d35e0f",
        opacity: 0.4,
        textDecoration: "line-through"
    }

    return (
        <li className="todo-item">
            <input type="checkbox" checked={ completed } 
                onChange={() => props.handleChangeProps(id)}/>
            <span style={ completed ? completedStyle : null }>
                {title}
            </span>    
            
            <button onClick={() => props.deleteTodoProps(id)}>
                Delete
            </button>
        </li>
    )
}
    


export default TodoItem