import { configureStore } from "@reduxjs/toolkit";
import helloReducer from "./ReduxExamples/HelloRedux/helloReducer";
import counterReducer from "./ReduxExamples/CounterRedux/counterReducer";
import addReducer from "./ReduxExamples/AddRedux/addReducer";
import todosReducer from "./ReduxExamples/todos/todosReducer";

const store = configureStore({
  reducer: {
    helloReducer,
    counterReducer,
    addReducer,
    todosReducer,
  },
});
// debug: log initial store state when module loads
try { console.log("Lab4 store created, initial state:", store.getState()); } catch (e) {}
export type RootState = ReturnType<typeof store.getState>;
export default store;