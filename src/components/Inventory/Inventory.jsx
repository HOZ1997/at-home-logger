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
 const [editMode, setEditMode] =useState (false)
 const toggleEditMode =() =>{
   setEditMode (!editMode);
 }
 
//  const item =  props.item;
//  const updateItem = (event)=> {
//    history.push ('/update')
//  }

//  const deleteItem = ()=> {
//   console.log( "in delete", item);
//   dispatch ({type: 'DELETE_ITEM', payload: item});
// }

  return (
    <div>  
          {
            editMode?
            <span>
          <table>
              <td><input type="text" placeholder={props.inventory.item}/></td>
              <td><input type="text" placeholder={props.inventory.category_name}/></td>
              <td><input type="text" placeholder={props.inventory.location_name}/></td>
              <td><input type="text" placeholder={props.inventory.status_name}/></td>
              <td><input type="text" placeholder={props.inventory.packaging_name}/></td>
              <td><input type="text" placeholder={props.inventory.notes}/></td>
              <td><input type="text" placeholder={props.inventory.date}/></td>
            <td><button onClick={toggleEditMode}>Cancel</button><button> Submit </button></td>
            </table> 
            </span>
            :
            <span>
              <table>
            <td>{props.inventory.item} </td>
            <td>{props.inventory.category_name}</td>   
            <td>{props.inventory.location_name}</td>
            <td>{props.inventory.status_name}</td>
            <td> {props.inventory.packaging_name} </td>
            <td> {props.inventory.notes}</td>
            <td> {props.inventory.date}</td>
            <td><button onClick={toggleEditMode}>Edit</button></td>
            </table>
            </span>     
}     
     </div>  
  );
}

export default Inventory;
