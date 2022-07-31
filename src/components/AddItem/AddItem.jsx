import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import './AddItem.css';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function AddItem() {
    // Using hooks we're creating local state for a "heading" variable with
    // a default value of 'Functional Component'
    const dispatch=useDispatch();
    const categories=useSelector((store) => store.category);
    const locations=useSelector((store) => store.location);
    const statuses=useSelector((store) => store.status);
    const packages=useSelector((store) => store.packaging);
    const inventory=useSelector((store) => store.inventory );
    const donations=useSelector((store) => store.donations);
     const store = useSelector((store )=>store);

    useEffect(() => {
        dispatch({type: 'FETCH_LOCATION'});
        dispatch({type: 'FETCH_CATEGORY'});
        dispatch({type: 'FETCH_STATUS'});
        dispatch({type: 'FETCH_PACKAGING'});
    }, []);


    const [heading, setHeading]=useState('Add Item');
    const [newItem, setNewItem]=useState('');
    const [newNotes, setNewNotes]=useState('');
    const [selectCategory, setCategory]=useState('');
    const [selectLocation, setLocation]=useState('');
    const [selectStatus, setStatus]=useState('');
    const [selectPackaging, setPackaging]=useState('');
   // const [isCheckedDonated, setNewDonated]=useState('');
   // const [isCheckedReorder, setNewReorder]=useState('');
    //const [newDate, setNewDate]=useState('');

    const setItem=(event) => {
        setNewItem(event.target.value);
    }
    const setNotes=(event) => {
        setNewNotes(event.target.value);
    }

  //   const setDonated=() => {
  //     console.log('donated checked');
  //     if (isCheckedDonated){
  //       setNewDonated(true);
  //     }
      
  // }
  //   const setReorder=() => {
  //     console.log('reorder is checked')
  //     if (isCheckedReorder){
  //       setNewReorder(true);
  //     }
 // }
//   const setDate=(event) => {
//     setNewDate(event.target.value);
// }

    const changeCategory=(event) => {
        setCategory(event.target.value);
        console.log('in change category');
    }

    const changeLocation=(event) => {
      setLocation(event.target.value);
      console.log('in change location');
  }

  const changeStatus=(event) => {
    setStatus(event.target.value);
    console.log('in change status');
}
const changePackaging=(event) => {
  setPackaging(event.target.value);
  console.log('in change packaging');

}

    const addItem=() => {
        // new item object
         const newItemInventory ={
           item: newItem,
           category_id: selectCategory,
           location_id: selectLocation,
           packaging_id: selectPackaging,
          status_id: selectStatus,
          notes: newNotes,
          user_id: store.user.id
          // reorder: isCheckedReorder,
          // donated: isCheckedDonated,
          //date: newDate
        }
        // dispatch with new item as payload
        console.log('in addItem', newItemInventory);
         dispatch ({type: 'ADD_ITEM', payload: newItemInventory});
        //  <p>{JSON.stringify(newItem)}</p>
    }
    return (

        <div>
          <h2>{heading}</h2>
        <div>
        <label for="Item"> Item</label><br>
            </br>
            <input type="text" placeholder="item" onChange={event => setItem(event)}></input><br></br>

            {categories.length === 0 ? (
                <div>Loading...</div>
            ) : (
                <div>Category</div>
            )}

            {/* <h3>{JSON.stringify(categories)}</h3> */}
            <select onChange={changeCategory}>
                {categories.map(category => (
                    <option key={category.id} value={category.id}>{category.category_name}</option>
                ))}
            </select><br></br>

            {locations.length === 0 ? (
                <div>Loading...</div>
            ) : (
                <div>Location</div>
            )}

            {/* <h3>{JSON.stringify(locations)}</h3> */}
            <select onChange={changeLocation}>
                {locations.map(location => (
                    <option key={location.id} value={location.id}>{location.location_name}</option>
                ))}
            </select><br></br>

            {statuses.length === 0 ? (
                <div>Loading...</div>
            ) : (
                <div>Status</div>
            )}

            {/* <h3>{JSON.stringify(statuses)}</h3> */}
            <select onChange={changeStatus}>
                {statuses.map(status => (
                    <option key={status.id} value={status.id}>{status.status_name}</option>
                ))}
            </select>

            {packages.length === 0 ? (
                <div>Loading...</div>
            ) : (
                <div>Packaging</div>
            )}

             {/* <h3>{JSON.stringify(packages)}</h3> */}
            <select onChange={changePackaging}>
                {packages.map(packaging => (
                    <option key={packaging.id} value={packaging.id}>{packaging.packaging_name}</option>
                ))}
            </select><br></br>
            
          
            
            <label for="Item"> Notes</label><br></br>
            <input type="text" placeholder="notes" onChange={event => setNotes(event)}></input><br></br>
            
            {/* <input type="checkbox" id="reorder" name="reorder" value="Reorder"onChange={event => setReorder(event)}></input>
            <label for="reorder"> Reorder</label>
            <input type="checkbox" id="donated" name="donated" value="Donated"onChange={event => setDonated(event)}></input>
            <label for="donated"> Donated</label> */}
            <button onClick={addItem}>Add Item</button>
             
             {/* <p>{JSON.stringify(newItem, selectCategory)}</p> */}
           {/* <p>{JSON.stringify (store)}</p> */}
            </div>
        </div>
    );
}

export default AddItem;
