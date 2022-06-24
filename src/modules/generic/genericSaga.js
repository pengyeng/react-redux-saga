import { takeLatest, put } from 'redux-saga/effects';

export function* genericSaga(){
  console.log("Saga Take Latest");
  yield takeLatest('GET_GENERIC_LISTING', fetchGenericListing);
  yield takeLatest('SUBMIT_GENERIC_DATA', submitGenericData);
}

function* fetchGenericListing(action) {
  console.log("Saga call fetchGenericListing ");

  const json = yield fetch(action.url)
      .then(response => response.json());
    yield put({ type: "GENERIC_LISTING_RECEIVED", json: json });
}

function* submitGenericData(action) {
  console.log("Saga call submitGenericData ");
  console.log(action);
  var module = action.module;
  var url = action.url;
  const json = yield fetch(action.createUrl,{
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(action.payLoad)
  })
      .then(response => response.json());
    yield put({ type: "GET_GENERIC_LISTING", module, url });
}