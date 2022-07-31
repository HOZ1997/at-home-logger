import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Inventory from '../Inventory/Inventory';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function InventoryList(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);
  //const [heading, setHeading] = useState('Inventory');
  const inventory=useSelector((store) => store.inventory);
  const dispatch = useDispatch();
  useEffect(()=>{
     dispatch({type: 'FETCH_INVENTORY'});
   }, []);



  return (
    <div>
      {/* <h2>{heading}</h2> */}


      {props.inventories.map ((inventory)=>(<Inventory inventory={inventory}/>))}
      {/* <p>{JSON.stringify (store.inventory)}</p> */}
     
    </div>
  );
}

export default InventoryList;
