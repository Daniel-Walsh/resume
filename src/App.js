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

    {/* <div class="bg-light">

      <div className="container py-5">
        <div className="row">
          <div className="col">

           
              <h1>Recent projects</h1>
              <p className="lead">Developing websites and applications in both a personal and professional capacity, I've worked on a number of projects over the years. Here's just a short list of what I've been involved in recently:</p>
                
              <h2>Lort Smith website</h2>
              <p>Website & Dev Ops</p>
              <p>[image]</p>
              <p>A highly customised content management site, including end-to-end administration of animal adoptions and members-only content areas.</p>
              <a className="btn btn-light" href="#">View site</a>
              <hr />

              <h2>Department of Environment, Land, Water & Planning Visualising Water Accounts website</h2>
              <p>Data Visualisation Website</p>
              <p>[image]</p>
              <p>A wealth of statistical analysis re-imagined in the form of a multi-page vertically-scrolling website.</p>
              <a className="btn btn-light" href="#">View site</a>
              <hr />

              <h2>Western Victoria PHN website</h2>
              <p>WordPress Solution</p>
              <p>[image]</p>
              <p>Event registrations, job vacancy advertising and management and content authoring workflows, all wrapped up in a custom-built WordPress solution.</p>
              <a className="btn btn-light" href="#">View site</a>
              <hr />



          </div>
        </div>
      </div>
    </div> */}

    <Contact />
    <Footer />
    {/* </Reveal>  */}
</>
  );
}

export default App;
