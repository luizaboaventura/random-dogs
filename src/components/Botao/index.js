import './Botao.css';

export default function Botao(props) {

    return (

        <button type='button' onClick={() => props.mudaImagem()}>
            click here!
        </button>
    );
}