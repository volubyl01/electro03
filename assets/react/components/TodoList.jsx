import React, { useState, useEffect } from "react";
import axios from "axios";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import MyComboBox from "./MyComboBox";
import "../../styles/todo.css";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [editingTodo, setEditingTodo] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get("/api/todos");
      setTodos(response.data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  const handleEdit = (todo) => {
    setEditingTodo(todo);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/todos/${id}`);
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  const handleFormSubmit = async (newTodo) => {
    try {
      if (editingTodo) {
        const response = await axios.put(`/api/todos/${newTodo.id}`, newTodo);
        setTodos(
          todos.map((todo) => (todo.id === newTodo.id ? response.data : todo)),
        );
      } else {
        const response = await axios.post("/api/todos", newTodo);
        setTodos([...todos, response.data]);
      }
      setEditingTodo(null);
    } catch (error) {
      console.error("Error submitting todo:", error);
    }
  };

  const handleComboBoxSelect = (selectedPeople) => {
    console.log("Selected person:", selectedPeople);
    // Do something with the selected person
  };


  return (
    <div className="main-container">
      <div className="flex-container">
        {/* MyComboBox Component */}
        <div className="combobox-container">
          <h2>Select an Option</h2>
          <MyComboBox onSelect={handleComboBoxSelect} />
        </div>

        {/* TodoList Component */}
        <div className="todo-container">
          <h1>Todo List</h1>
          <TodoForm onSubmit={handleFormSubmit} todo={editingTodo} />
          <ul className="todo-list">
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
