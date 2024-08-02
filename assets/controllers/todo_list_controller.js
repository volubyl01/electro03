import { Controller } from '@hotwired/stimulus';
import React from 'react';
import { createRoot } from 'react-dom/client';
import TodoList from '../react/components/TodoList';

export default class extends Controller {
    connect() {
        console.log('TodoList Stimulus controller connected');
        const root = createRoot(this.element);
        root.render(
            <React.StrictMode>
                <TodoList />
            </React.StrictMode>
        );
        console.log('React component rendered');
    }
}

