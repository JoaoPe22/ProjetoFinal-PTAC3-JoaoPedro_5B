"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Main() {
  const [listViagens, setListViagens] = useState([]);
  const [listComplete, setListComplete] = useState([]);
  const [search, setSearch] = useState("");
  

  useEffect(() => {
    const getViagem = async () => {
      const response = await fetch("http://localhost:3000/api");
      const data = await response.json();
      setListViagens(data);
    };
    getViagem();
  });

  return (
    <main>
      {listViagens.map((viagens) => (
        <div key={viagens.id}>
          {
            <Image
              src={viagens.imagem}
              width={350}
              height={200}
              alt="imagem de produto"
            ></Image>
          }
          <h3>{viagens.lugar}</h3>
          <p>{viagens.pais}</p>
          <h2>R${viagens.preco}</h2>
          <p>{viagens.tipo}</p>
        </div>
      ))}
    </main>
  );
}
