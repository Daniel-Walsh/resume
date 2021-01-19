import Section from "../components/Section";
import Reveal from "react-reveal/Reveal";
import ExternalLink from "../components/external-link";

const BlogSection = ({ blog }) => {
  // console.log(blog);
  return (
    <Section id="Blog" className="bg-white">
      <div className="row">
        <div className="col-md-10 offset-lg-1  col-lg-7 ">
          <Section.Heading className="text-primary">
            Latest posts
          </Section.Heading>
          <p className="lead mb-5">
            I try to contribute tech posts over on{" "}
            <a
              href="https://dev.to/danwalsh"
              rel="noreferrer noopener"
              target="_blank"
            >
              DEV Community
            </a>{" "}
            as time permits. Here are the last couple of things I blogged about:
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-10 offset-lg-1">
          <div className="row">
            {blog &&
              blog.map((blogPost, id) => (
                <Reveal effect="fadeInUp" key={id}>
                  <div className="col-md-6 mb-5 mb-md-0">
                    <div className="card h-100">
                      <img
                        src={blogPost.cover_image}
                        className="card-img-top"
                        alt=""
                      />
                      <div className="card-body d-flex flex-column">
                        <h2 className="card-title h3">{blogPost.title}</h2>
                        <p>{blogPost.description}</p>
                        <div className="mt-auto">
                          <ExternalLink
                            href={blogPost.url}
                            className="btn-outline-secondary stretched-link"
                          >
                            Read it over at DEV Community
                          </ExternalLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default BlogSection;
