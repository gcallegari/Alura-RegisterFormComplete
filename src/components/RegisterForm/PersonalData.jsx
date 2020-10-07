import React, { useState, useContext } from 'react';
import { TextField, Button, Switch, FormControlLabel } from '@material-ui/core';
import ToCheckRegister from "../../contexts/toCheckRegister";
import useErrors from "../../hooks/useErrors"

function PersonalData({ onSubmit }) {
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [cpf, setCpf] = useState("");
    const [promos, setPromos] = useState(true);
    const [newsletter, setNewsletter] = useState(false);
    const toCheck = useContext(ToCheckRegister);
    const [errors, toCheckBlankSpace, toSend] = useErrors(toCheck);

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                if (toSend()) {
                    onSubmit({ name, lastname, cpf, promos, newsletter });
                }
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
                name="name"
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
                name="lastname"
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

                onBlur={toCheckBlankSpace}
                error={!errors.cpf.valid}
                helperText={errors.cpf.text}
                id="cpf"
                name="cpf"
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
                        color="primary"
                    />
                }
            />

            <Button type="submit" variant="contained" color="primary">
                Next
            </Button>

        </form>
    );
}

export default PersonalData;