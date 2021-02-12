import React from "react";
import FormularioCadastro from "./FormularioCadastro";
import DadosUsuario from "./DadosUsuario";
import DadosEntrega from "./DadosEntrega";

function DadosPessoais({ aoEnviar, validarCPF }) {
  return (
    <>
      <FormularioCadastro aoEnviar={aoEnviar} validarCPF={validarCPF} />
      <DadosUsuario />
      <DadosEntrega />
    </>
  );
}

export default DadosPessoais;
