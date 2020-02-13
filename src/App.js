import React, { useState } from 'react';

import Flexbox from './components/layout/Flexbox.js';
import Button from './components/parts/Button.js';

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
  ScreenOnly,
  Link,
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
        {showTechnicalResume ? (
          <Body>
            Kevin spent the past two years building web apps with React and
            Redux. He most recently developed a technology demonstrator for a
            software startup.{' '}
            <Link href="https://grasp-data.com/vantage/tech-demo">
              Check it out!
            </Link>
          </Body>
        ) : (
          <Body>
            Kevin spent the past 2 years leading product development at Conduce,
            a cloud deployed data visualization SaaS. He diligently focused on
            empowering users and delivering value, while managing a highly
            effective product development team.
          </Body>
        )}
      </Section>
      <Flexbox height="1em" />
      <Section>
        <Company name="Grasp Data Inc." timespan={['2019']} />
        {showTechnicalResume ? (
          <Job title="Technical co-founder" timespan={['2019']}>
            <ul>
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
                Developed a performant animated warehouse visualization,
                rendered in the DOM with thousands of elements.
              </li>
              <li>
                Developed a warehouse visualization technology demonstrator with
                spatial and temporal navigation.
              </li>
            </ul>
          </Job>
        ) : (
          <Job title="Co-founder" timespan={['2019']}>
            Kevin is the technical co-founder of Grasp Data Inc. His
            responsibilities are both strategic and technical. He sets the
            product vision for the company and has built prototypes and
            demonstrators to help communicate that vision to potential clients.
            He also works with the other founders to build and maintain the
            business plan, sales pitch, and budget.
          </Job>
        )}
      </Section>
      <Section>
        <Company name="Conduce" timespan={['2014', '2019']} />
        {showTechnicalResume ? (
          <React.Fragment>
            <Job
              title="Director of Product Development"
              timespan={['Sep 2017', 'Oct 2019']}
            >
              <ul>
                <li>
                  Developed the first product roadmap and focused company on its
                  execution.
                </li>
                <li>
                  Worked with sales and delivery to help them understand how
                  leverage product features when engaging customers.
                </li>
                <li>
                  Reduced product backlog from over 1000 stories to under 100,
                  focusing the team on adding value for the customer.
                </li>
                <li>
                  Managed software development team, reducing headcount,
                  increasing team velocity, and improving quality.
                </li>
                <li>
                  Worked with offshore QA team to improve testing practices and
                  raise quality standards, and build a more cohesive team.
                </li>
                <li>Lead UX/UI designer.</li>
                <li>Developed component library in React/Redux.</li>
              </ul>
            </Job>
            <Job
              title="Senior Software Engineer"
              timespan={['Jan 2014', 'Sep 2017']}
            >
              <ul>
                <li>
                  Worked with customer to design solutions for their use cases.
                </li>
                <li>
                  Guided customer to understand relationships between disparate
                  data sources.
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
                  Developed tools to enable data analysts, system integrators
                  and business development professionals to build custom
                  visualizations without engineering support.
                </li>
                <li>
                  Planned transition of platform software to a cloud-based
                  software-as-a-service microservice architecture.
                </li>
                <li>
                  Encouraged team to focus on continuous integration and
                  automated testing.
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
              </ul>
            </Job>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Job
              title="Director of Product Development"
              timespan={['Sep 2017', 'Oct 2019']}
              startDate="Sep 2017"
              endData="Oct 2019"
            >
              Kevin was responsible for development and maintenance of the
              Conduce SAAS platform. He owned the product roadmap and backlog.
              Kevin led the company out of deep technical debt. He increased
              velocity and improved quality, all while reducing the teams burn
              rate. He also started delivering immediate value to users. Kevin
              also functioned as the facilitator of the software development
              team and principal user interface designer. He wrote code in
              JavaScript, Python, and Go.
            </Job>
            <Job
              title="Senior Software Engineer"
              timespan={['Dec 2014', 'Sep 2017']}
            >
              Kevin served on both the delivery and platform teams. He developed
              platform features and exploited those features to build solutions
              for customers to help them reach desired business outcomes. He met
              regularly with customers to gather requirements and demonstrate
              product capabilities. Kevin developed an application independent
              from the platform, and integrated with it, to deliver on an
              important customer requirement. He also developed a time control
              feature that was later incorporated into the software product. In
              addition, Kevin worked with company leadership bring about
              positive change in product development practices.
            </Job>
          </React.Fragment>
        )}
      </Section>
      <Section>
        <Company name="Boeing" timespan={['2004', '2014']} />
        {showTechnicalResume ? (
          <React.Fragment>
            <Job
              title="Virtual Communication Environment"
              timespan={['2012', '2013']}
            >
              <ul>
                <li>
                  Served as project lead on a three person distributed team to
                  develop advanced voice capabilities.
                </li>
                <li>
                  Executed both the Product Owner and Scrum Master roles,
                  developing the roadmap, grooming the backlog and facilitating
                  meetings.
                </li>
                <li>
                  Implemented finite impulse response filter algorithms for use
                  in sound synthesis applications.
                </li>
                <li>
                  Designed solution for actuating synthetic voice transmissions
                  on simulated tactical radios.
                </li>
                <li>
                  Designed solution integrating commercial CobraNet audio
                  adapters with custom software on intel-based servers for
                  scalable multi-user multi-endpoint voice communications.
                </li>
                <li>
                  Led the design, implementation and deployment of 3 major
                  capabilities, sound simulation, synthetic voice radio
                  transmissions and Virtual Communication Environment Server.
                </li>
              </ul>
            </Job>
            <Job
              flexDirection="column"
              title="Voice Communication System"
              timespan={['2009', '2014']}
            >
              <div>
                <ul>
                  <li>
                    Developed proposal and pitched management to obtain funding.
                  </li>
                  <li>
                    Served as project lead on a three to five person distributed
                    team to develop a tactical radio simulation for modeling and
                    simulation.
                  </li>
                  <li>
                    Executed both the Product Owner and Scrum Master roles,
                    developing the roadmap, grooming the backlog, and
                    facilitating meetings.
                  </li>
                  <li>
                    Made unit testing, continuous integration, and automation
                    team priorities.
                  </li>
                  <li>
                    Developed minimum viable product to satisfy stakeholders and
                    save $600,000 in capital investments.
                  </li>
                  <li>
                    Published procedures, guidelines and design information on
                    internal wiki.
                  </li>
                  <li>
                    Deployed product to targeted users in staged released before
                    retiring legacy communications system.
                  </li>
                  <li>
                    Developed compatibility API for interfacing with external
                    flight simulators.
                  </li>
                  <li>Published API documentation on internal web server.</li>
                  <li>
                    Designed VCS API a communication protocol that transformed a
                    statically compiled class hierarchy into a distributed
                    reconfigurable collection of software modules.
                  </li>
                  <li>Received patent for novel system design.</li>
                  <li>
                    Developed a proprietary voice activation algorithm to
                    account for variations in hardware sensitivity and ambient
                    environment noise.
                  </li>
                  <li>
                    Made VCS available to Boeing enterprise through
                    sourceforge-like interface.
                  </li>
                  <li>
                    Used internal social media site to keep users informed on
                    important updates.
                  </li>
                  <li>Adopted by 20 teams enterprise wide.</li>
                  <li>
                    Virtually eliminated need for dedicated support staff,
                    increasing overall reliability, freeing resources to focus
                    on other priorities.
                  </li>
                </ul>
              </div>
            </Job>
            <Job title="Audio Configuration Server" timespan={['2005', '2010']}>
              <ul>
                <li>
                  Developed embedded server to control commercial off the shelf
                  tactical radio simulation equipment though documented,
                  undocumented and backdoor interfaces.
                </li>
                <li>
                  Realized 10x reduction in support required to configure and
                  maintain COTS system.
                </li>
                <li>Prototyped in Bash and implemented in C++.</li>
                <li>
                  Developed solution for use in flight simulators and adapted
                  solution for use in large scale wargaming environments.
                </li>
              </ul>
            </Job>
            <Job
              title="ASTi Telestra System Integrator"
              timespan={['2004', '2010']}
            >
              <ul>
                <li>
                  Designed and integrated tactical radio simulation solutions
                  for flight simulators at enterprise and government sites.
                </li>
                <li>
                  Designed and fabricated cables for analog audio systems.
                </li>
                <li>
                  Tested commercial products and interfaced with vendor to
                  resolve issues.
                </li>
              </ul>
            </Job>
            <Job
              title="Tactical voice communications support"
              timespan={['2004', '2014']}
            >
              <ul>
                <li>
                  Worked with users to design comm plans for broadcast radio
                  networks in operator-in-the-loop simulations.
                </li>
                <li>
                  Tested communications system configuration with users prior to
                  putting solutions into production.
                </li>
                <li>
                  Provided live technical support for hardware and software
                  installations at several sites nationwide.
                </li>
                <li>
                  Maintained a limited support role as responsibilities grew to
                  maintain close relationship with users.
                </li>
              </ul>
            </Job>
          </React.Fragment>
        ) : (
          <Job title="Software Engineer" timespan={['2004', '2014']}>
            Kevin spearheaded development of Voice Communication System, a
            peer-to-peer radio simulation and voice communications software
            suite. He led the development team and was responsible for overall
            product design. Kevin and his team proved value in a matter of
            months, offsetting significant installation costs by replacing a
            commercial-off-the-shelf system. Kevin went on to deploy the
            solution in several facilities, reducing setup and maintenance costs
            for simulation events.
          </Job>
        )}
      </Section>
      <ScreenOnly>
        <Flexbox height="1em" />
        <Section>
          <Button
            id="kvl-resume-tech-toggle"
            onClick={() => setShowTechnicalResume(!showTechnicalResume)}
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
          degree="Bachelor of Computer Engineering"
          year="2004"
        />
      </Section>
    </Document>
  );
};

export default App;
