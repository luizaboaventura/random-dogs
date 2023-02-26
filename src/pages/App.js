import "./App.css";
import Botao from "../components/Botao/index";
import Img from "../components/Img/index";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [imagem, setImagem] = useState();
  const [imagemTrocada, setImagemTrocada] = useState(false);

  function mudaImagem() {

    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then((resposta) => setImagem(resposta.data.message))
      .catch(erro => console.log(erro.message));

    setImagemTrocada(true);
  }

  return (
    <main>
      <section>
        <h1>Random Dogs &#128062;</h1>
        <Img imagem={imagem} imagemTrocada={imagemTrocada} />
        <Botao mudaImagem={mudaImagem}/>
      </section>
    </main>
  );
}

export default App;
