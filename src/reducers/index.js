import {combineReducers} from 'redux';

const tasksReducer=(state=[] , action)=>{

    // eslint-disable-next-line default-case
    switch(action.type){
        case 'ADD_TASK':
        state = state.concat(action.payload);
        break;

        case 'DELETE_TASK':
        state = state.slice();
        state.splice(action.payload, 1);
        break;

    }
    return state;
},
reducers=combineReducers({
    tasks:tasksReducer
});

export default reducers;