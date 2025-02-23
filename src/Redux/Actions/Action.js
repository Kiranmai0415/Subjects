export const selectcard = (cardId)=>({
    type: 'SELECT_CARD',
    payload:cardId,
});

export const deselectcard = () => ({
    type:"DESELECT_cARD",
});