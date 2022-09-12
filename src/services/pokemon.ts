export interface AllPokemon {
  count: number;
  next: string;
  previous: null | string;
  results: PokemonResult;
}

export interface PokemonResult
  extends Array<{
    name: string;
    url: string;
  }> {}

export interface Pokemon {
  sprites: {
    front_default: string;
  };
  name: string;
  weight: string;
  height: string;
  abilities: [
    {
      ability: {
        name: string;
      };
    }
  ];
}

export async function getAllPokemon(url: string): Promise<AllPokemon> {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        resolve(data);
      });
  });
}

export async function getPokemon(url: string): Promise<Pokemon> {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        resolve(data);
      });
  });
}
