import genericReducer from "../generic/genericReducer"
import { genericSaga } from "../generic/genericSaga"


export function getGenericModule(module)  {
    const myModule = module;
    return {
        id: "data",
        reducerMap: {
            data: genericReducer,
        },
        sagas: [genericSaga],
    };
    
}  