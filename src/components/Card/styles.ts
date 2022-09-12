import styled from "styled-components";

export const Container = styled.div`
  background: white;
  border: 3px solid #bdbdbd;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 8px 10px;
  transition: 1s all;
  cursor: pointer;
`;

export const ContainerImage = styled.div`
  display: flex;
  align-self: center;
`;

export const ImageCard = styled.img`
  width: 137px;
`;

export const NameCard = styled.p`
  text-align: center;
  text-transform: uppercase;
  font-weight: 800;
  font-size: 20px;
`;

export const ContainerInfo = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 8px 80px;
`;

export const ContainerData = styled.div``;

export const TitleData = styled.p`
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
`;

export const Ability = styled.p`
  text-transform: capitalize;
  text-align: center;
`;

export const TextInfo = styled.p`
  text-align: center;
`;
