import React from 'react';

import Flexbox from './components/layout/Flexbox.js';
import {
  Section,
  Summary,
  Job,
  Heading,
  ScreenOnly,
  List,
  Link,
} from './components/resume';

import './font.css';

const TechHighlights = () => {
  return (
    <>
      <Section>
        <Flexbox flexDirection="column">
          <Summary>
            Kevin spent the past three years building web apps with React and
            Redux. He most recently developed a technology demonstrator for a
            startup.{' '}
            <ScreenOnly>
              <Link href="https://grasp-data.com/vantage/tech-demo">
                Check it out!
              </Link>
            </ScreenOnly>
          </Summary>
        </Flexbox>
      </Section>
      <Flexbox height="1em" />
      <Section>
        <Heading>Professional</Heading>
        <Job
          title="Technical co-founder"
          company="Grasp Data Inc."
          timespan={['Oct 2019', 'Mar 2020']}
        >
          <List>
            <li>Configured CI/CD with GitLab and GKE</li>
            <li>
              Developed algorithm to generate warehouse racking layout from
              location names.
            </li>
            <li>
              Developed UI to help user translate custom non-standard timestamp
              formatting.
            </li>
            <li>
              Integrated Google Tag Manager and Google Analytics with company
              website.
            </li>
            <li>
              Integrated 3rd-party tools like MailChimp and Unbounce to maintain
              focus on discriminating features.
            </li>
            <li>Developed front-end software using React/Redux</li>
            <li>
              Integrated Storybook to assist with development and testing of
              custom React components
            </li>
            <li>
              Developed an animated warehouse visualization, rendered in the DOM
              with thousands of elements.
            </li>
            <li>
              Developed a warehouse visualization technology demonstrator with
              spatial and temporal navigation.
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
              Evaluated maintainability and scalability of codebase derived from
              WordPress site, to understand the level of technical debt and
              effort required to mitigate it.
            </li>
            <li>
              Familiarized myself with PHP and Laravel enough to maintain a
              development environment, fix bugs, and perform peer reviews.
            </li>
            <li>
              Encouraged adoption of tools like Storybook, ESLint, and
              PHP_CodeSniffer and their automation into a continuous integration
              and deployment workflow, to begin building a scalable team.
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
              Stood up software development environment and began contributing
              in a matter of hours.
            </li>
            <li>
              Led effort to design and organize a Redux store, incorporating
              team feedback to improve the design and utilize new tools for
              reducing boilerplate and increasing productivity.
            </li>
            <li>
              Developed and won team buy-in for a strategy for building,
              maintaining, and sharing React components from multiple UI
              frameworks.
            </li>
          </List>
        </Job>
      </Section>
      <Section>
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
                Fostered more productive sales engagements by working with sales
                and delivery to help them understand how leverage product
                features when engaging customers.
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
                Enabled team to develop consistent user interfaces by building a
                component library in React/Redux.
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
                Prototyped a simulation to generate realistic shopper traffic in
                a grocery store.
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
      </Section>
      <Section>
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
      </Section>
    </>
  );
};

export default TechHighlights;
