import { PrimeiroComponente, ArrowFunction } from "../components/PrimeiroComponente";

export default function Home() {
  return (
    <>
      <PrimeiroComponente 
          mensagem="Olá, esta mensagem estou passando por parâmetro"
          mensagemDoBotao=" Essa é a mensagem do botao"/>

          <PrimeiroComponente 
          mensagem="Olá, esta mensagem estou passando pelo segundo parametro"
          mensagemDoBotao=" Essa é a mensagem do segundo botao"/>

          <PrimeiroComponente 
          mensagem="Olá, esta mensagem estou passando pelo segundo parametro"
          />
      <ArrowFunction/>
    </>
  );
}
