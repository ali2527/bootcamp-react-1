const TransctionReducer = (state,action) => {
    switch(action.type){
        case "ADD_TRANSCTION":{
            return [...state  , action.payload]
        }
        case "DEL_TRANSCTION":
            return [...state.filter(text => text.id !== action.payload)]        
        default :
            return state;
        
    }
}
export default TransctionReducer;