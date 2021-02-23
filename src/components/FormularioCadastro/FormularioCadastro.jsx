import React, { useContext, useEffect, useState } from "react";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import DadosEntrega from "./DadosEntrega";
import { Step, StepLabel, Stepper, Typography } from "@material-ui/core";

function FormularioCadastro({ aoEnviar }) {
  const [paginaAtual, setpaginaAtual] = useState(0);
  const [dadosColetados, setDadosColetados] = useState({});
  useEffect(() => {
    if (paginaAtual === listaFormularios.length - 1) {
      aoEnviar(dadosColetados);
    }
  });

  const listaFormularios = [
    <DadosUsuario aoEnviar={dadosFormulario} />,
    <DadosPessoais aoEnviar={dadosFormulario} />,
    <DadosEntrega aoEnviar={dadosFormulario} />,
    <Typography variant="h5">Obrigado pelo Cadastro</Typography>,
  ];

  function dadosFormulario(dados) {
    setDadosColetados({ ...dadosColetados, ...dados });
    proximaPagina();
  }

  function proximaPagina() {
    setpaginaAtual(paginaAtual + 1);
  }

  return (
    <>
      <Stepper activeStep={paginaAtual}>
        <Step>
          <StepLabel>Login</StepLabel>
        </Step>
        <Step>
          <StepLabel>Dados Pessoais</StepLabel>
        </Step>
        <Step>
          <StepLabel>Dados Entrega</StepLabel>
        </Step>
        <Step>
          <StepLabel>Finalização</StepLabel>
        </Step>
      </Stepper>
      {listaFormularios[paginaAtual]}
    </>
  );
}

export default FormularioCadastro;
