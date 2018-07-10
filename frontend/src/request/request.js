export const REQUEST_SENT = 'REQUEST_SENT';
export const REQUEST_COMPLETED = 'REQUEST_SENT';

export function request(state = {isFetching: false}, action) {
    switch (action.type) {
        case REQUEST_SENT:
            return Object.assign({}, state, {
                isFetching: true
            });
        case REQUEST_COMPLETED:
            return Object.assign({}, state, {
                isFetching: false
            });
        default:
            return state;
    }


}