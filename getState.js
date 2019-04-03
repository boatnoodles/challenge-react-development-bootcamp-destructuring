const getState = state => {
    const logState = () => {
        console.log(`Your state is ${state}.`)
    }
    // function logState(){
    //     console.log(`Your state is ${state}.`)
    // }

    return [state, logState]
}


const [state, logState] = getState('stable');
console.log(state);
logState();