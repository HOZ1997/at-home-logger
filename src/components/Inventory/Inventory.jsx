import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
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
          <td> {props.inventory.reorder}</td> 
          <td> {props.inventory.donate}</td>
          <td> {props.inventory.date}</td>
        </tr>
     </table>
     </div>  
  );
}

export default Inventory;
