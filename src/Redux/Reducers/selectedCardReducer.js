
import { SELECT_CARD, CLEAR_SELECTED_CARD } from '../Actions';

const initialState = null;

const selectedCardReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_CARD:
            return action.payload;
        case CLEAR_SELECTED_CARD:
            return null;
        default:
            return state;
    }
};

export default selectedCardReducer;
