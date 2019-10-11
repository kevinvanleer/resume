import React from 'react';
import styled from 'styled-components';
import Flexbox from 'flexbox-react';
import SvgConduce from './SvgConduce.js';
import * as text from './text.json';
import './font.css';

const textColor = '#ccc';
const Text = styled.div`
  display: flex;
  font-family: 'Cairo', sans-serif;
  font-size: 14pt;
`;
const Title = styled(Text)`
  height: 3em;
  align-items: center;
  background-color: #082678;
  padding-left: 32px;
  font-size: 48pt;
  font-family: 'Dosis', sans-serif;
`;
const Headline = styled(Text)`
  margin-bottom: 1em;
  background-color: #333;
  min-height: 3em;
  align-items: center;
  padding-left: 32px;
  font-size: 20pt;
  line-height: 22pt;
`;
const Heading = styled(Text)`
  font-size: 24pt;
`;
const Chronology = styled(Text)`
  font-style: italic;
`;
const JobTitle = styled(Text)`
  font-size: 18pt;
`;
const Body = styled(Text)`
  line-height: 17pt;
`;
const Institution = styled(Text)`
  font-size: 18pt;
`;
const Section = styled(Text)`
  margin-bottom: 1em;
  padding-left: 32px;
`;
const Document = styled.body`
  background: #222;
  color: ${textColor};
  height: 100%;
  min-height: 100vh;
  width: 100vw;
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

/*<SvgConduce
            fill={textColor}
            stroke={textColor}
            height="80px"
            width="170px"
          />*/
function App() {
  return (
    <Document>
      <Flexbox flexDirection="column">
        <Title>{text.title}</Title>
        <Headline>{text.headline}</Headline>
        <Flexbox element={Section} flexDirection="column">
          <Body>
            Kevin spent the past 2 years leading the product development effort
            at Conduce, and cloud deployed data visualization SaaS. He
            diligently focused on empowering users, enabling them to build
            visualizations and see their data as it happened in time and space,
            recognize patterns, and perform analysis in ways that dashboards and
            analytics tools cannot. There I am the Director of Product
            Development where it is my mission to build and execute a product
            roadmap to develop a software platform that empowers users to see
            their business operations through data visualization in ways they
            never thought possible.
          </Body>
        </Flexbox>
        <Flexbox element={Section} flexDirection="column">
          <Company name="Conduce" timespan="2014-2019" />
          <Job
            title="Director of Product Development"
            timespan="Sep 2017 - Oct 2019"
          >
            Kevin was responsible for development and maintenance of the Conduce
            SAAS platform. He maintained the product roadmap and backlog. Kevin
            also functioned as the facilitator of the software development team
            and lead user interface designer.
          </Job>
          <Job title="Senior Software Engineer" timespan="Dec 2014 - Sep 2017">
            Kevin served both as a delivery engineer and a platform engineer. He
            developed platform features and exploited those features to build
            solutions for customers to help them reach desired business
            outcomes. He met regularly with customers to gather requirements and
            demonstrate product capabilities. Kevin developed an application to
            deliver features that were not part of the platform offering. He
            also developed a time control feature that was later incorporated
            into the softare platform.
          </Job>
        </Flexbox>
        <Flexbox element={Section} flexDirection="column">
          <Company name="Boeing" timespan="2004-2014" />
          <Job title="Software Engineer" timespan="2004-2014">
            Kevin spearheaded development of Voice Communication System, a
            peer-to-peer radio simulation and voice communications platform. He
            lead the development team and something overall product design.
            Kevin and his team proved value in a matter of months, offsetting
            significant installation costs by replacing a
            commercial-off-the-shelf system. Kevin went on to deploy the
            solution in several facilities, reducing setup and maintenance
            costs.
          </Job>
        </Flexbox>
        <Flexbox element={Section} flexDirection="column">
          <Heading>Volunteer</Heading>
          <Job title="Soccer coach" timespan="2018-present">
            Work with a great group of 2nd and 3rd grade girls. Teaching them
            the value of teamwork.
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
      </Flexbox>
    </Document>
  );
}

export default App;
