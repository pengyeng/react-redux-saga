import phoneReducer from "./phoneReducer"
import { phoneSaga } from "./phoneSaga"

export function getPhoneModule()  {
    return {
        id: "phone",
        reducerMap: {
            data: phoneReducer,
        },
        sagas: [phoneSaga],
    };
}    