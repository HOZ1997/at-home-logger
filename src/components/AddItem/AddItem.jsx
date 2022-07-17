import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import './AddItem.css';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function AddItem(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState('Add Item');
  const [newItem, setNewItem] = useState('');
  const [newNotes, setNewNotes] = useState('');

  const setItem = (event)=>{
    setNewItem (event.target.value);
  }

  const setNotes = (event)=>{
    setNewNotes (event.target.value);
  }

  const addItem = ()=>{
console.log ('in addItem')

  }
  return (
    <div>
      <h2>{heading}</h2>
        <input type="text" placeholder="item"onChange={event => setItem (event)}></input>
        <input type="text" placeholder="notes"onChange={event => setNotes(event)}></input>
        <button onClick={addItem}>Add Item</button>
        <p>{JSON.stringify (newItem)},{JSON.stringify(newNotes)}</p>
    </div>
  );
}

export default AddItem;
