import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function InventoryPage(props) {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch({type: 'FETCH_INVENTORY'});
  }, []);
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState('Inventory All');

  return (
    <div>
      <h2>{heading}</h2>
      <p>{JSON.stringify (store)}</p>
      {/* map through store of inventory to show on DOM */}
    </div>
  );
}

export default InventoryPage;
