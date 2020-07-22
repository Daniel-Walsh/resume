import React from 'react';
import Reveal from 'react-reveal/Reveal';

import {ReactComponent as Thinking} from './img/thinking.svg';

import Section from './components/section';
import Intro from './sections/intro';
import Projects from './sections/projects';
import Contact from './sections/contact';
import Footer from './sections/footer';

function App() {
  return (
    <>
    {/* <Reveal effect="fadeInUp"> */}
    <Intro />
    <Projects />
    <Contact />
    <Footer />
    {/* </Reveal>  */}
</>
  );
}

export default App;
