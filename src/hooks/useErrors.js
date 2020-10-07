import React, { useState } from "react";

function useErrors(toCheck) {
    const initialState = createInitialState(toCheck);
    const [errors, setErrors] = useState(initialState);

    function toCheckBlankSpace(event) {
        const { name, value } = event.target;
        const newState = { ...errors };
        newState[name] = toCheck[name](value);
        setErrors(newState);
    }

    function toSend() {
        for (let blankSpace in errors) {
            if (!errors[blankSpace].valid) {
                return false;
            }
        }
        return true;
    }

    return [errors, toCheckBlankSpace, toSend];
}

function createInitialState(toCheck) {
    const initialState = {};
    for (let blankSpace in toCheck) {
        initialState[blankSpace] = { valid: true, text: "" };
    }

    return initialState;
}

export default useErrors;
