import React, { useState } from 'react';

import ProfessionalHighlights from './ProfessionalHighlights.js';
import TechHighlights from './TechHighlights.js';

import Flexbox from './components/layout/Flexbox.js';
import Button from './components/parts/Button.js';

import {
  Document,
  Title,
  Section,
  Headline,
  Job,
  Degree,
  Heading,
  ScreenOnly,
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
      {showTechnicalResume ? <TechHighlights /> : <ProfessionalHighlights />}
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
