import React from 'react';
import styled from 'styled-components';

import { useMediaQuery } from 'react-responsive';

import { get } from 'lodash';

import Flexbox from '../layout/Flexbox.js';
import parts_Text from '../parts/Text.js';

export const centerJustify = true;

export const forestGreen = '#2C5F2D';
export const mossGreen = '#97BC62FF';
export const electricBlueLemonade = '#0063b2ff';
export const aquamarine = '#9cc3d5ff';
export const black = '#101820ff';
export const blazingYellow = '#fee715ff';
export const turkishSea = '#195190';
export const silver = '#a2a2a1';
export const themeColor1 = turkishSea;
export const themeColor2 = silver;

export const textColor = '#cecece';
export const titleBackground = themeColor2;
export const titleColor = themeColor1;
export const headlineBackground = themeColor1;
export const headlineColor = themeColor2;
export const backgroundColor = '#2b2f36';
export const leftMargin = '34pt';
export const rightMargin = leftMargin;
export const topMargin = '0px';

export const Text = styled(parts_Text)`
  font-family: 'Cairo', sans-serif;
  font-size: 14pt;
  @media print {
    font-size: 12pt;
    color: black;
  }
  }
`;

Text.defaultProps = { paragraph: true };

export const TitleSection = styled(Flexbox)`
  padding-left: ${leftMargin};
  padding-right ${rightMargin};
  @media print {
    break-inside: avoid;
    page-break-inside: avoid;
    color: black;
    background-color: white;
  }
  max-width: 1080px;
  width: calc(100% - ${leftMargin} - ${rightMargin});
`;

TitleSection.defaultProps = {
  flexDirection: 'column',
};

export const Section = styled(Flexbox)`
  padding-left: ${leftMargin};
  padding-right ${rightMargin};
  @media print {
    break-inside: avoid;
    page-break-inside: avoid;
    display: block;
  }
  max-width: 1080px;
  width: calc(100% - ${leftMargin} - ${rightMargin});
`;

Section.defaultProps = {
  flexDirection: 'column',
};

export const Link = styled.a`
  color: ${props => props.color};
  ${({ monochrome, color, theme }) =>
    !monochrome &&
    `
  &:link {
  color: ${color};
  }
  &:visited {
  color: ${theme.colors.primary.normal.background};
  }
  &:hover {
  color: ${theme.colors.primary.light.background};
  }
  &:active {
  color: ${theme.colors.primary.dark.background};
  }
  `};
`;
Link.defaultProps = { color: textColor };

export const Heading = styled(Text)`
  font-size: 24pt;
  @media print {
    font-size: 20pt;
  }
`;
export const Chronology = styled(Text)`
  font-style: italic;
`;
export const JobTitle = styled(Text)`
  font-size: 18pt;
  @media print {
    font-size: 16pt;
  }
`;
export const Body = styled(Text)`
  line-height: 17pt;
`;
export const Institution = styled(Text)`
  font-size: 18pt;
  @media print {
    font-size: 16pt;
  }
`;
export const Document = styled(Flexbox)`
  flex-direction: column;
  ${centerJustify && 'align-items: center;'}
  background-color: ${backgroundColor};
  color: ${textColor};
  @media print {
    a {
      color: #000;
    }
    color: #000;
    background-color: #fff;
    display: block;
  }
  font-family: 'Cairo', sans-serif;
  font-size: 14pt;
  width: 100%;
`;

