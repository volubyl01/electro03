import React from 'react';

const TodoItem = ({ todo, onEdit, onDelete }) => {
    return (
        <li className="todo-item">
            <p>{todo.title} - {todo.completed ? 'Completed' : 'Pending'}</p>
            <div>
                <button onClick={() => onEdit(todo)}>Edit</button>
                <button onClick={() => onDelete(todo.id)}>Delete</button>
            </div>
        </li>
    );
};

export default TodoItem;
