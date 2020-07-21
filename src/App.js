import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import {ReactComponent as Thinking} from './img/thinking.svg';
import {ReactComponent as Coding} from './img/coding.svg';

function App() {
  return (
    <>
    <div class="overflow-hidden">

      <div className="container py-5">
        <div className="row">
          <div className="col-lg-9 col-xl-7">
            <div class="d-flex h-100 flex-column justify-content-center" style={{zIndex: 10}}>
              <h1>Hi, my name is Dan Walsh 👋</h1>
              <p class="h2">I'm a web developer, based in Geelong.</p>
              <p>Pumping out creative coding solutions to everyday problems is my jam.</p>
              <p>HTML, CSS, JavaScript, PHP and dev ops fill my day, but I'm always keen to take up new challenges and expand my knowledge.</p>
              <p>Want to know what I've been up to? Scroll down...</p>
              <div class="mb-5 mb-lg-0">
                <a className="btn btn-primary btn-lg mr-3" href="#">Let's talk</a>
                <a className="btn btn-light btn-lg" href="#">Get a quote</a>
              </div>

            </div>
          </div>
          <div className="col-lg-3 col-xl-5">
            <Coding className="position-relative" style={{marginLeft: '-50%', zIndex: 1}}/>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-light">

      <div className="container py-5">
        <div className="row">
          <div className="col">
            
            
          <h1>Recent projects</h1>
          <p>Developing websites and applications in both a personal and professional capacity, I've worked on a number of projects over the years. Here's just a short list of what I've been involved in recently:</p>

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
    </div>

    <div class="bg-primary">

      <div className="container py-5">
        <div className="row">
          <div className="col">
            <h1>Get in touch</h1>
            <p>Got an idea that needs developing? Have an older website that needs updating? Drop me a line and let's come up with a solution that best fits your needs.</p>
            
            <form netlify>
              <div className="form-group">
                <label>Name</label>
                <input class="form-control" type="text" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input class="form-control" type="email" />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input class="form-control" type="text" />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea class="form-control" rows="5" />
              </div>
              <button type="submit" class="btn btn-light">Submit</button>
            </form>


  
          </div>
        </div>
      </div>
    </div>

    <div className="bg-dark text-white text-center">

      <div className="container py-5">
        <div className="row">
          <div className="col">
            <p>GitHub Logo | LinkedIn Logo</p>
            <p class="mb-0">Copyright © 2020 Dan Walsh</p>
          </div>
        </div>
      </div>
    </div>


</>
  );
}

export default App;
