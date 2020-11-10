

function Dinner(props){
    return(
        <div>
            <h1>today for dinner i am having {props.item} </h1>
            <button onClick={props.desert} > click</button>
        </div>
    );
}

export default Dinner