import styled from 'styled-components';

import Flexbox from '../layout/Flexbox';

const enumToSize = fontSize => {
  if (fontSize === 'title') {
    return '2rem';
  } else if (fontSize === 'heading') {
    return '1.5rem';
  } else if (fontSize === 'label') {
    return '1.25rem';
  } else if (fontSize === 'detail') {
    return '0.8rem';
  }
  return fontSize;
};

export const Text = styled(Flexbox).attrs(props => ({
  className: 'grasp-text',
  title: props.size ? props.children : null,
}))`
  font-family: ${props => props.theme.type.normal};
  ${({ indent }) => indent && `margin-left: 1ch;`};
  ${({ lineHeight }) => lineHeight && `line-height: ${lineHeight}`};
  ${({ onClick }) => onClick && `cursor: pointer`};
  ${({ paragraph }) => paragraph && `display: inline`};
  font-weight: normal;
  font-style: normal;

  &&& {
    ${({ disabled, theme }) =>
      disabled && `color: ${theme.colors.surface.disabled.font}; opacity: 1;`};
    ${({ noSelect }) => noSelect && `user-select: none; cursor: default;`};
    ${({ centerAlign }) =>
      centerAlign && `text-align: center;justify-content:center`};
    ${({ mono, theme }) => mono && `font-family: ${theme.type.mono};`};
    ${({ italic }) => italic && `font-style: italic;`};
    ${({ bold }) => bold && `font-weight: bold;`};
    ${({ decoration }) => decoration && `text-decoration: ${decoration};`};
    ${({ underline }) => underline && `text-decoration: underline;`};
    ${({ strikeThrough }) => strikeThrough && `text-decoration: line-through;`};
    ${({ ellipsis }) =>
      ellipsis &&
      `
    text-overflow: ellipsis;
    overflow: hidden;
    `};
    ${({ nowrap }) =>
      nowrap &&
      `
    display: block;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    `};
    ${({ nowrap, expandable }) =>
      nowrap &&
      expandable &&
      `
    &:hover,
    &:focus {
      text-overflow: unset;
      overflow: overlay;
      z-index: 10000;
      min-width: max-content;
      position: absolute;
    }`};
    ${({ size }) =>
      size &&
      `
    display: block;
    min-width: ${size};
    max-width: ${size};
    width: ${size};
    `};
    font-size: ${props => enumToSize(props.fontSize)};
  }
`;

Text.defaultProps = {
  inline: true,
};

export default Text;
