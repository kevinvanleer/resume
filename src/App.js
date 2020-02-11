import React from 'react';

import Flexbox from './components/layout/Flexbox.js';
import {
  Document,
  Title,
  Section,
  Body,
  Headline,
  Company,
  Job,
  Degree,
  Heading,
} from './components/resume';

import * as text from './text.json';
import './font.css';

const App = () => {
  return (
    <Document>
      <Title
        name={text.title}
        email="kevin.vanleer@gmail.com"
        phone="314-323-2294"
      />
      <Headline>{text.headline}</Headline>
      <Section>
        <Body>
          Kevin spent the past 2 years leading product development at Conduce, a
          cloud deployed data visualization SaaS. He diligently focused on
          empowering users, enabling them to build visualizations and see their
          business operations through data, as it happened in time and space,
          recognize patterns, and perform analysis in ways they never thought
          possible.
        </Body>
      </Section>
      <Flexbox height="1em" />
      <Section>
        <Company name="Grasp Data Inc." timespan={['2019']} />
        <Job title="Co-founder" timespan={['2019']}>
          Kevin is the technical co-founder of Grasp Data Inc. His
          responsibilities are both strategic and technical. He sets the product
          vision for the company and has executed the development of prototypes
          and demonstrators to help communicate that vision to potential
          clients. He also works with the other founders to build and maintain
          the business plan, sales pitch, and budget.
        </Job>
      </Section>
      <Section>
        <Company name="Conduce" timespan={['2014', '2019']} />
        <Job
          title="Director of Product Development"
          timespan={['Sep 2017', 'Oct 2019']}
          startDate="Sep 2017"
          endData="Oct 2019"
        >
          Kevin was responsible for development and maintenance of the Conduce
          SAAS platform. He owned the product roadmap and backlog. Kevin led the
          company out of deep technical debt. He increased velocity and improved
          quality, all while reducing the teams burn rate. He also started
          delivering immediate value to users. Kevin also functioned as the
          facilitator of the software development team and primary user
          interface designer. He wrote code in JavaScript, Python, and Go.
        </Job>
        <Job
          title="Senior Software Engineer"
          timespan={['Dec 2014', 'Sep 2017']}
        >
          Kevin served on both the delivery and platform teams. He developed
          platform features and exploited those features to build solutions for
          customers to help them reach desired business outcomes. He met
          regularly with customers to gather requirements and demonstrate
          product capabilities. Kevin developed an application independent from
          the platform, and integrated with it, to deliver on an important
          customer requirement. He also developed a time control feature that
          was later incorporated into the software product. In addition, Kevin
          worked with company leadership bring about positive change in product
          development practices.
        </Job>
      </Section>
      <Section>
        <Company name="Boeing" timespan={['2004', '2014']} />
        <Job title="Software Engineer" timespan={['2004', '2014']}>
          Kevin spearheaded development of Voice Communication System, a
          peer-to-peer radio simulation and voice communications software suite.
          He led the development team and was responsible for overall product
          design. Kevin and his team proved value in a matter of months,
          offsetting significant installation costs by replacing a
          commercial-off-the-shelf system. Kevin went on to deploy the solution
          in several facilities, reducing setup and maintenance costs for
          simulation events.
        </Job>
      </Section>
      <Section>
        <Heading>Volunteer</Heading>
        <Job title="Soccer coach" timespan={['2018']}>
          Work with a great group of 2nd and 3rd grade girls. Teaching them
          leadership and the value of teamwork and fair play.
        </Job>
        <Job title="FIRST LEGO League coach" timespan={['2015', '2016']}>
          Facilitated a team of 10 hardworking 5th (and then 6th) graders in
          their pursuit to master the FIRST LEGO League challenge.
        </Job>
      </Section>
      <Section>
        <Heading>Education</Heading>
        <Degree
          school="Missouri University of Science and Technology"
          degree="Bachelor of Computer Engineering"
          year="2004"
        />
      </Section>
    </Document>
  );
};

export default App;
