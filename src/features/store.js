 import { createStore } from "redux";

 import { reducer as ListReducer } from "./reducer.js";

 export const store = createStore(ListReducer)