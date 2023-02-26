import './Img.css';

import Image from '../../assets/img/dog.jpg';

export default function Img(props) {

  const imagemApi = <div className="img__imagem" style={{backgroundImage: `url('${props.imagem}')`}}></div>;
  const imagemInicial = <div className="img__imagem" style={{backgroundImage: `url(${Image})`}}></div>;

  return (
    <div className="img">
      <div className="img__borda">
        {props.imagemTrocada? imagemApi : imagemInicial}
      </div>
    </div>
  );
}