export const ScreenOnly = styled.div`
  @media print {
    display: none;
  }
`;
export const Name = styled(Text)`
  && {
    font-size: 48pt;
  }
  font-family: 'Dosis', sans-serif;
`;
export const ResponsiveName = styled(Text)`
  font-size: 10vw;
  font-family: 'Dosis', sans-serif;
`;
export const Title = styled(({ className, name, email, phone }) => {
  const isBigScreen = useMediaQuery({ minWidth: 825 });
  const isPrint = useMediaQuery({ print: true });
  const wideLayout = isBigScreen || isPrint;
  return (
    <Flexbox className={className}>
      <Flexbox flexGrow={centerJustify ? 1 : 0} />
      <TitleSection flexDirection="row" className={className}>
        <Flexbox flexDirection="column" justifyContent="center">
          <Flexbox height="1em" />
          {wideLayout ? (
            <Name>{name}</Name>
          ) : (
            <ResponsiveName>{name}</ResponsiveName>
          )}
          {wideLayout ? (
            <Body height="1em">
              <Link monochrome color={titleColor} href={`mailto:${email}`}>
                {email}
              </Link>
            </Body>
          ) : (
            <Flexbox flexDirection="column">
              <Body height="1em" flexDirection="column">
                <Link monochrome color={titleColor} href={`mailto:${email}`}>
                  {email}
                </Link>
              </Body>
              <Flexbox height="5pt" />
              <Body>{phone}</Body>
              <Flexbox flexGrow={1} minHeight="16pt" />
              <Flexbox flexDirection="row">
                <Body>
                  <Link
                    monochrome
                    color={titleColor}
                    href="https://github.com/kevinvanleer"
                  >
                    GitHub
                  </Link>
                </Body>
                <Flexbox width="0.2ch" />
                <Body>|</Body>
                <Flexbox width="0.2ch" />
                <Body>
                  <Link
                    monochrome
                    color={titleColor}
                    href="https://www.linkedin.com/in/kevin-vanleer/"
                  >
                    LinkedIn
                  </Link>
                </Body>
              </Flexbox>
            </Flexbox>
          )}
          <Flexbox height="1em" />
        </Flexbox>
        <Flexbox flexGrow={1} />
        {wideLayout && (
          <Flexbox
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-end"
          >
            <Flexbox height="10pt" />
            <Body>283 Stonehenge Drive</Body>
            <Body>Washington, MO 63090</Body>
            <Flexbox height="5pt" />
            <Body>{phone}</Body>
            <Flexbox flexGrow={1} minHeight="16pt" />
            <Body>
              <Link
                monochrome
                color={titleColor}
                href="https://github.com/kevinvanleer"
              >
                https://github.com/kevinvanleer
              </Link>
            </Body>
            <Body>
              <Link
                monochrome
                color={titleColor}
                href="https://www.linkedin.com/in/kevin-vanleer/"
              >
                https://www.linkedin.com/in/kevin-vanleer/
              </Link>
            </Body>
            <Flexbox height="12pt" />
          </Flexbox>
        )}
      </TitleSection>
      <Flexbox flexGrow={1} />
    </Flexbox>
  );
})`
  color: ${titleColor};
  width: 100%;
  background-color: ${titleBackground};
  padding-top: ${topMargin};
  white-space: nowrap;
  @media print {
    background-color: white;
    color: black;
  }
`;
export const Headline = styled(({ className, children }) => (
  <Flexbox className={className}>
    <Flexbox flexGrow={centerJustify ? 1 : 0} />
    <Section flexDirection="row">{children}</Section>
    <Flexbox flexGrow={1} />
  </Flexbox>
))`
  color: ${headlineColor};
  width: 100%;
  margin-bottom: 1em;
  background-color: ${headlineBackground};
  align-items: center;
  padding-top: 1em;
  padding-bottom: 1em;
  font-size: 20pt;
  line-height: 22pt;
  @media print {
    background-color: white;
    color: black;
    font-size: 18pt;
    line-height: 18pt;
    margin-bottom: 0;
  }
  :hover {
    color: white;
    transition: color 0.5s;
  }
  transition: color 0.2s;
`;

export const Company = ({ name, timespan }) => (
  <Flexbox alignItems="baseline" flexWrap="wrap">
    <Heading>{name}</Heading>
    <Flexbox width="1em" />
    <Chronology>{`${get(timespan, [0])} - ${get(
      timespan,
      [1],
      'present'
    )}`}</Chronology>
  </Flexbox>
);
export const Job = styled(({ title, timespan, children, className }) => {
  return (
    <Flexbox flexDirection="column" className={className}>
      <Flexbox alignItems="baseline" flexDirection="row" flexWrap="wrap">
        <JobTitle>{title}</JobTitle>
        <Flexbox width="1em" />
        <Chronology>
          {`${get(timespan, [0])} - ${get(timespan, [1], 'present')}`}
        </Chronology>
      </Flexbox>
      <Body>{children}</Body>
      <Flexbox height="1em" />
    </Flexbox>
  );
})`
  :hover,
  :active {
    color: white;
    transition: color 0.5s;
  }
  transition: color 0.2s;
  @media print {
    break-inside: avoid;
    page-break-inside: avoid;
    color: black;
    background-color: white;
  }
`;
export const Degree = ({ school, degree, year }) => (
  <Flexbox flexDirection="column">
    <Institution>{school}</Institution>
    <Flexbox alignItems="baseline">
      <Body>{degree}</Body>
      <Flexbox width="1em" />
      <Chronology>{year}</Chronology>
    </Flexbox>
    <Flexbox height="1em" />
  </Flexbox>
);
