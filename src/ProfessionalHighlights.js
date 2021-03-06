import React from 'react';

import Flexbox from './components/layout/Flexbox.js';
import { Section, Summary, Job, Heading, List } from './components/resume';

import './font.css';

const ProfessionalHighlights = () => {
  return (
    <>
      <Section>
        <Flexbox flexDirection="column">
          <Summary>
            Kevin spent the past 5 years lending expert guidance and skills to
            software teams by promoting Agile software best practices while
            focusing on empowering users and delivering value.
          </Summary>
        </Flexbox>
      </Section>
      <Flexbox height="1em" />
      <Section>
        <Heading>Professional</Heading>
        <Job
          title="Co-founder"
          company="Grasp Data Inc."
          timespan={['Oct 2019']}
        >
          <List>
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
          </List>
        </Job>
      </Section>
      <Section>
        <Job
          title="Chief Technology Officer"
          company="Curate"
          timespan={['June 2020', 'July 2020']}
        >
          <List>
            <li>
              Developed action plan to align company and ready software for
              growth by listening to team and following best practices.
            </li>
            <li>
              Incorporated input from sales and marketing teams in product
              planning and prioritization to unify and align teams.
            </li>
            <li>
              Utilized Clubhouse.io and implemented Kanban workflow to enable
              the software team to become self-directed, increase performance,
              and provide visibility into product priorities and execution.
            </li>
          </List>
        </Job>
      </Section>
      <Section>
        <Job
          title="Senior Software Engineer"
          company="Colaberry Inc. (Contracted to Bayer)"
          timespan={['Mar 2020', 'Jun 2020']}
        >
          <List>
            <li>
              Brought startup mentality and best practices to an enterprise
              software team, challenging the status quo to improve process and
              design.
            </li>
            <li>
              Started initiative to leverage in-house UI library reduce
              duplication and increase style consistency across apps.
            </li>
            <li>
              Fostered team cohesion and broke down trust barriers by focusing
              on communication while working remotely during pandemic
              conditions.
            </li>
          </List>
        </Job>
      </Section>
      <Section>
        <Job
          title="Director of Product Development"
          company="Conduce Inc."
          timespan={['Sep 2017', 'Oct 2019']}
        >
          <List>
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
          </List>
        </Job>
        <Job
          title="Senior Software Engineer"
          company="Conduce Inc."
          timespan={['Dec 2014', 'Sep 2017']}
        >
          <List>
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
          </List>
        </Job>
      </Section>
      <Section>
        <Job
          title="Software Engineer"
          company="Boeing"
          timespan={['2004', '2014']}
        >
          <List>
            <li>
              Reduced support costs by developing a reliable self-service
              software solution for tactical radio simulation that eliminated
              need for dedicated engineering staff.
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
          </List>
        </Job>
      </Section>
    </>
  );
};

export default ProfessionalHighlights;
