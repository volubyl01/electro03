import { Controller } from '@hotwired/stimulus';
import React from 'react';
import { createRoot } from 'react-dom/client';
import TodoList from '../react/components/TodoList';

export default class extends Controller {
  connect() {
    const root = createRoot(this.element);
    root.render(<TodoList />);
  }
}



