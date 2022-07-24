import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_LOCATION" actions
function* fetchLocation() {
  try {
    const response = yield axios.get('/api/location');
    yield put({ type: 'SET_LOCATION', payload: response.data });
  } catch (error) {
    console.log('Location get request failed', error);
  }
}

function* locationSaga() {
  yield takeLatest('FETCH_LOCATION', fetchLocation);
}

export default locationSaga;
