import {ADD_ITEM, REMO_ITEM} from "../action/action";

const addItem = (state = 0, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return state += 1;
        case REMO_ITEM:
            return state -= 1;
        default:
            return state;
    }
};
export default addItem
