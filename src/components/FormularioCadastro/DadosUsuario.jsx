import React from "react";
import { Button, TextField } from "@material-ui/core";

function DadosUsuario() {
  return (
    <form>
      <TextField
        type="email"
        id="email"
        placeholder="E-mail"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        type="senha"
        id="senha"
        placeholder="Senha"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default DadosUsuario;
