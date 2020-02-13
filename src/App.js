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
            Redux. Most recently developed a technology demonstrator for a
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
                Integrated storybook to assist with development and testing of
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
            product vision for the company and has executed the development of
            prototypes and demonstrators to help communicate that vision to
            potential clients. He also works with the other founders to build
            and maintain the business plan, sales pitch, and budget.
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
                <li>Developed and maintained product roadmap.</li>
                <li>
                  Worked with sales and delivery to understand customer needs.
                </li>
                <li>
                  Broke down roadmap and stakeholder requests into workable
                  features.
                </li>
                <li>Maintained product backlog.</li>
                <li>Managed software development team.</li>
                <li>Executed software deployments.</li>
                <li>Led testing and quailty assurance.</li>
                <li>Lead UX/UI designer.</li>
                <li>Developed components library in React/Redux.</li>
              </ul>
            </Job>
            <Job title="Delivery Engineer" timespan={['Jan 2016', 'Sep 2017']}>
              <ul>
                <li>Technical lead for critical customer.</li>
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
                  Worked with sales and leadership to understand software
                  requirements and develop a plan to satisfy them.
                </li>
                <li>Developed in C++, Python and JavaScript.</li>
              </ul>
            </Job>
            <Job title="Core Engineer" timespan={['Feb 2015', 'Jan 2016']}>
              <ul>
                <li>
                  Planned transition of platform software to a cloud-based
                  software-as-a-service microservice architecture.
                </li>
                <li>Developed microservices in D, Clojure and Python.</li>
                <li>
                  Encouraged team to focus on continuous integration and
                  automated testing.
                </li>
                <li>Developed front-end code using React.</li>
              </ul>
            </Job>
            <Job title="Delivery Engineer" timespan={['Dec 2014', 'Feb 2015']}>
              <ul>
                <li>
                  Worked on a team, responsively and iteratively developing
                  custom integrations of proprietary platform software with
                  customer data to build interactive visualizations.
                </li>
                <li>Developed in C++, Python and JavaScript.</li>
                <li>
                  Prototyped visual elements and proposed new ways of exploiting
                  data visualization help users gain insights.
                </li>
                <li>
                  Prototyped a simulation to generate realistic shopper traffic
                  in a grocery store.
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
              title="Alliance Simulation Framework"
              timespan={['2014', '2014']}
            >
              <ul>
                <li>
                  Developed and executed short term roadmap for prototyping new
                  simulation concepts.
                </li>
                <li>
                  Prototyped new simulation concepts for communication using a
                  proprietary API for storing, sharing and analyzing data
                  (Omni).
                </li>
                <li>
                  Prototyped new concepts for saving and restoring simulation
                  state in Python.
                </li>
                <li>
                  Prototyped new concepts for visualizing and interacting with
                  simulation data in HTML5 and JavaScript.
                </li>
                <li>
                  Began work on a simulation communication layer using ØMQ and
                  Google Protocol Buffers in C++.
                </li>
              </ul>
            </Job>
            <Job
              title="Omni - data capture and replay system"
              timespan={['2013', '2013']}
            >
              <ul>
                <li>Collaborated to define product vision and mission.</li>
                <li>
                  Collaborated to develop project plan and present to
                  management.
                </li>
                <li>Developed 2014 product roadmap.</li>
              </ul>
            </Job>
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
              timespan={['2004', '2014']}
            >
              <div>
                2009-2014
                <ul>
                  <li>
                    Served as project lead on a three to five person distributed
                    team to develop a tactical radio simulation for modeling and
                    simulation.
                  </li>
                  <li>
                    Executed both the Product Owner and Scrum Master roles,
                    developing the roadmap, grooming the backlog and
                    facilitating meetings.
                  </li>
                  <li>Developed software in C++.</li>
                  <li>
                    Support 10 to 20 groups using software enterprise wide.
                  </li>
                </ul>
                2012
                <ul>
                  <li>
                    Implemented VCS API interfaces for radio control, audio
                    streaming and more.
                  </li>
                  <li>
                    Developed VCS Manager to monitor VCS clients in real-time.
                  </li>
                  <li>
                    Refactored VCS software to utilize the VCS API interface,
                    break dependencies and allow for software modules to become
                    distributed across processes and node.
                  </li>
                  <li>
                    Made VCS available to Boeing enterprise through
                    sourceforge-like interface.
                  </li>
                  <li>
                    Started using internal social media site to keep users
                    informed on important updates.
                  </li>
                </ul>
                2011
                <ul>
                  <li>
                    Put a focus on unit testing, continuous integration and
                    automation.
                  </li>
                  <li>Developed test plans for deployment.</li>
                  <li>
                    Brought unit test cover to over 95% line coverage on
                    critical libraries.
                  </li>
                  <li>
                    Deployed software to internal customers on a broad scale.
                  </li>
                  <li>
                    Designed VCS API a communication protocol for breaking
                    dependencies between software modules and distributed,
                    flexible computing.
                  </li>
                </ul>
                2010
                <ul>
                  <li>
                    Developed minimum viable product to satisfy stakeholders and
                    save $600,000 in capital investments.
                  </li>
                  <li>
                    Developed compatibility API for interfacing with external
                    flight simulators.
                  </li>
                  <li>
                    Deployed product to internal customers at a limited scope.
                  </li>
                  <li>
                    Published source code documentation on internal web server.
                  </li>
                  <li>
                    Published procedures, guidelines and design information on
                    internal wiki.
                  </li>
                </ul>
                2009
                <ul>
                  <li>
                    Developed project plan and business case to present to
                    management.
                  </li>
                  <li>Got support from management to begin project in 2010.</li>
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
                <li>Prototyped in Bash and implemented in C++.</li>
                <li>
                  Developed solution for use in flight simulators and then
                  adapted solution for use in large scale wargaming
                  environments.
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
                  Work with users to design comm plans for operator in the loop
                  simulations.
                </li>
                <li>
                  Test communications system configuration with users prior to
                  putting solutions into production.
                </li>
                <li>
                  Provide live technical support for hardware and software for
                  installations at several sites nationwide.
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
              ? 'Looks great! do you have any leadership experience?'
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
