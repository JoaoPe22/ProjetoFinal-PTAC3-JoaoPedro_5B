import Image from "next/image";

export default async function Viagem({ params }) {
  const response = await fetch("http://localhost:3000/api/" + params.id);
  const data = await response.json();
  return (
    <div>
      {
        <Image
          src={data.imagem}
          width={350}
          height={200}
          alt="imagem de produto"
        ></Image>
      }
      <h3>{data.lugar}</h3>
      <p>{data.pais}</p>
      <h2>R${data.preco}</h2>
      <p>{data.tipo}</p>
    </div>
  );
}
