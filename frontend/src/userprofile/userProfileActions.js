export const PROFILE_CHANGE = "PROFILE_CHANGE";

export const changeName = newName => dispatch => {
    dispatch({
        type: PROFILE_CHANGE,
        payload: {
            name: newName
        }
    })
};
