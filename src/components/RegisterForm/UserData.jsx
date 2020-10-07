import React, { useState, useContext } from 'react';
import { TextField, Button } from '@material-ui/core';
import ToCheckRegister from "../../contexts/toCheckRegister";
import useErrors from "../../hooks/useErrors"

function UserData({ onSubmit }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const toCheck = useContext(ToCheckRegister);
    const [errors, toCheckBlankSpace, toSend] = useErrors(toCheck);

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            if (toSend()) {
                onSubmit(email, password);
            }
        }}>
            <TextField
                value={email}
                onChange={
                    (event) => {
                        setEmail(event.target.value)
                    }}
                id="email"
                name="email"
                label="Email"
                type="email"
                required
                variant="outlined"
                margin="normal"
                fullWidth
            />
            <TextField
                value={password}
                onChange={
                    (event) => {
                        setPassword(event.target.value)
                    }}
                onBlur={toCheckBlankSpace}
                error={!errors.password.valid}
                helperText={errors.password.text}
                id="password"
                name="password"
                label="Password"
                type="password"
                required
                variant="outlined"
                margin="normal"
                fullWidth
            />

            <Button type="submit" variant="contained" color="primary">
                Next
            </Button>
        </form>
    );
}

export default UserData;