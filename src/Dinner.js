

function Dinner(props){
    return(
        <div>
            <h1>today for dinner i am having {props.item} </h1>
            <h1>value of counter is {props.count}</h1>
            <button onClick={props.update} > click 2</button>
        </div>
    );
}

export default Dinner