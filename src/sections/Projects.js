import ReactMarkdown from "react-markdown";
import Section from "../components/Section";
import Reveal from "react-reveal/Reveal";
import ExternalLink from "../components/external-link";

const Projects = ({ projects }) => {
  return (
    <Section id="Projects" className="bg-light">
      <div className="row">
        <div className="col-lg-10 offset-lg-1">
          <Section.Heading className="text-primary">
            Recent projects
          </Section.Heading>
          <p className="lead mb-5">
            Developing websites and applications in both a personal and
            professional capacity, I've worked on a number of projects over the
            years. Here's just a short list of what I've been involved in
            recently:
          </p>
          {projects.map((project, id) => (
            <Reveal effect="fadeInUp" key={id}>
              <div className="project">
                <img src={project.data.image} alt={project.data.altText} />
                <h2>{project.data.name}</h2>
                <blockquote>{project.data.subtitle}</blockquote>
                <ReactMarkdown source={project.content} />
                <ExternalLink
                  href={project.data.siteUrl}
                  className="btn-outline-secondary"
                >
                  View site
                  <span className="fas fa-arrow-right ms-2"></span>
                </ExternalLink>
                <hr />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Projects;
