import React from "react";
import { Button, TextField } from "@material-ui/core";

function DadosEntrega() {
  return (
    <form>
      <TextField
        type="number"
        id="cep"
        placeholder="CEP"
        variant="outlined"
        margin="normal"
      />
      <TextField
        type="text"
        id="endereco"
        placeholder="Endereço"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        type="number"
        id="numero"
        placeholder="Número"
        variant="outlined"
        margin="normal"
      />
      <TextField
        type="text"
        id="estado"
        placeholder="Estado"
        variant="outlined"
        margin="normal"
      />
      <TextField
        type="text"
        id="cidade"
        placeholder="Cidade"
        variant="outlined"
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Finalizar Cadastro
      </Button>
    </form>
  );
}

export default DadosEntrega;
