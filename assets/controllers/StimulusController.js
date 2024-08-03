import { Controller } from '@hotwired/stimulus';
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from '../react/components/App';

export default class extends Controller {
  connect() {
    const root = createRoot(this.element);
    root.render(<App />);
  }
}
