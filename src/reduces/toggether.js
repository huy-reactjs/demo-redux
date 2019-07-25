import {TOGGETHER_TODO} from "../action/action";

const toggtherItem = (state = false, action) => {
    switch (action.type) {
        case TOGGETHER_TODO:
            return !state;
        default:
            return state;
    }
};
export default toggtherItem
