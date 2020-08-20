export const digitPressed = function (number) {
    return {
        type : 'DIGIT_PRESSED',
        digit : number
    }
}

export const operationPressed = function (operation) {
    return {
        type : 'OPERATION_PRESSED',
        operation : operation
    }
}

export const evaluationPressed = function () {
    return {
        type : 'Evaluation_PRESSED',
        operation : '='
    }
}
