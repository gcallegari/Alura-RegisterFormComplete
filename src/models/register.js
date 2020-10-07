function toCheckCpf(cpf) {
    if (cpf.length !== 11) {
        return { valid: false, text: "O CPF deve conter 11 dígitos" }
    } else {
        return { valid: true, text: "" }
    }
}

function toCheckPassword(password) {
    if (password.length < 4 || password.length > 72) {
        return { valid: false, text: "A senha deve conter entre 4 e 72 dígitos" }
    } else {
        return { valid: true, text: "" }
    }
}

export {toCheckCpf, toCheckPassword};