// import axios from 'axios';
// import { put, takeLatest } from 'redux-saga/effects';

// // worker Saga: will be fired on "ADD_ITEM" actions
// function* addingItem() {
  
//   try {
//     const response = yield axios.get('/api/add', action.payload);
//     console.log('response', response);
//     yield put({ type: 'SET_ADD_ITEM', payload: response.data });
//   } catch (error) {
//     console.log('Add Item post request failed', error);
//   }
// }

// function* addingItemSaga() {
//   yield takeLatest('ADD_ITEM', addingItem);
// }

// export default addingItemSaga;


