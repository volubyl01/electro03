import { Controller } from '@hotwired/stimulus';
import React from 'react';
import { createRoot } from 'react-dom/client';
import MyComboBox from '../react/components/MyComboBox';

export default class extends Controller {
  connect() {
    const root = createRoot(this.element);
    root.render(<MyComboBox onSelect={(person) => console.log('Selected:', person)} />);
  }
  handleSelect = (selectedPerson) => {
    console.log("Selected person:", selectedPerson);
  }
}
