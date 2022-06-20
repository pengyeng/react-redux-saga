import phoneReducer from "../phone/phoneReducer"
import { phoneSaga } from "../phone/phoneSaga"
import dataReducer from "../data/dataReducer"
import { dataSaga } from "../data/dataSaga"

export function getGenericModule(module)  {
    const myModule = module;
    
    if (myModule.module == "car"){

        return {
            id: "data",
            reducerMap: {
                data: dataReducer,
            },
            sagas: [dataSaga],
        };     
           
    }else{
        return {
            id: "phone",
            reducerMap: {
                data: phoneReducer,
            },
            sagas: [phoneSaga],
        };
    }
}  