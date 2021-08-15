import React from 'react';
import NameAndJobTitle from './NameAndJobTitle';
import AboutMe from './AboutMe';

class Hero extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NameAndJobTitle />
        <AboutMe />
      </React.Fragment>
    );
  }
}

export default Hero;
