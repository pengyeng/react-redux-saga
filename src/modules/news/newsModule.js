import newsReducer from "./newsReducer"
import { newsSaga } from "./newsSaga"

export function getNewsModule()  {
    return {
        id: "news",
        reducerMap: {
            news: newsReducer,
        },
        sagas: [newsSaga],
    };
}