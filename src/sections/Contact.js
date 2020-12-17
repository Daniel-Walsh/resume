import Section from "../components/Section";
import Reveal from "react-reveal/Reveal";

const Contact = () => {
  return (
    <Section id="Contact" className="bg-primary">
      <Reveal effect="fadeInUp">
        <div className="row">
          <div className="col-md-10 offset-md-1 col-lg-5 offset-lg-1 ">
            <Section.Heading className="text-light">
              Get in touch
            </Section.Heading>
            <div className="lead mb-5">
              <p>
                Got an idea that needs developing? Have an older website that
                needs updating?
              </p>
              <p>
                Drop me a line and let's come up with a solution that best fits
                your needs.
              </p>
            </div>
          </div>
          <div className="col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-5 offset-lg-0 col-xl-5 offset-xl-1">
            <form name="Contact" method="POST">
              <input type="hidden" name="form-name" value="Contact" />
              <div className="mb-3">
                <label className="form-label" htmlFor="Name">
                  Name <span aria-hidden="true">*</span>
                </label>
                <input
                  name="Name"
                  id="Name"
                  className="form-control"
                  type="text"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="Email">
                  Email <span aria-hidden="true">*</span>
                </label>
                <input
                  name="Email"
                  id="Email"
                  className="form-control"
                  type="email"
                  placeholder="Enter your email address"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="Phone">
                  Phone
                </label>
                <input
                  name="Phone"
                  id="Phone"
                  className="form-control"
                  type="tel"
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="Message">
                  Message <span aria-hidden="true">*</span>
                </label>
                <textarea
                  name="Message"
                  id="Message"
                  className="form-control"
                  rows="5"
                  placeholder="Enter your message"
                  required
                />
              </div>
              <div className="form-text mb-3 text-dark">* Required fields</div>
              <button type="submit" className="btn btn-secondary btn-lg">
                Send message<span className="fas fa-paper-plane ms-2"></span>
              </button>
            </form>
          </div>
        </div>
      </Reveal>
    </Section>
  );
};

export default Contact;
