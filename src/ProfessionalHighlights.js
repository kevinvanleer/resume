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
            Kevin leads software teams, lending expert guidance and technical skills to software teams by promoting Agile software
            best practices. Kevin also provides vision and enables execution of software products, focusing on empowering users
            and delivering value to customers.
          </Summary>
        </Flexbox>
      </Section>
      <Flexbox height="1em" />
      <Section>
        <Heading>Professional</Heading>
      </Section>
      <Section>
        <Job title="Independent Software Contractor" timespan={['Oct 2021']}>
          <p>Kevin is developing a full-stack web and mobile investment application for a venture capital firm.</p>
          <p>Kevin integrated a receipt printer and barcode scanner into an Android point-of-sale kiosk.</p>
          <p>
            Kevin consulted with a software agency. His primary responsibility was to help develop leadership on software teams.
            Demonstrate how to organize and manage product backlogs and increase team velocity and software quality. Kevin also
            participated in software development. He designed and implemented full-stack solo projects in the cryptocurrency space
            and provided design expertise on a geospatial mobile application developed in React Native.
          </p>
        </Job>
      </Section>
      <Section>
        <Job title="Product Manager" company="Boeing" timespan={['Oct 2020', 'Oct 2021']}>
          <p>
            Kevin was brought into the middle of the F/A-18 Mission Systems SAFe transformation as the Product Manager of the
            Airborne Electronic Attack (Growler) Agile Release Train (ART). In that role he managed priorities for seven software
            teams of 70 engineers. He also worked with Navy counterparts to ensure that the most important work was being executed
            and that there was sufficient budget to complete the work. Kevin developed processes and workflows for prioritization,
            assigning work to teams, and transparently sharing plans with customers. These practices were adopted by other ARTs.
          </p>
          <p>
            Kevin was engaged by a Product Owner to assist with a project that was over budget and behind schedule. Kevin worked
            with the Product Owner to understand the technical issues that were preventing progress on updating a third-party
            library used by the F/A-18 Advanced Mission Computer. He facilitated a meeting between subject matter experts, and it
            was concluded that the current upgrade could be skipped. He also, collaborated with the library vendor to design
            library updates that would eliminate the technical issues that had hindered past integrations, ensuring that future
            integrations would be technically feasible. These efforts unblocked software development and enabled the project to be
            completed. Features were delivered without serious impact to customer schedule while mitigating the budget overrun.
          </p>
        </Job>
      </Section>
      <Section>
        <Job title="Co-founder" company="Grasp Data Inc." timespan={['Oct 2019', 'Dec 2021']}>
          <List>
            <li>
              Excited new customers by delivering technology demonstrator to public website after only three weeks of development.
            </li>
            <li>
              Contributed discriminating capability by inventing technology to build warehouse digital twins without CAD/CAM
              diagrams.
            </li>
            <li>Established product plan to empower logistics professionals to understand operational behaviors.</li>
          </List>
        </Job>
      </Section>
      <Section>
        <Job title="Chief Technology Officer" company="Curate" timespan={['June 2020', 'July 2020']}>
          <List>
            <li>
              Developed action plan to align company and ready software for growth by listening to team and following best
              practices.
            </li>
            <li>
              Incorporated input from sales and marketing teams in product planning and prioritization to unify and align teams.
            </li>
            <li>
              Utilized Clubhouse.io and implemented Kanban workflow to enable the software team to become self-directed, increase
              performance, and provide visibility into product priorities and execution.
            </li>
          </List>
        </Job>
      </Section>
      <Section>
        <Job title="Senior Software Engineer" company="Colaberry Inc. (Contracted to Bayer)" timespan={['Mar 2020', 'Jun 2020']}>
          <List>
            <li>
              Brought startup mentality and best practices to an enterprise software team, challenging the status quo to improve
              process and design.
            </li>
            <li>
              Started initiative to leverage in-house UI library reduce duplication and increase style consistency across apps.
            </li>
            <li>
              Fostered team cohesion and broke down trust barriers by focusing on communication while working remotely during
              pandemic conditions.
            </li>
          </List>
        </Job>
      </Section>
      <Section>
        <Job title="Director of Product Development" company="Conduce Inc." timespan={['Sep 2017', 'Oct 2019']}>
          <List>
            <li>
              Doubled developer productivity by streamlining software process and catching bugs before they were merged into
              baseline.
            </li>
            <li>Accelerated team velocity, even while reducing resources by half.</li>
            <li>
              Increased transparency into product development by publishing a roadmap and generating data-driven reports for
              investors.
            </li>
          </List>
        </Job>
        <Job title="Senior Software Engineer" company="Conduce Inc." timespan={['Dec 2014', 'Sep 2017']}>
          <List>
            <li>
              Delivered solution from critical customer, exploiting and extending the software platform to exceed expectations.
            </li>
            <li>
              Effected positive change by highlighting opportunities to improve communication and work more effectively as a team.
            </li>
            <li>Pivoted product new direction to deliver customer value when technology partner failed to deliver.</li>
          </List>
        </Job>
      </Section>
      <Section>
        <Job title="Software Engineer" company="Boeing" timespan={['2004', '2014']}>
          <List>
            <li>
              Reduced support costs by developing a reliable self-service software solution for tactical radio simulation that
              eliminated need for dedicated engineering staff.
            </li>
            <li>
              Reduced complexity and recurring cost by replacing custom hardware solution with plug-and-play peripherals and
              software that runs on existing computing infrastructure.
            </li>
            <li>
              Exemplified the standard for how to facilitate and manage a distributed software development teams by following
              Agile software development principles and treating team members with care and respect.
            </li>
          </List>
        </Job>
      </Section>
    </>
  );
};

export default ProfessionalHighlights;
