import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_PACKAGING" actions

function* fetchPackaging() {
  try {
    const response = yield axios.get('/api/packaging');
    yield put({ type: 'SET_PACKAGING', payload: response.data});
  } catch (error) {
    console.log('Packaging get request failed', error);
  }
}

function* packagingSaga() {
  yield takeLatest('FETCH_PACKAGING', fetchPackaging);
}

export default packagingSaga;
