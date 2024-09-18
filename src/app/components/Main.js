  "use client";
  import { useEffect, useState } from "react";
  import Image from "next/image";
  import Link from "next/link";
  import Loading from "./Loading";
  import ErrorGetData from "./ErrorGetData";
  import styles from "./main.module.css";

  export default function Main() {
    const [listViagens, setListViagens] = useState([]);
    const [listComplete, setListComplete] = useState([]);
    const [errorFetch, setErrorFetch] = useState(true);
    const [search, setSearch] = useState("");

    useEffect(() => {
      const getViagem = async () => {
        try {
          const response = await fetch("http://localhost:3000/api");
          const data = await response.json();
          setListViagens(data);
          setListComplete(data);
        } catch {
          setErrorFetch(false);
        }

      };
      getViagem();
    }, []);

    // erro na busca de dados
    if (errorFetch == false) {
      return <ErrorGetData />;
    }

    //  informações estão sendo carregadas, icone
    if (listComplete[0] == null) {
      return (
        <main>
          <Loading />
        </main>
      );
    }

    // Pesquisa de Viagens
    const searchText = (text) => {
      setSearch(text);

      if (text.trim() == "") {
        setListViagens(listComplete);
        return;
      }

      const newList = listViagens.filter(
        (viagem) =>
          viagem.lugar
            .toUpperCase()
            .trim()
            .includes(search.toUpperCase().trim()) ||
          viagem.pais.toUpperCase().trim().includes(search.toUpperCase().trim())
      );
      setListViagens(newList);
    };

    // Ordem alfabética crescente
    const orderA_Z = () => {
      const newList = [...listViagens].sort((a, b) =>
        a.lugar.localeCompare(b.lugar)
      );
      setListViagens(newList);
    };

    // Ordem alfabética decrecente
    const orderZ_A = () => {
      const newList = [...listViagens].sort((a, b) =>
        b.lugar.localeCompare(a.lugar) 
      );
      setListViagens(newList);
    };

    // Ordem de preco crescente
    const minPreco = () => {
      const newList = [...listViagens].sort((a, b) => a.preco - b.preco);

      setListViagens(newList);
    };

    // Ordem de preco decrecente
    const maxPrice = () => {
      let newList = [...listViagens].sort((a, b) => a.preco - b.preco);
      newList = newList.reverse();
      setListViagens(newList);
    };

    // Filtragem por tipo
    const filterParqueAqua = () => {
      const newList = listComplete.filter(
        (viagem) => viagem.tipo === "Parque Aquático"
      );
      setListViagens(newList);
    };

    const filterPraia = () => {
      const newList = listComplete.filter((viagem) => viagem.tipo === "Praia");
      setListViagens(newList);
    };

    const filterDiversao = () => {
      const newList = listComplete.filter(
        (viagem) => viagem.tipo === "Parque de diversão"
      );
      setListViagens(newList);
    };

    const filterIlha = () => {
      const newList = listComplete.filter((viagem) => viagem.tipo === "Ilha");
      setListViagens(newList);
    };

    const filterTurismo = () => {
      const newList = listComplete.filter((viagem) => viagem.tipo === "Turismo");
      setListViagens(newList);
    };

    const filterParque = () => {
      const newList = listComplete.filter((viagem) => viagem.tipo === "Parque");
      setListViagens(newList);
    };

    return (
      <>
        <div className={styles.filtroContainer}>
          {/* Input de pequisa de viagens */}
          <input
            type="text"
            value={search}
            placeholder="Pesquise por Viagens"
            onChange={(event) => searchText(event.target.value)}
            className={styles.pesquisaInput}
          />
          <Image
            src={"https://cdn-icons-png.flaticon.com/256/64/64673.png"}
            width={30}
            height={30}
          ></Image>
        

          {/* botões de filtrazem */}
          <div className={styles.buttonsContainer}>
            <button onClick={orderA_Z}>A-z</button>
            <button onClick={orderZ_A}>Z-a</button>
            <button onClick={minPreco}>Menor Preço</button>
            <button onClick={maxPrice}>Maior Preço</button>
            <button onClick={filterParqueAqua}>Parque Aquático</button>
            <button onClick={filterPraia}>Praia</button>
            <button onClick={filterDiversao}>Parque Diversão</button>
            <button onClick={filterIlha}>Ilha</button>
            <button onClick={filterTurismo}>Turismo</button>
            <button onClick={filterParque}>Parque</button>
          </div>
        </div>

        {/* Listagem das Viagens */}
        <main className={styles.container}>
          {listViagens.map((viagens) => (
            <div key={viagens.id} className={styles.card}>
              <div className={styles.cabecalho}>
                {
                  <Image
                    className={styles.image}
                    src={viagens.imagem}
                    width={350}
                    height={200}
                    alt="imagem de produto"
                  ></Image>
                }
              </div>

              <h3 className={styles.titulo}>{viagens.lugar}</h3>
              <h2 className={styles.preco}>R${viagens.preco}</h2>

              <button className={styles.rotDi}>
                <Link href={`viagem/${viagens.id}`}>Ver Mais</Link>
              </button>
            </div>
          ))}
        </main>
      </>
    );
  }
