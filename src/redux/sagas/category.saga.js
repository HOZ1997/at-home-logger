import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_CATEGORY" actions
function* fetchCategory() {
  try {
    const response = yield axios.get('/api/category');
    console.log('response', response);
    yield put({ type: 'SET_CATEGORY', payload: response.data });
  } catch (error) {
    console.log('Category get request failed', error);
  }
}

function* categorySaga() {
  yield takeLatest('FETCH_CATEGORY', fetchCategory);
}

export default categorySaga;
