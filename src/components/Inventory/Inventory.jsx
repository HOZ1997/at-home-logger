import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
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
  const categories=useSelector((store) => store.category);
  const locations=useSelector((store) => store.location);
  const statuses=useSelector((store) => store.status);
  const packages=useSelector((store) => store.packaging);
  const store = useSelector((store )=>store);
  const [selectCategory, setCategory]=useState('');
  const [selectLocation, setLocation]=useState('');
  const [selectStatus, setStatus]=useState('');
  const [selectPackaging, setPackaging]=useState('');



 const history = useHistory ();
 const [editMode, setEditMode] =useState (false)
const [newItem, setNewItem] = useState ({});





 const toggleEditMode =() =>{
   setEditMode (!editMode);
 }
 

 useEffect(() => {
  dispatch({type: 'FETCH_LOCATION'});
  dispatch({type: 'FETCH_CATEGORY'});
  dispatch({type: 'FETCH_STATUS'});
  dispatch({type: 'FETCH_PACKAGING'});
}, []);



//  const item =  props.item;
//  const updateItem = (event)=> {
//    history.push ('/update')
//  }

//  const deleteItem = ()=> {
//   console.log( "in delete", item);
//   dispatch ({type: 'DELETE_ITEM', payload: item});
// }
// const changeCategory=(event) => {
//   setCategory(event.target.value);
//   console.log('in change category');
// }


 const setUpdateItem=(event)=>{
   setNewItem ({ ...newItem, item: event.target.value});
 }
 
 const setUpdateCategory=(event)=>{
  setNewItem ({ ...newItem, category: event.target.value});
}
const setUpdateLocation=(event)=>{
  setNewItem ({ ...newItem, location: event.target.value});
}
const setUpdateStatus=(event)=>{
  setNewItem ({ ...newItem, status: event.target.value});
}

const setUpdatePackaging=(event)=>{
  setNewItem ({ ...newItem, packaging: event.target.value});
}
const setUpdateNotes=(event)=>{
  setNewItem ({ ...newItem, packaging: event.target.value});
}

const updateInventory =()=>{
  const inventoryToSend={
    ...newItem,
    id: props.inventory.id
    
  }
  dispatch ({type: 'UPDATE_INVENTORY', payload: inventoryToSend})
}
  return (
    <div>  
          {
            editMode?
            <span>
          <table>
              <td><input type="text" placeholder={props.inventory.item} onChange={event =>setUpdateItem(event)}/></td>

              {/* <td><input type="text" placeholder={props.inventory.category_name} onChange={event =>setUpdateCatagory(event)}/></td> */}
            {categories.length === 0 ? (
                <div>Loading...</div>
            ) : (
                <div></div>
            )}

            {/* <h3>{JSON.stringify(categories)}</h3> */}
            <td><select onChange={event =>setUpdateCategory(event)}>
                {categories.map(category => (
                    <option key={category.id} value={category.id}>{category.category_name}</option>
                ))}
            </select></td><br></br>


              {/* <td><input type="text" placeholder={props.inventory.location_name} onChange={event =>setUpdateLocation(event)}/> */}
              {locations.length === 0 ? (
                <div>Loading...</div>
            ) : (
                <div></div>
            )}

            {/* <h3>{JSON.stringify(locations)}</h3> */}
            
            <td><select onChange={event => setUpdateLocation (event)}>
                {locations.map(location => (
                    <option key={location.id} value={location.id}>{location.location_name}</option>
                ))}
            </select></td>

              {/* <td><input type="text" placeholder={props.inventory.status_name} onChange={event =>setUpdateStatus(event)}/></td> */}
              {statuses.length === 0 ? (
                <div>Loading...</div>
            ) : (
                <div></div>
            )}

            {/* <h3>{JSON.stringify(statuses)}</h3> */}
            <td><select onChange={event =>setUpdateStatus(event)}>
                {statuses.map(status => (
                    <option key={status.id} value={status.id}>{status.status_name}</option>
                ))}
            </select></td>

              {/* <td><input type="text" placeholder={props.inventory.packaging_name} onChange={event =>setUpdatePackaging(event)}/></td> */}
              {packages.length === 0 ? (
                <div>Loading...</div>
            ) : (
                <div></div>
            )}

             {/* <h3>{JSON.stringify(packages)}</h3> */}
            <td><select onChange={event =>setUpdatePackaging(event)}>
                {packages.map(packaging => (
                    <option key={packaging.id} value={packaging.id}>{packaging.packaging_name}</option>
                ))}
            </select></td>


              <td><input type="text" placeholder={props.inventory.notes} onChange={event =>setUpdateNotes(event)}/></td>
              <td><div>{props.inventory.date}</div></td>
            <td><button onClick={toggleEditMode}>Cancel</button><button onClick={updateInventory}>Submit </button></td>
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
{/* {JSON.stringify(newItem) } */}
     </div>  
  );
}

export default Inventory;
