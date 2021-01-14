import SVG from "../components/SVG";
import Section from "../components/Section";
// import { ReactComponent as Logo } from "../img/dw-logo.svg";
// import logo from "../img/dw-logo.svg";
import IntroImg from "../components/intro-img";

function handleScrollTo(eID) {
  const elem = document.getElementById(eID);
  elem.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
}

const Intro = () => {
  return (
    <Section className="overflow-hidden my-lg-5">
      <div className="row">
        <div className="col-lg-9 col-xl-7" style={{ zIndex: 100 }}>
          <div
            className="d-flex h-100 flex-column align-items-start justify-content-center"
            style={{ zIndex: 10 }}
          >
            {/* <Logo className="mb-5 w-auto" style={{maxHeight:'3.5rem'}} />            */}
            {/* <img src={logo} /> */}

            <div className="row">
              <div className="col-10 col-sm-8">
                <SVG.Logo
                  className="mb-5 w-auto"
                  style={{ maxHeight: "3.5rem" }}
                />
                <h1 className="display-4">
                  Hi, my name is{" "}
                  <span className="text-primary">Dan&nbsp;Walsh</span>
                </h1>
                <p className="h2 mb-5 text-secondary">
                  I'm a web developer,
                  <br />
                  based&nbsp;in&nbsp;Geelong.
                </p>
              </div>
            </div>

            <div className="lead mb-4">
              <p>
                Pumping out creative coding solutions to everyday problems is my
                jam.
              </p>
              <p>
                Working with React, Next.js, Node.js/Express, Squiz Matrix or{" "}
                <mark>[insert&nbsp;your&nbsp;tech&nbsp;here]</mark>, I'm always
                keen to take up new challenges and expand my knowledge.
              </p>
            </div>
            <div className="mb-5 mb-lg-0">
              <button
                className="btn btn-primary btn-lg me-3 mb-3"
                onClick={() => handleScrollTo("Contact")}
              >
                Let's talk!<span className="fas fa-megaphone ms-2"></span>
              </button>
              <button
                className="btn btn-secondary text-white mb-3 btn-lg"
                onClick={() => handleScrollTo("Projects")}
              >
                See my recent projects
                <span className="fas fa-tools ms-2"></span>
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-xl-5" style={{ zIndex: 50 }}>
          <IntroImg />
        </div>
      </div>
    </Section>
  );
};

export default Intro;
