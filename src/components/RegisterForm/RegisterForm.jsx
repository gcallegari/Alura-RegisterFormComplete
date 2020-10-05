import React, { useState } from 'react';
import { TextField, Button, Switch, FormControlLabel } from '@material-ui/core';

function RegisterForm({ onSubmit, toCheckCpf }) {
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [cpf, setCpf] = useState("");
    const [promos, setPromos] = useState(true);
    const [newsletter, setNewsletter] = useState(true);
    const [errors, setErrors] = useState({ cpf: { valid: true, text: "" } });
    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                onSubmit({ name, lastname, cpf, promos, newsletter });
            }}>
            <TextField
                value={name}
                onChange={(event) => {
                    let tmpName = event.target.value;
                    if (tmpName.length >= 3) {
                        tmpName = tmpName.substr(0, 3);
                    }

                    setName(tmpName);
                }}
                id="name"
                label="Name"
                variant="outlined"
                margin="normal"
                fullWidth
            />
            <TextField
                value={lastname}
                onChange={(event) => {
                    setLastname(event.target.value);
                }}
                id="lastname"
                label="Last Name"
                variant="outlined"
                margin="normal"
                fullWidth
            />
            <TextField
                value={cpf}
                onChange={(event) => {
                    setCpf(event.target.value);
                }}

                onBlur={(event) => {
                    const isValid = toCheckCpf(cpf);
                    setErrors({ cpf: isValid })
                }}
                error={!errors.cpf.valid}
                helperText={errors.cpf.text}
                id="cpf"
                label="CPF"
                variant="outlined"
                margin="normal"
                fullWidth
            />

            <FormControlLabel
                label="Outlet %"
                control={
                    <Switch
                        checked={promos}
                        onChange={(event) => {
                            setPromos(event.target.value);
                        }}
                        name="promos"
                        defaultChecked={promos}
                        color="primary"
                    />
                }
            />
            <FormControlLabel
                label="Newsletter"
                control={
                    <Switch
                        checked={newsletter}
                        onChange={(event) => {
                            setNewsletter(event.target.value);
                        }}
                        name="newsletter"
                        defaultChecked={newsletter}
                        color="primary"
                    />
                }
            />

            <Button type="submit" variant="contained" color="primary">
                LOGIN
            </Button>

        </form>
    );
}

export default RegisterForm;