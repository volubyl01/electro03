import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TodoForm = ({ onSubmit, todo }) => {
    const [title, setTitle] = useState('');
    const [completed, setCompleted] = useState(false);

    useEffect(() => {
        if (todo) {
            setTitle(todo.title);
            setCompleted(todo.completed);
        } else {
            setTitle('');
            setCompleted(false);
        }
    }, [todo]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const newTodo = { title, completed };

        try {
            let response;
            if (todo) {
                response = await axios.put(`/api/todos/${todo.id}`, newTodo);
            } else {
                response = await axios.post('/api/todos', newTodo);
                // Réinitialiser le titre seulement après un ajout réussi
                setTitle('');
                setCompleted(false);
                // 
            }
            onSubmit(response.data);
        } catch (error) {
            console.error('Error saving todo:', error);
        }
    };

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter new todo"
            />
            <label>
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={(e) => setCompleted(e.target.checked)}
                />
                Completed
            </label>
            <button type="submit">{todo ? 'Update' : 'Add'} Todo</button>
        </form>
    );
};

export default TodoForm;
