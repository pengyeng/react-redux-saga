import { takeLatest, put } from 'redux-saga/effects';
import {apm} from '@elastic/apm-rum'

export function* newsSaga(){
  yield takeLatest('GET_NEWS', fetchNews)
}

function* fetchNews() {
  const transaction = apm.startTransaction('Fetch News','custom')
  
  const json = yield fetch('https://newsapi.org/v1/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc')
    .then(response => response.json());
  yield put({ type: "NEWS_RECEIVED", json: json.articles || [{ error: json.message }] });

  transaction.end()
}