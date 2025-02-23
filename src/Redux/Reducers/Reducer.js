
const initialState = {
    cards: [
        { id: 'htmlcard', text: 'HTML' },
        { id: 'csscard', text: 'CSS' },
        { id: 'javascriptcard', text: 'JAVASCRIPT' },
        { id: 'pythoncard', text: 'PYTHON'},
        { id: 'githubcard', text: 'GITHUB' },
        { id: 'reactcard', text: 'REACT JS' },
        { id: 'reduxcard', text: 'REDUX' },
        { id: 'bootstrapcard', text: 'BOOTSTRAP' },
        { id: 'devtoolscard', text: 'BROWSER DEV TOOLS' },
        { id: 'sqlcard', text: 'SQL' },
        { id: 'c-card', text: 'C-LANG' },
    ],
    selectedCardId: null,
};

const cardReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SELECT_CARD':
            return {
                ...state,
                selectedCardId: action.payload,
            };
        case 'CLEAR_SELECTED_CARD':
            return {
                ...state,
                selectedCardId: null,
            };
        default:
            return state;
    }
};

export default cardReducer;
