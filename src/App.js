import { Container, Typography } from "@material-ui/core";
import React, { Component } from "react";
import "./App.css";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import "fontsource-roboto";
import { toCheckCpf, toCheckPassword } from "./models/register";
import ToCheckRegister from "./contexts/toCheckRegister";
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
        <ToCheckRegister.Provider value={{ cpf: toCheckCpf, password: toCheckPassword, name: toCheckPassword }}>
          <RegisterForm onSubmit={onSubmitForm} />
        </ToCheckRegister.Provider>
      </Container>
    );
  }
}

function onSubmitForm(data) {
  console.log(data)
}

export default App;