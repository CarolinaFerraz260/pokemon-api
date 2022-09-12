import styled from "styled-components";

export const AllContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 8px;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 20px 40px;
  grid-template-areas:
    ". . . "
    ". . . ";
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  margin: 45px 0;
`;

export const Button = styled.button`
  border: none;
  background: none;
  padding: 8px 10px;
  margin-right: 30px;
  cursor: pointer;
`;

export const IconImage = styled.img`
  width: 30px;
`;

export const TitleLoading = styled.p`
  font-size: 20px;
  margin-top: 60px;
  text-align: center;
`;

export const ContainerCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 40px;
`;
