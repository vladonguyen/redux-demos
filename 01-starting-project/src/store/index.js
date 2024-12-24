const redux = require("redux");

const counterReducer = (state = {counter: 0}, action) => {
    if(action.type === "increment"){
        return {counter: state.counter + 1}
    }else if(action.type === "decrement"){
        return {counter: state.counter -1}
    }else {
        return {counter: state.counter}
    }
};

const store = redux.createStore(counterReducer);

const counterSubscriber = ()=>{
    const currentState = store.getState();
    console.log(currentState);
}

store.subscribe(counterSubscriber);

store.dispatch({type: "increment"});
store.dispatch({type: "decrement"});
store.dispatch({type: "increment"});