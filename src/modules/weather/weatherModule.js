import weatherReducer from "./weatherReducer"
import { weatherSaga,errorSaga } from "./weatherSaga"

export function getWeatherModule()  {
    return {
        id: "weather",
        reducerMap: {
            weather: weatherReducer,
        },
        sagas: [weatherSaga,errorSaga],
    };
}