export const characterSheet = (state = {header: {}}, action) => {
    switch (action.type) {
        case VALUE_CHANGE:
            return Object.assign({}, state, action.change);
        default:
            return state;
    }
};


export const actions = {
    changeValue: value => {
        return {
            type: VALUE_CHANGE,
            change: value
        }
    },
    loadCharacterSheet: () => {

    }
};

const VALUE_CHANGE = "VALUE_CHANGED";
const VALUE_CHANGE = "LOAD_SHEET";
