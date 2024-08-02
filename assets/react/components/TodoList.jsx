import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import '../../styles/todo.css';
import MycomboBox from './MycomboBox';



const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [editingTodo, setEditingTodo] = useState(null);

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        try {
            const response = await axios.get('/api/todos');
            setTodos(response.data);
        } catch (error) {
            console.error('Error fetching todos:', error);
        }
    };

    const handleEdit = (todo) => {
        setEditingTodo(todo);
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`/api/todos/${id}`);
            setTodos(todos.filter(todo => todo.id !== id));
        } catch (error) {
            console.error('Error deleting todo:', error);
        }
    };

    const handleFormSubmit = (newTodo) => {
        if (editingTodo) {
            setTodos(todos.map(todo => (todo.id === newTodo.id ? newTodo : todo)));
        } else {
            setTodos([...todos, newTodo]);
        }
        setEditingTodo(null);
    };

    return (
        <div className="main-container">
            <div className="todo-container">
                <h1>Todo List</h1>
                
                <TodoForm onSubmit={handleFormSubmit} todo={editingTodo} />
                <ul className="todo-list">
                    {todos.map(todo => (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            onEdit={handleEdit}
                            onDelete={handleDelete}
                        />
                    ))}
                </ul>
            </div>
            <div className="combobox-container">
                <MycomboBox />
            </div>
        </div>
    )
    
};

export default TodoList;
