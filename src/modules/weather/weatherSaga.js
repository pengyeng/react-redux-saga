import { takeLatest, put } from 'redux-saga/effects';

export function* weatherSaga(){
    yield takeLatest('GET_WEATHER', fetchWeather)
  }

export function* errorSaga(){
    yield takeLatest('GET_ERROR', fetchError)
  }

function* fetchError() {
  //var indicatorRUM = true;

  //if (indicatorRUM){
  //const transaction = apm.startTransaction('Fetch Error', 'custom')  
  //}
  const json = yield fetch('https://api.openweathermap.org/data/2.5/weather?q=Londont&appid=7a8b48eff40d326e222957e68b2f1ab2')
    .then(response => response.json());
  console.log("Error..Error..Error..Error..")  
  console.log("Error..Error..Error..Error..")  
  console.log("Error..Error..Error..Error..")  
  yield put({ type: "WEATHER_RECEIVED", json: json.weather || [{ error: json.message }] });
  //if (indicatorRUM){
  //  transaction.end()
  //}
}

function* fetchWeather() {
  
  const json = yield fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=7a8b48eff40d326e222957e68b2f1ab2')
    .then(response => response.json());
    
  yield put({ type: "WEATHER_RECEIVED", json: json.weather || [{ error: json.message }] });
}