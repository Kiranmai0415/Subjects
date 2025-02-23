export const SELECT_CARD = 'SELECT_CARD';
export const CLEAR_SELECTED_CARD = 'CLEAR_SELECTED_CARD';

export const selectCard = (cardId) => ({
    type: SELECT_CARD,
    payload: cardId,
});

export const clearSelectedCard = () => ({
    type: CLEAR_SELECTED_CARD,
});
