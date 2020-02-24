import actionTypes from "../actions/action-type";


const initState = {
    language: ""
};


const languageReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_LANGUAGE:
            return {
                ...state,
                ...{ language: action.data.target.value }
            };
        default:
            return state;
    }
};

export default languageReducer;