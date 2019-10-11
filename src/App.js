import React from 'react';
import styled from 'styled-components';
import Flexbox from 'flexbox-react';
import * as text from './text.json';
import './font.css';

const textColor = '#cecece';
const titleColor = '#082678';
const headlineColor = '#333';
const leftMargin = '34pt';
const rightMargin = leftMargin;
const topMargin = '0px';

const PageBreak = styled.div`
  @media print {
    page-break-after: always;
    break-after: page;
  }
`;
const Text = styled.div`
  display: flex;
  font-family: 'Cairo', sans-serif;
  font-size: 14pt;
  @media print {
    font-size: 12pt;
  }
`;
const Link = styled.a`
  color: ${textColor};
`;
const Title = styled(({ className, name, email, phone }) => {
  return (
    <Flexbox flexDirection="row" className={className}>
      <Flexbox flexDirection="column" justifyContent="center">
        {name}
        <Flexbox element={Body} height="1em">
          <Link href={`mailto:${email}`}>{email}</Link>
        </Flexbox>
      </Flexbox>
      <Flexbox flexGrow={1} />
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
          <Link href="https://github.com/kevinvanleer">
            https://github.com/kevinvanleer
          </Link>
        </Body>
        <Body>
          <Link href="https://www.linkedin.com/in/kevin-vanleer/">
            https://www.linkedin.com/in/kevin-vanleer/
          </Link>
        </Body>
        <Flexbox height="12pt" />
      </Flexbox>
    </Flexbox>
  );
})`
  background-color: ${titleColor};
  padding-left: ${leftMargin};
  padding-right ${rightMargin};
  padding-top: ${topMargin};
  font-size: 48pt;
  font-family: 'Dosis', sans-serif;
  white-space: nowrap;
  @media print {
    font-size: 42pt;
  }
`;
const Headline = styled(Text)`
  margin-bottom: 1em;
  background-color: ${headlineColor};
  min-height: 3em;
  align-items: center;
  padding-left: ${leftMargin};
  padding-right ${rightMargin};
  font-size: 20pt;
  line-height: 22pt;
  @media print {
    font-size: 18pt;
    line-height: 18pt;
    margin-bottom: 0;
  }
`;
const Heading = styled(Text)`
  font-size: 24pt;
  @media print {
    font-size: 20pt;
  }
`;
const Chronology = styled(Text)`
  font-style: italic;
`;
const JobTitle = styled(Text)`
  font-size: 18pt;
  @media print {
    font-size: 16pt;
  }
`;
const Body = styled(Text)`
  line-height: 17pt;
`;
const Institution = styled(Text)`
  font-size: 18pt;
  @media print {
    font-size: 16pt;
  }
`;
const Section = styled(Text)`
  margin-bottom: 1em;
  padding-left: ${leftMargin};
  padding-right ${rightMargin};
  @media print {
    break-inside: avoid;
  }
`;
const Document = styled.body`
  background-color: #222;
  color: ${textColor};
  height: 100%;
  min-height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  @page {
    size: letter portrait;
    margin: 34pt 0pt;
  }
  @media print {
    a {
      color: #000;
    }
    color: #000;
    background-color: #fff;
  }
`;

const Company = ({ name, timespan }) => (
  <Flexbox alignItems="baseline">
    <Heading>{name}</Heading>
    <Flexbox width="1em" />
    <Chronology>{timespan}</Chronology>
  </Flexbox>
);
const Job = ({ title, timespan, children }) => (
  <Flexbox flexDirection="column">
    <Flexbox alignItems="baseline">
      <JobTitle>{title}</JobTitle>
      <Flexbox width="1em" />
      <Chronology>{timespan}</Chronology>
    </Flexbox>
    <Body>{children}</Body>
    <Flexbox height="1em" />
  </Flexbox>
);
const Degree = ({ school, degree, year }) => (
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

function App() {
  return (
    <Document>
      <Title
        name={text.title}
        email="kevin.vanleer@gmail.com"
        phone="314-323-2294"
      />
      <Headline>{text.headline}</Headline>
      <Flexbox element={Section} flexDirection="column">
        <Body>
          Kevin spent the past 2 years leading the product development effort at
          Conduce, a cloud deployed data visualization SaaS. He diligently
          focused on empowering users, enabling them to build visualizations and
          see their business operations through data, as it happened in time and
          space, recognize patterns, and perform analysis in ways they never
          thought possible.
        </Body>
      </Flexbox>
      <Flexbox element={Section} flexDirection="column">
        <Company name="Conduce" timespan="2014-2019" />
        <Job
          title="Director of Product Development"
          timespan="Sep 2017 - Oct 2019"
        >
          Kevin was responsible for development and maintenance of the Conduce
          SAAS platform. He owned the product roadmap and backlog. Kevin led the
          company out of deep technical debt, improved quality, and delivery
          value to customers. Kevin also functioned as the facilitator of the
          software development team and lead user interface designer. He also
          wrote code in JavaScript, Python, and Go.
        </Job>
        <Job title="Senior Software Engineer" timespan="Dec 2014 - Sep 2017">
          Kevin served both as a delivery engineer and a platform engineer. He
          developed platform features and exploited those features to build
          solutions for customers to help them reach desired business outcomes.
          He met regularly with customers to gather requirements and demonstrate
          product capabilities. Kevin developed an application to deliver
          visualization features that were not part of the platform offering. He
          also developed a time control feature that was later incorporated into
          the softare platform. He also worked with company leadership bring
          about positive change in product development practices.
        </Job>
      </Flexbox>
      <Flexbox element={Section} flexDirection="column">
        <Company name="Boeing" timespan="2004-2014" />
        <Job title="Software Engineer" timespan="2004-2014">
          Kevin spearheaded development of Voice Communication System, a
          peer-to-peer radio simulation and voice communications platform. He
          led the development team and something overall product design. Kevin
          and his team proved value in a matter of months, offsetting
          significant installation costs by replacing a commercial-off-the-shelf
          system. Kevin went on to deploy the solution in several facilities,
          reducing setup and maintenance costs.
        </Job>
      </Flexbox>
      <Flexbox element={Section} flexDirection="column">
        <Heading>Volunteer</Heading>
        <Job title="Soccer coach" timespan="2018-present">
          Work with a great group of 2nd and 3rd grade girls. Teaching them the
          value of teamwork.
        </Job>
        <Job title="FIRST LEGO League coach" timespan="2015-2016">
          Facilitated a team of 10 hardworking 5th (and then 6th) graders in
          their pursuit to master the FIRST LEGO League challenge.
        </Job>
      </Flexbox>
      <Flexbox element={Section} flexDirection="column">
        <Heading>Education</Heading>
        <Degree
          school="Missouri University of Science and Technology"
          degree="Bachelor of Computer Engineering"
          year="2004"
        />
      </Flexbox>
    </Document>
  );
}

export default App;
