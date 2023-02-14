import { combineReducers, createStore } from "redux";
import { authReducer } from "./auth/authReducer";
import { calculatorReducer } from "./calculator/CalculatorReducer";


const rootReducer = combineReducers({
calculator: calculatorReducer,
auth: authReducer,
})

export const store = createStore(rootReducer)

store.subscribe(() => {
})