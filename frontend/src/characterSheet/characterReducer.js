import deepAssign from 'deep-assign'
import axios from 'axios';

export const characterSheet = (state = {header: {}}, action) => {
    switch (action.type) {
        case VALUE_CHANGE:
            return deepAssign({}, state, action.change);
        case LOAD_SHEET:
            return Object.assign({}, state, {isLoading: true});
        case SHEET_RECEIVED:
            return Object.assign({}, state, action.sheet, {isLoading: false});
        default:
            return state;
    }
};

const loadCharacterSheet = () => {
    return {
        type: LOAD_SHEET
    }
};
const characterSheetReceived = (json) => {
    return {
        type: SHEET_RECEIVED,
        sheet: json
    }
};


export const actions = {
    changeValue: value => {
        return {
            type: VALUE_CHANGE,
            change: value
        }
    },
    loadCharacterSheet: (id) => {
        return function (dispatch) {
            dispatch(loadCharacterSheet());

            let config = {
                params:
                    {id: id},
                headers: {
                    Authorization: localStorage.getItem('id_token')
                }
            };
            return axios.get('/api/character', config)
                .then(
                    ok => ok.data,
                    err => console.log("Error!", err)
                ).then(json =>
                    dispatch(characterSheetReceived(json))
                )
        }
    }
};

const VALUE_CHANGE = "VALUE_CHANGED";
const LOAD_SHEET = "LOAD_SHEET";
const SHEET_RECEIVED = "SHEET_RECEIVED";