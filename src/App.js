import React, { useState } from 'react';

import Flexbox from './components/layout/Flexbox.js';
import Button from './components/parts/Button.js';

import {
  Document,
  Title,
  Section,
  Headline,
  Summary,
  Job,
  Degree,
  Heading,
  ScreenOnly,
  Link,
  List,
} from './components/resume';

import * as text from './text.json';
import './font.css';

const App = () => {
  const [showTechnicalResume, setShowTechnicalResume] = useState(false);

  return (
    <Document>
      <Title
        name={text.title}
        email="kevin.vanleer@gmail.com"
        phone="314-323-2294"
      />
      <Headline>{text.headline}</Headline>
      <Section>
        <Flexbox flexDirection="column">
          {showTechnicalResume ? (
            <Summary>
              Kevin spent the past two years building web apps with React and
              Redux. He most recently developed a technology demonstrator for a
              software startup.{' '}
              <ScreenOnly>
                <Link href="https://grasp-data.com/vantage/tech-demo">
                  Check it out!
                </Link>
              </ScreenOnly>
            </Summary>
          ) : (
            <Summary>
              Kevin spent the past 2 years leading product development at
              Conduce Inc., developing a cloud deployed data visualization SaaS.
              He diligently focused on empowering users and delivering value,
              while managing a highly effective product development team.
            </Summary>
          )}
        </Flexbox>
      </Section>
      <Flexbox height="1em" />
      <Section>
        <Heading>Professional</Heading>
        {showTechnicalResume ? (
          <Job
            title="Technical co-founder"
            company="Grasp Data Inc."
            timespan={['2019']}
          >
            <List>
              <li>Configured CI/CD with GitLab and GKE</li>
              <li>
                Developed algorithm to generate warehouse racking layout from
                location names.
              </li>
              <li>
                Developed UI to help user translate custom non-standard
                timestamp formatting.
              </li>
              <li>
                Integrated Google Tag Manager and Google Analytics with company
                website.
              </li>
              <li>
                Integrated 3rd-party tools like MailChimp and Unbounce to
                maintain focus on discriminating features.
              </li>
              <li>Developed front-end software using React/Redux</li>
              <li>
                Integrated Storybook to assist with development and testing of
                custom React components
              </li>
              <li>
                Developed an animated warehouse visualization, rendered in the
                DOM with thousands of elements.
              </li>
              <li>
                Developed a warehouse visualization technology demonstrator with
                spatial and temporal navigation.
              </li>
            </List>
          </Job>
        ) : (
          <Job title="CTO" company="Grasp Data Inc." timespan={['2019']}>
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
        )}
      </Section>
      <Section>
        {showTechnicalResume ? (
          <React.Fragment>
            <Job
              title="Director of Product Development"
              company="Conduce Inc."
              timespan={['Sep 2017', 'Oct 2019']}
            >
              <List>
                <li>
                  Improved testing practices and raise quality standards by
                  integrating offshore QA team and development team.
                </li>
                <li>
                  Fostered more productive sales engagements by working with
                  sales and delivery to help them understand how leverage
                  product features when engaging customers.
                </li>
                <li>
                  Focused the team on adding value for the customer by reducing
                  product backlog from over 1000 stories to under 100,
                </li>
                <li>
                  Improved customer engagement by designing beautiful and usable
                  workflows and interfaces.
                </li>
                <li>
                  Enabled team to develop consistent user interfaces by building
                  a component library in React/Redux.
                </li>
              </List>
            </Job>
            <Job
              title="Senior Software Engineer"
              company="Conduce Inc."
              timespan={['Jan 2014', 'Sep 2017']}
            >
              <List>
                <li>
                  Worked with customer to design solutions for their use cases.
                </li>
                <li>
                  Designed and developed data ingest pipeline for critical
                  customer.
                </li>
                <li>
                  Designed and developed spatio-temporal visualizations for
                  critical customer.
                </li>
                <li>
                  Enhanced and stabilized platform software to ensure stability
                  for near-term customer deliverables.
                </li>
                <li>
                  Prototyped visual elements and proposed new ways of exploiting
                  data visualization help users gain insights into their
                  operations.
                </li>
                <li>
                  Prototyped a simulation to generate realistic shopper traffic
                  in a grocery store.
                </li>
                <li>Developed microservices in D, Clojure, and Python.</li>
                <li>Developed prototypes in C++, Python, and JavaScript.</li>
                <li>
                  Developed front-end software in JavaScript using jQuery and
                  React.
                </li>
              </List>
            </Job>
          </React.Fragment>
        ) : (
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
                Accelerated team velocity, even while reducing resources by
                half.
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
                Effected positive change by highlighting opportunities to
                improve communication and work more effectively as a team.
              </li>
              <li>
                Pivoted product new direction to deliver customer value when
                technology partner failed to deliver.
              </li>
            </Job>
          </React.Fragment>
        )}
      </Section>
      <Section>
        {showTechnicalResume ? (
          <React.Fragment>
            <Job
              flexDirection="column"
              company="Boeing"
              title="Software Engineer"
              timespan={['2004', '2014']}
            >
              <List>
                <li>
                  Served as project lead on a three to five person distributed
                  team to develop a tactical radio simulation for modeling and
                  simulation.
                </li>
                <li>
                  Executed both the Product Owner and Scrum Master roles,
                  developing the roadmap, grooming the backlog, and facilitating
                  meetings.
                </li>
                <li>
                  Made unit testing, continuous integration, and automation team
                  priorities.
                </li>
                <li>
                  Developed a proprietary voice activation algorithm to account
                  for variations in hardware sensitivity and ambient environment
                  noise.
                </li>
                <li>
                  Virtually eliminated need for dedicated support staff,
                  increasing overall reliability, freeing resources to focus on
                  other priorities.
                </li>
              </List>
            </Job>
          </React.Fragment>
        ) : (
          <Job
            title="Software Engineer"
            company="Boeing"
            timespan={['2004', '2014']}
          >
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
          </Job>
        )}
      </Section>
      <ScreenOnly>
        <Flexbox height="1em" />
        <Section>
          <Button
            id="kvl-resume-tech-toggle"
            onClick={() => {
              setShowTechnicalResume(!showTechnicalResume);
              window.scrollTo(0, 0);
            }}
          >
            {showTechnicalResume
              ? 'Looks great! Do you have any leadership experience?'
              : 'Sure, all this leadership stuff is great, but what about your technical chops?'}
          </Button>
        </Section>
        <Flexbox height="1em" />
      </ScreenOnly>
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
          degree="Bachelor of Science: Computer Engineering"
          year="2004"
        />
      </Section>
      <ScreenOnly>
        <Flexbox height="2em" />
      </ScreenOnly>
    </Document>
  );
};

export default App;
