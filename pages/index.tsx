import styled from "styled-components";
import { Theme } from "./_app";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }: { theme: Theme }) => theme.colors.primary};
`;

export default function Home() {
  return <Title>Home page</Title>;
}
