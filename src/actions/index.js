import { RECEIVE_ROBOT_DATA, CHANGE_SEARCH_FIELD } from './constants';

export const ReceiveRobotData = (robots) => ({
    type: RECEIVE_ROBOT_DATA,
    payload: {
        robots
    }
});

export const ChangeSearchField = (event) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: {
        text: event.target.value
    }
});