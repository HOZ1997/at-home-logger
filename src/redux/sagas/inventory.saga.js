import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_INVENTORY" actions
function* addingItem(action) {
  
  try {
    const response = yield axios.post('/api/inventory', action.payload);
    //yield put({ type: 'SET_ITEM', payload: response.data });
    fetchInventory();
  } catch (error) {
    console.log('Add Item post request failed', error);
  }
}


function* fetchInventory() {
  try {
    const response = yield axios.get('/api/inventory');
    yield put({ type: 'SET_INVENTORY', payload: response.data });
  } catch (error) {
    console.log('Inventory get request failed', error);
  }
}

function* inventorySaga() {
  yield takeLatest('ADD_ITEM', addingItem);
  yield takeLatest('FETCH_INVENTORY', fetchInventory);
  
}

export default inventorySaga;
