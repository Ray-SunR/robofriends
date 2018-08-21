import { CHANGE_SEARCH_FIELD, RECEIVE_ROBOT_DATA } from '../actions/constants';
export default (state = {
    robots: [],
    searchField: ''
}, action) => {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            console.log(action.payload);
            return {
                ...state,
                searchField: action.payload.text
            };
        case RECEIVE_ROBOT_DATA:
            console.log(action.payload);
            return {
                ...state,
                robots: action.payload.robots
            };
        default:
            return state;
    }
}