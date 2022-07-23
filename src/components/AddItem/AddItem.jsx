import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import './AddItem.css';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function AddItem() {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const dispatch = useDispatch();
  const categories = useSelector((store) => store.categories);
 // const store = useSelector((store )=>store);

  useEffect(()=>{
    //dispatch({type: 'FETCH_INVENTORY'});
    dispatch({type: 'FETCH_CATEGORY'});
  }, []);


  const [heading, setHeading] = useState('Add Item');
   const [newItem, setNewItem] = useState('');
  const [newNotes, setNewNotes] = useState('');
  const [category_id, setCategory_id] = useState('');


  const setItem = (event)=>{
    setNewItem (event.target.value);
  }

  const setNotes = (event)=>{
    setNewNotes (event.target.value);
  }

  const changeCategory=(event)=>{
   setCategory (event.target.value);
   console.log ('in change category');
  }

  const addItem = ()=>{
   // new item object
    // const newItemObject ={
    //   item: newItem,
    //   notes: newNotes
    // }
    // dispatch with new item as payload 
  console.log ('in addItem') //newItemObject);
  // dispatch ({type: 'ADD_ITEM', payload: newItemObject});
  }
  return (
    
    <div>
   
      <h2>{heading}</h2>
       

        <select onChange={changeCategory}>
          {categories.map (category => (
           <option key={category.id} value={category.id}>{category.category_name}</option>
          ))}
        </select>

      <input type="text" placeholder="item"onChange={event => setItem (event)}></input>
              <input type="text" placeholder="notes"onChange={event => setNotes(event)}></input> 

        {/* <p>{JSON.stringify (newItem)},{JSON.stringify(newNotes)}{JSON.stringify(newItemObject)}</p> */}
        <button onClick={addItem}>Add Item</button>
     
    </div>
  );
}

export default AddItem;
