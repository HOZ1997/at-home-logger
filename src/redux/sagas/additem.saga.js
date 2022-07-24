import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "ADD_ITEM" actions
function* fetchPackaging() {
  try {
    const response = yield axios.get('/api/additem');
    yield put({ type: 'SET_ADDITEM', payload: response.data });
  } catch (error) {
    console.log('Add Item get request failed', error);
  }
}

function* addItemSaga() {
  yield takeLatest('FETCH_PACKAGING', fetchPackaging);
}

export default packagingSaga;
