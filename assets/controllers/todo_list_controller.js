// Controleur Stimulus
import { Controller } from "@hotwired/stimulus";
import React from "react";
import { createRoot } from 'react-dom/client'; 
import TodoList from "../react/components/TodoList";
import MycomboBox from "../react/components/MycomboBox";

export default class extends Controller {
  static targets = ["todolist", "mycombobox"];

  connect() {
    this.renderTodoList();
    this.renderMycomboBox();
  }

  renderTodoList() {
    const root = createRoot(this.todolistTarget);
    root.render(
      <React.StrictMode>
        <TodoList />
      </React.StrictMode>,
    );
  }

  renderMycomboBox() {
    const root = createRoot(this.comboboxTarget);
    root.render(
      <React.StrictMode>
        <MycomboBox />
      </React.StrictMode>
    );
  }
}
