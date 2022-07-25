import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "ADD_ITEM" actions
function* adding() {
  try {
    const response = yield axios.get('/api/adding');
    yield put({ type: 'ADD_ITEM', payload: response.data });
  } catch (error) {
    console.log('Add Item get request failed', error);
  }
}

function* addingSaga() {
  yield takeLatest('SET_ADD_ITEM', adding);
}

export default addingSaga;
