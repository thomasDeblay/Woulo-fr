import {createStore} from 'redux';


const incrementCount = ({ incrementBy = 1 } = ()) => ({
        type: 'INCREMENT',
        incrementBy
});


const countReduceur = (state = { count: 0 }, action) => {
    
    switch (action.type){
        case 'INCREMENT' :
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1; 
            return {
                count : state.count + incrementBy
            };
        case 'DECREMENT' : 
            return {
                count : state.count - 1
            }
        case 'RESET': 
            return {
                count : 0
            }
        default: 
        return state;
    }
};

const store = createStore(countReduceur);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch({
    type : 'INCREMENT',
    incrementBy: 5
});

store.dispatch(incrementCount());

store.dispatch({
    type : 'INCREMENT'
});

store.dispatch({
    type : 'RESET'
});

store.dispatch({
    type : 'DECREMENT'
});

