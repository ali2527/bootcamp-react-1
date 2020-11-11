
const CounterReducer = (state,action) => {
    switch(action){
        case "increment":
            return state + 1
        default:
            throw new Error()

    }
}

export default CounterReducer;