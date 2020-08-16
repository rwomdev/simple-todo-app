import React from 'react'
import TodoItem from './TodoItem'

class TodoList extends React.Component {
    render() {
        return (
            <div>
                {this.props.todos.map(todo => (
                    <ul>
                        <TodoItem 
                            key={todo.id} 
                            todo={todo} 
                            handleChangeProps={this.props.handleChangeProps}
                            deleteTodoProps={this.props.deleteTodoProps}/>
                    </ul>
                ))}
            </div>
        )
    }
}

export default TodoList