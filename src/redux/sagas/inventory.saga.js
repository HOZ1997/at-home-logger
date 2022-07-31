import axios from 'axios';
import { put, takeLatest, takeEvery } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_INVENTORY" actions


function* deleteInventory(action) {
  //delete inventory from db 
  try {
    console.log (`data in delete inventory: ${action.payload}`);
    const response = yield axios.delete(`api/inventory/delete?id=${action.payload}`);
    yield put({ type: 'SET_INVENTORY', payload: response.data }); 
    //fetchInventory();
  } catch (error) {
    console.log('delete id request failed', error);
  }
}


 function* updateInventory(action) {
  try {
    console.log ("data in update inventory"); //response.data
   const response = yield axios.put('api/inventory/update', action.payload);
   //yield put({ type: 'SET_INVENTORY', payload: response.data });
  fetchInventory(); 
  } catch (error) {
    console.log('Update Inventory put request failed', error);
    }
 }



function* addingItem(action) {
  try {
    const response = yield axios.post('/api/inventory/add', action.payload);
    //yield put({ type: 'SET_INVENTORY', payload: response.data });
    console.log ("adding item Set Inventory", response.data);
    fetchInventory();
  } catch (error) {
    console.log('Add Item post request failed', error);
  }

}


function* fetchInventory(action) {
  try {
    const response = yield axios.get('/api/inventory', action.payload);
    yield put({ type: 'SET_INVENTORY', payload: response.data });
    console.log ("fetch inventory coming back with Set Inventory", response.data);
  } catch (error) {
    console.log('Inventory get request failed', error);
  }
}



function* inventorySaga() {
  yield takeLatest('ADD_ITEM', addingItem);
  yield takeLatest('FETCH_INVENTORY', fetchInventory);
 yield takeLatest('DELETE_INVENTORY', deleteInventory);
 yield takeLatest('UPDATE_INVENTORY', updateInventory);
}


export default inventorySaga;
