import styled from "styled-components";
import { Theme } from "./global";

export const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }: { theme: Theme }) => theme.colors.primary};
`;