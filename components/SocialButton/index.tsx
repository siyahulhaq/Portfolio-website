import React, { useMemo } from "react";
import styled from "styled-components";
import { Theme } from "../../Styles/global";
import { GitHub, Instagram, Facebook, LinkedIn, Twitter } from "../Icons";

function SocialButton({
  type,
  link,
}: {
  type: "instagram" | "facebook" | "github" | "linkedin" | "twitter";
  link: string;
}) {
  const Icon = useMemo(() => {
    switch (type) {
      case "instagram":
        return Instagram;
      case "github":
        return GitHub;
      case "facebook":
        return Facebook;
      case "linkedin":
        return LinkedIn;
      case "twitter":
        return Twitter;
      default:
        return Instagram;
    }
  }, [type]);

  return (
    <SocialButtonContainer href={link}>
      <Icon />
    </SocialButtonContainer>
  );
}

export default SocialButton;

const SocialButtonContainer = styled.a`
  width: 3rem;
  height: 3rem;
  display: grid;
  place-items: center;
  border-radius: 50%;
  border: 1px solid #fff;
  margin: 1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${({ theme }: { theme: Theme }) => theme.colors.primary};
  }

  @media(max-width:768px) {
    margin: 0.5rem;
  }
`;
