import { combineReducers } from 'redux';
import cardReducer from '../Reducers/Reducer';
import selectedCardReducer from '../../Redux/Reducers/selectedCardReducer';

const rootReducer = combineReducers({
    cards: cardReducer,
    selectedCard: selectedCardReducer, 
});

export default rootReducer;
