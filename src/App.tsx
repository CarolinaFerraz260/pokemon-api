import React, { useState, useEffect } from "react";
import {
  getAllPokemon,
  getPokemon,
  type PokemonResult,
  type Pokemon,
} from "./services/pokemon";
import Card from "./components/Card";
import Header from "./components/Header";
import {
  AllContainer,
  Container,
  ContainerButton,
  Button,
  IconImage,
  TitleLoading,
  ContainerCard,
} from "./styles";
import IconBack from "./assets/back.svg";
import IconNext from "./assets/next.svg";

const URL = "https://pokeapi.co/api/v2/pokemon";

function App() {
  const [pokemonData, setPokemonData] = useState<Array<Pokemon>>([]);
  const [nextUrl, setNextUrl] = useState<string>("");
  const [previousUrl, setPreviousUrl] = useState<string | null>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [pokemonSearch, setPokemonSearch] = useState<Pokemon | null>();

  useEffect(() => {
    async function fetchData() {
      const { next, previous, results } = await getAllPokemon(URL);
      setNextUrl(next);
      setPreviousUrl(previous);
      await loadingPokemon(results);
      setLoading(false);
    }
    fetchData();
  }, []);

  useEffect(() => {
    const locationSearch = window.location.search;

    if (!locationSearch) return;

    const search = JSON.parse(
      '{"' +
        locationSearch.substring(1).replace(/&/g, '","').replace(/=/g, '":"') +
        '"}',
      function (key, value) {
        return key === "" ? value : decodeURIComponent(value);
      }
    );

    getPokemon(URL + "/" + search?.search).then((res) => setPokemonSearch(res));
  }, []);

  const next = async () => {
    setLoading(true);

    const { next, previous, results } = await getAllPokemon(nextUrl);
    await loadingPokemon(results);

    setNextUrl(next);
    setPreviousUrl(previous);
    setLoading(false);
  };

  const prev = async () => {
    if (!previousUrl) return;

    setLoading(true);

    const { next, previous, results } = await getAllPokemon(previousUrl);
    await loadingPokemon(results);

    setNextUrl(next);
    setPreviousUrl(previous);
    setLoading(false);
  };

  const loadingPokemon = async (data: PokemonResult) => {
    const pokemonDataResult = await Promise.all(
      data.map(async (pokemon) => {
        const pokemonRecord = await getPokemon(pokemon.url);
        return pokemonRecord;
      })
    );

    setPokemonData(pokemonDataResult);
  };

  if (loading) {
    return <TitleLoading>Loading...</TitleLoading>;
  }

  const prevNextButtons = () => (
    <ContainerButton>
      <Button onClick={prev}>
        <IconImage src={IconBack} alt="Previous" />
      </Button>
      <Button onClick={next}>
        <IconImage src={IconNext} alt="Next" />
      </Button>
    </ContainerButton>
  );

  return (
    <>
      <Header />
      {pokemonSearch ? (
        <ContainerCard>
          <Card pokemon={pokemonSearch} />
        </ContainerCard>
      ) : (
        <>
          {prevNextButtons()}
          <AllContainer>
            <Container>
              {pokemonData.map((pokemon, i) => {
                return <Card key={i} pokemon={pokemon} />;
              })}
            </Container>
          </AllContainer>
          {prevNextButtons()}
        </>
      )}
    </>
  );
}

export default App;
