import React from "react";
import { type Pokemon } from "../../services/pokemon";
import {
  Container,
  ContainerImage,
  ImageCard,
  NameCard,
  ContainerData,
  TitleData,
  ContainerInfo,
  Ability,
  TextInfo,
} from "./styles";

function Card({ pokemon }: { pokemon: Pokemon }) {
  return (
    <Container>
      <ContainerImage>
        <ImageCard src={pokemon.sprites.front_default} alt="Pokemon" />
      </ContainerImage>
      <NameCard>{pokemon.name}</NameCard>
      <ContainerInfo>
        <ContainerData>
          <TitleData>Weight</TitleData>
          <TextInfo>{pokemon.weight}</TextInfo>
        </ContainerData>
        <ContainerData>
          <TitleData>Height</TitleData>
          <TextInfo>{pokemon.height}</TextInfo>
        </ContainerData>
        <ContainerData>
          <TitleData>Ability</TitleData>
          <Ability>{pokemon.abilities[0].ability.name}</Ability>
        </ContainerData>
      </ContainerInfo>
    </Container>
  );
}

export default Card;
