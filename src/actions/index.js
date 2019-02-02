const addTask = (task) => {
    return{
        type:'ADD_TASK',
        payload: task
    }
},
deleteTask=(taskId)=>{
    return{
        //type is name of the action and payload the value of that action
        type:'DELETE_TASK',
        payload: taskId
    }
}

export default {addTask, deleteTask};