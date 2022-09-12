import React, { useState } from "react";
import { Container, Input, Icon, ContainerSearch } from "./styles";
import IconSearch from "../../assets/searchGo.svg";

const SearchBar = () => {
  const [search, setSearch] = useState("");

  return (
    <Container>
      <ContainerSearch>
        <Input
          type="text"
          id="header-search"
          placeholder="search "
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyUp={(key) => {
            if (key.code === "Enter") {
              window.location.replace(`/?search=${search}`);
            }
          }}
        />
        <Icon alt="Search" src={IconSearch} />
      </ContainerSearch>
    </Container>
  );
};
export default SearchBar;
