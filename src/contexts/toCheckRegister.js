import React from 'react';

const ToCheckRegister = React.createContext({
    cpf: noChecked,
    password: noChecked,
    name: noChecked
}
);

function noChecked(data) {
    return { valid: true, text: "" }
}

export default ToCheckRegister;