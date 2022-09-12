import React from "react";
import { Container, Title } from "./styles";
import SearchBar from "../SearchBar";

function Header() {
  return (
    <Container>
      <Title>Pokemon API</Title>
      <SearchBar />
    </Container>
  );
}

export default Header;
