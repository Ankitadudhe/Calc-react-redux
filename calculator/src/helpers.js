export function operationClicked(state, action) {

    if(action.operation === '='){
        state.result = eval(state.digit1 + state.operation + state.digit2);
        state.displayNumber = 'result';

        if(Math.floor(state.result) != state.result){
            state.result = state.result.toFixed(2);
        }


    } else if(action.operation === 'AC'){
        state = { digit1 : '', digit2 : '', operation : '', result : 0, displayNumber :'result' };
    }
    else {
        if(state.digit2){
            state.digit1 = state.result;
            state.displayNumber = 'digit1';
            state.digit2 = '';
        }
        state.operation = action.operation;
    }

    return Object.assign({}, state);
}

export function digitClicked(state, action) {

    if(!state.operation){
        state.digit1 = state.digit1 + action.digit;
        state.displayNumber = 'digit1';
    } else {
        state.digit2 = state.digit2 + action.digit;
        state.displayNumber = 'digit2';
    }

    return Object.assign({}, state);
}

export function resultClicked(state, action) {
    return Object.assign({}, state);
}