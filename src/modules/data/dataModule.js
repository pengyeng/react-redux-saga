import dataReducer from "./dataReducer"
import { dataSaga } from "./dataSaga"

export function getDataModule()  {
    return {
        id: "data",
        reducerMap: {
            data: dataReducer,
        },
        sagas: [dataSaga],
    };
}    