import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
import InventoryList from '../InventoryList/InventoryList';


// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function InventoryPage(props) {
  const dispatch = useDispatch();
  const history = useHistory ();

  useEffect(()=>{
    dispatch({type: 'FETCH_INVENTORY'});
  }, []);
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState('Inventory All');

  const addItem = (event)=> {
    history.push ('/add')
  }

  return (
    <div>
      <h2>{heading}</h2>

      <button onClick={addItem}>Add Item</button>
      
      <table>
      <tr>
          <th>Item</th>
          <th>Category</th>
          <th>Location</th>
          <th>Status</th>
          <th>Packaging</th>
          <th>Notes</th>
          <th>Original Date</th>
          <th></th>
        </tr>
        </table>

      {/* <p>{JSON.stringify (store)}</p> */}
      {/* store inventory */}
      <InventoryList inventories={store.inventory}/>
    </div>
  );
}

export default InventoryPage;
