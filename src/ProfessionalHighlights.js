import React from 'react';

import Flexbox from './components/layout/Flexbox.js';
import { Section, Summary, Job, Heading } from './components/resume';

import './font.css';

const ProfessionalHighlights = () => {
  return (
    <>
      <Section>
        <Flexbox flexDirection="column">
          <Summary>
            Kevin spent the past 2 years leading product development at Conduce
            Inc., developing a cloud deployed data visualization SaaS. He
            diligently focused on empowering users and delivering value, while
            managing a highly effective product development team.
          </Summary>
        </Flexbox>
      </Section>
      <Flexbox height="1em" />
      <Section>
        <Heading>Professional</Heading>
        <Job
          title="Co-founder"
          company="Grasp Data Inc."
          timespan={['Oct 2019', 'Mar 2020']}
        >
          <li>
            Excited new customers by delivering technology demonstrator to
            public website after only three weeks of development.
          </li>
          <li>
            Contributed discriminating capability by inventing technology to
            build warehouse digital twins without CAD/CAM diagrams.
          </li>
          <li>
            Established product plan to empower logistics professionals to
            understand operational behaviors.
          </li>
        </Job>
      </Section>
      <Section>
        <React.Fragment>
          <Job
            title="Director of Product Development"
            company="Conduce Inc."
            timespan={['Sep 2017', 'Oct 2019']}
          >
            <li>
              Doubled developer productivity by streamlining software process
              and catching bugs before they were merged into baseline.
            </li>
            <li>
              Accelerated team velocity, even while reducing resources by half.
            </li>
            <li>
              Increased transparency into product development by publishing a
              roadmap and generating data-driven reports for investors.
            </li>
          </Job>
          <Job
            title="Senior Software Engineer"
            company="Conduce Inc."
            timespan={['Dec 2014', 'Sep 2017']}
          >
            <li>
              Delivered solution from critical customer, exploiting and
              extending the software platform to exceed expectations.
            </li>
            <li>
              Effected positive change by highlighting opportunities to improve
              communication and work more effectively as a team.
            </li>
            <li>
              Pivoted product new direction to deliver customer value when
              technology partner failed to deliver.
            </li>
          </Job>
        </React.Fragment>
      </Section>
      <Section>
        <Job
          title="Software Engineer"
          company="Boeing"
          timespan={['2004', '2014']}
        >
          <li>
            Reduced support costs by developing a reliable self-service software
            solution for tactical radio simulation that eliminated need for
            dedicated engineering staff.
          </li>
          <li>
            Reduced complexity and recurring cost by replacing custom hardware
            solution with plug-and-play peripherals and software that runs on
            existing computing infrastructure.
          </li>
          <li>
            Exemplified the standard for how to facilitate and manage a
            distributed software development teams by following Agile software
            development principles and treating team members with care and
            respect.
          </li>
        </Job>
      </Section>
    </>
  );
};

export default ProfessionalHighlights;