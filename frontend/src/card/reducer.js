export const characterSheet = (state = {header: {}}, action) => {
    switch (action.type) {
        case actions.VALUE_CHANGE:
            return Object.assign({}, state, action.change);
        default:
            return state;
    }
};



export const actions = {
  VALUE_CHANGE : "VALUE_CHANGED"
};
