import {combineReducers, legacy_createStore as createStore} from "redux";
import { productReducer } from "./reducers/productReducer";
//import { reducer as authReducer } from "./auth/reducer"


const rootReducr = combineReducers({
    productReducer: productReducer,
});
const store = createStore(rootReducr);


export {store};