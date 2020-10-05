import { Container, Typography } from "@material-ui/core";
import React, { Component } from "react";
import "./App.css";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import "fontsource-roboto";
class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography
          variant="h3"
          component="h1"
          align="center">
          REGISTER
          </Typography>
        <RegisterForm onSubmit={onSubmitForm} toCheckCpf={toCheckCpf} />
      </Container>
    );
  }
}

function onSubmitForm(data) {
  console.log(data)
}

function toCheckCpf(cpf) {
  if (cpf.length != 11) {
    return { valid: false, text:"O CPF deve conter 11 dígitos" }
  } else {
    return { valid: true, text:"" }
  }
}

export default App;