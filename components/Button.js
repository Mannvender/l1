import { Button } from "rebass";
import styled from "styled-components";

const StyledButton = styled(Button)`
  font-family: inherit;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: ${(props) => props.theme.space[1]};
  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,
    rgba(45, 35, 66, 0.3) 0 7px 13px -3px,
    ${(props) => props.theme.colors.accent1} 0 -3px 0 inset;
  color: ${(props) => props.theme.colors.light};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  transition: box-shadow 0.15s, transform 0.15s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  will-change: box-shadow, transform;

  :focus {
    box-shadow: ${(props) => props.theme.colors.accent1} 0 0 0 1.5px inset,
      rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px,
      ${(props) => props.theme.colors.accent1} 0 -3px 0 inset;
  }
  :hover {
    box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px,
      rgba(45, 35, 66, 0.3) 0 7px 13px -3px,
      ${(props) => props.theme.colors.accent1} 0 -3px 0 inset;
    transform: translateY(-2px);
  }
  :active {
    box-shadow: ${(props) => props.theme.colors.accent1} 0 3px 7px inset;
    transform: translateY(2px);
  }
`;

export default StyledButton;
