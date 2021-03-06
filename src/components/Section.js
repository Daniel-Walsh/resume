import React from "react";
import Reveal from "react-reveal/Reveal";

const Section = (props) => {
  return (
    <section id={props.id} className={props.className}>
      <div className="container py-5">
        <div className="row">
          <div className="col">
            <Reveal effect="fadeInUp">{props.children}</Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

const Heading = ({ className, children }) => {
  return (
    <h1>
      <span className={`${className} me-2`} aria-hidden="true">
        &#47;&#47;
      </span>
      {children}
    </h1>
  );
};

Section.Heading = Heading;

export default Section;
