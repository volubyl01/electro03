import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import { ArrowPathIcon } from "@heroicons/react/16/solid";
import clsx from "clsx";
import axios from "axios";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import MyComboBox from "./MyComboBox";
import "../../styles/todo.css";
import toggleImage from "../../images/andrey-grinkevich-0x6RTts1jRU-unsplash.jpg";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [editingTodo, setEditingTodo] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [newPerson, setNewPerson] = useState({ firstname: "", lastname: "" });
  const [people, setPeople] = useState([]);
  const [refreshKey, setRefreshKey] = useState(0);
  const [isOpen, setIsOpen] = useState(false); // Ajout de l'état isOpen
  const [isShowing, setIsShowing] = useState(true);

  useEffect(() => {
    fetchTodos();
    fetchPeople();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get("/api/todos");
      setTodos(response.data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  const fetchPeople = async () => {
    try {
      const response = await axios.get("/api/persons");
      setPeople(response.data);
    } catch (error) {
      console.error("Error fetching people:", error);
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

  const handleComboBoxSelect = (selectedPerson) => {
    if (selectedPerson) {
      console.log("Selected person:", selectedPerson);
      setSelectedOption(selectedPerson);
    } else {
      console.log("No person selected");
      setSelectedOption(null);
    }
  };

  const handlePersonSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/persons", newPerson);
      console.log("Person created:", response.data);
      setNewPerson({ firstname: "", lastname: "" });
      await fetchPeople();
      setRefreshKey((oldKey) => oldKey + 1); // Force re-render of MyComboBox
    } catch (error) {
      console.error("Error creating person:", error);
    }
  };

  return (
    <div className="main-container">

      <div className="mt-8 flex flex-col items-center">
        <div className="size-[6.25rem]">
          <Transition
            show={isShowing}
            enter="transition-all duration-300"
            enterFrom="opacity-0 scale-50 rotate-[-120deg]"
            enterTo="opacity-100 scale-100 rotate-0"
            leave="transition-all duration-200 ease-in-out"
            leaveFrom="opacity-100 scale-100 rotate-0"
            leaveTo="opacity-0 scale-95 rotate-0"
          >
                <button
          onClick={() => {
            setIsShowing(false);
            setTimeout(() => setIsShowing(true), 500);
          }}
          className="w-full h-full focus:outline-none"
        >
            <img
              src={toggleImage}
              alt="Transition Image"
              className="w-full h-full object-cover rounded-xl shadow-lg"
            />
             </button>
          </Transition>
        </div>
    
        <span className="mt-4 text-sm text-white">Click the image to transition</span>

      </div>

      <div className="flex-container">
        {/* MyComboBox Component */}
        <div className="combobox-container">
          <h2>Select a Person</h2>
          <MyComboBox
            key={refreshKey}
            onSelect={handleComboBoxSelect}
            people={people}
          />
          <div className="person-container">
            {/* Person Creation Form */}
            <h2>Create New Person</h2>
            <form onSubmit={handlePersonSubmit}>
              <input
                type="text"
                value={newPerson.firstname}
                onChange={(e) =>
                  setNewPerson({ ...newPerson, firstname: e.target.value })
                }
                placeholder="First Name"
                required
              />
              <input
                type="text"
                value={newPerson.lastname}
                onChange={(e) =>
                  setNewPerson({ ...newPerson, lastname: e.target.value })
                }
                placeholder="Last Name"
                required
              />
              <button
                type="submit"
                className="rounded bg-sky-600 py-2 px-4 text-sm text-white hover:bg-sky-500 active:bg-sky-700 transition-colors duration-200"
              >
                Create Person
              </button>
            </form>
          </div>
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
