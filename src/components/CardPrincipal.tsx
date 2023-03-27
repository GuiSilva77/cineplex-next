import Filme from "../../entities/Filme";
import Image from "next/image";
interface Props {
  filme: Filme;
}

function CardPrincipal(props: Props) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-96 bg-gray-100 rounded-lg shadow-lg opacity-30 ">
      <img
        className="absolute top-0 object-cover"
        alt={props.filme.Nome ? props.filme.Nome : "filme"}
        src={props.filme.URLCapa ? props.filme.URLCapa : "capa"}
      />
      <div className="text-white opacity-0 hover:opacity-100 z-50 flex flex-col items-center justify-center w-full h-1/4">
        <h1 className="text-2xl font-bold">{props.filme.Nome}</h1>
        <p className="text-sm">{props.filme.Resumo}</p>
      </div>
    </div>
  );
}

export default CardPrincipal;
