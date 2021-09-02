import { combineReducers } from "redux";
import catalogueReducer from './catalogueReducer'

const reducers = combineReducers({
  catalogue: catalogueReducer,
});

export default reducers;
