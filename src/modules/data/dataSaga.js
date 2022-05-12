import { takeLatest, put } from 'redux-saga/effects';

export function* dataSaga(){
  console.log("Saga Take Latest");
  yield takeLatest('GET_CAR_LISTING', fetchCarListing)
}

function* fetchCarListing() {
  
  console.log("Saga call fetchCarListing");
  const json = yield fetch('https://qs516nutbi.execute-api.eu-west-2.amazonaws.com/Prod/')
    .then(response => response.json());
  yield put({ type: "CAR_LISTING_RECEIVED", json: json });

}