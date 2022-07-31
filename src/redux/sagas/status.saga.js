import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_STATUS" actions
function* fetchStatus() {
  try {
    const response = yield axios.get('/api/status');
    yield put({ type: 'SET_STATUS', payload: response.data });
  } catch (error) {
    console.log('Status get request failed', error);
  }
}

function* statusSaga() {
  yield takeLatest('FETCH_STATUS', fetchStatus);
}

export default statusSaga;
