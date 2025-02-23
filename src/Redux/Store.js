import { createStore } from 'redux';
import rootReducer from '../Redux/Reducers/index';

const store = createStore(rootReducer);

export default store;

