import React from 'react';
import styled from 'styled-components';
import { Switch, Route, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Typography } from 'antd';
import LandingSection from './Sections/landingSection';
import AboutMe from './Sections/AboutMe';
import Education from './Sections/Education';
import WorkHistory from './Sections/WorkHistory';
import Leadership from './Sections/Leadership';
import RelevantCoursework from './Sections/RelevantCoursework';
import Projects from './Sections/Projects';
import Skills from './Sections/Skills';

// Heavilly borrowed from https://medium.com/@khwsc1/step-by-step-guide-of-simple-routing-transition-effect-for-react-with-react-router-v4-and-9152db1566a0

const FallBack = (props) => {
  return (
    <Typography.Text level={1}>
      ~Section not Found~  ....sorry :P
    </Typography.Text>
  );
};

function Container({ location, mobile, lightMode }) {
  return (
    <Wrapper>
      <TransitionGroup className="transition-group">
        <CSSTransition
          key={location.key}
          timeout={{ enter: 300, exit: 300 }}
          classNames="fade"
        >
          <section className="route-section">
            <Switch location={location}>
              <Route exact path="/" render={(props) => (<LandingSection mobile={mobile} lightMode={lightMode} />)} />
              <Route path="/about_me" component={() => { return <AboutMe mobile={mobile} lightMode={lightMode} />; }} /> {/* Does not really need adjustments when in mobile */}
              <Route path="/education" render={(props) => (<Education mobile={mobile} lightMode={lightMode} />)} />
              <Route path="/work_history" component={() => { return <WorkHistory mobile={mobile} lightMode={lightMode} />; }} />
              <Route path="/leadership" component={() => { return <Leadership mobile={mobile} lightMode={lightMode} />; }} />
              <Route path="/relevant_coursework" component={() => { return <RelevantCoursework mobile={mobile} lightMode={lightMode} />; }} />
              <Route path="/projects" component={() => { return <Projects mobile={mobile} lightMode={lightMode} />; }} />
              <Route path="/skills" component={() => { return <Skills mobile={mobile} lightMode={lightMode} />; }} />
              <Route component={FallBack} />
            </Switch>
          </section>
        </CSSTransition>
      </TransitionGroup>
    </Wrapper>
  );
}

const Wrapper = styled.div`
    // omitted
    
      div.transition-group {
           position: relative;
      }
      section.route-section {
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
      }
`;

export default withRouter(Container);
