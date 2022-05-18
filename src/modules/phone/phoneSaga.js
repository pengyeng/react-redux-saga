import { takeLatest, put } from 'redux-saga/effects';

export function* phoneSaga(){
  console.log("Saga Take Latest");
  yield takeLatest('GET_PHONE_LISTING', fetchPhoneListing)
}

function* fetchPhoneListing() {
  
  console.log("Saga call fetchPhoneListing");
  const json = yield fetch('https://1rhyxpw764.execute-api.eu-west-2.amazonaws.com/default/phone-listing?TableName=phone-listing')
    .then(response => response.json());
  yield put({ type: "PHONE_LISTING_RECEIVED", json: json });

}