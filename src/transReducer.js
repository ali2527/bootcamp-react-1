const TransctionReducer = (state,action) => {
    switch(action.type){
        case "ADD_TRANSCTION":{
            return [action.payload , ...state]
        }
        case "DEL_TRANSCTION":{
            return alert(action.payload)
        }
        default :
            return state;
        
    }
}
export default TransctionReducer;