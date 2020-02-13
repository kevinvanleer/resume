import styled from 'styled-components';
import Color from 'color';

import core_Clickable from '../core/Clickable';

const Button = styled(core_Clickable)`
  border: none;
  font: inherit;
  font-family: ${props => props.theme.type.face.normal};
  font-size: ${props => props.theme.type.height.button};
  cursor: pointer;
  outline: inherit;
  align-items: center;
  text-align: center;
  width: ${props => props.width};
  height: ${props => props.height};

  transition: background-color 0.1s;

  background-color: ${props => props.theme.colors.primary.normal.background};
  color: ${props => props.theme.colors.primary.normal.font};
  -webkit-text-fill-color: ${props => props.theme.colors.primary.normal.font};
  border-radius: ${props => props.theme.borders.radius};
  padding: 1em 2em;

  ${({ disabled, theme }) =>
    disabled
      ? `
    background-color: ${Color(theme.colors.primary.normal.background)
      .darken(0.5)
      .string()};
  `
      : `
  &:hover {
    background-color: ${theme.colors.primary.dark.background};
    color: ${theme.colors.primary.dark.font};
    -webkit-text-fill-color: ${theme.colors.primary.dark.font};
  }
  &:active {
    background-color: ${theme.colors.primary.light.background};
    color: ${theme.colors.primary.light.font};
    -webkit-text-fill-color: ${theme.colors.primary.light.font};
  }`};
`;

export default Button;
