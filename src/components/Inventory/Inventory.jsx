import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
import './Inventory.css';
// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function Inventory(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  // const store = useSelector((store) => store);
  // const [heading, setHeading] = useState('Functional Component');
  const dispatch = useDispatch();
 const history = useHistory ();

 const updateItem = (event)=> {
   history.push ('/update')
 }

 const deleteItem = ()=> {
  console.log( "in delete", deleteItem);
}

  return (
    
    <div>  


      <table>      
        <tr>
          <td>{props.inventory.item}</td>
          <td> {props.inventory.category_name}</td>
          <td> {props.inventory.location_name}</td>
          <td> {props.inventory.status_name}</td>
          <td> {props.inventory.packaging_name}</td>
          <td> {props.inventory.notes}</td>
          <td> {props.inventory.date}</td>
          <td><button onClick={updateItem}>Edit</button></td>
          <td><button onClick={deleteItem}>Delete</button></td>
        </tr>
     </table>
     </div>  
  );
}

export default Inventory;
