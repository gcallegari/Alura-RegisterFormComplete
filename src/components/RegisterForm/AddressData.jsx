import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";

function AddressData({ onSubmit }) {
    const [cep, setCep] = useState("");
    const [address, setAddress] = useState("");
    const [number, setNumber] = useState("");
    const [state, setState] = useState("");
    const [city, setCity] = useState("");

    return (
        <form onSubmit={
            (event) => {
                event.preventDefault();
                onSubmit({ cep, address, number, state, city });
            }}
        >

            <TextField
                value={cep}
                onChange={
                    (event) => {
                        setCep(event.target.value)
                    }}
                id="cep"
                label="CEP"
                name="cep"
                type="number"
                variant="outlined"
                margin="normal"
            />
            <TextField
                value={address}
                onChange={
                    (event) => {
                        setAddress(event.target.value)
                    }}
                id="address"
                name="address"
                label="Address"
                type="text"
                variant="outlined"
                margin="normal"
                fullWidth
            />
            <TextField
                value={number}
                onChange={
                    (event) => {
                        setNumber(event.target.value)
                    }}
                id="number"
                name="number"
                label="Nº"
                type="number"
                variant="outlined"
                margin="normal"
            />
            <TextField
                value={state}
                onChange={
                    (event) => {
                        setState(event.target.value)
                    }}
                id="state"
                name="state"
                label="State"
                type="text"
                variant="outlined"
                margin="normal"
            />
            <TextField
                value={city}
                onChange={
                    (event) => {
                        setCity(event.target.value)
                    }}
                id="city"
                name="city"
                label="City"
                type="text"
                variant="outlined"
                margin="normal"
            />

            <Button type="submit" variant="contained" color="primary" fullWidth>
                Save All
            </Button>
        </form>
    );
}

export default AddressData;