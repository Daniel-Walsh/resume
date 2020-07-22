import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Section from '../components/section';
import SectionHeading from '../components/section-heading';
import styles from './projects.module.scss';
import Reveal from 'react-reveal/Reveal';

const importAll = (r) => r.keys().map(r);
const markdownFiles = importAll(require.context('../projects', false, /\.md$/))
  .sort();

const MarkdownLink = (props) => {
    // const [fullSize, setFullSize] = useState();
    // const handleClick = () => {
    //   setFullSize(!fullSize);
    // };
    return (
      <a href={props.href}
        className="btn btn-outline-primary"
        alt={props.alt}
        src={props.src}
        // onClick={handleClick}
    >{props.children}<span className="fas fa-arrow-right ml-2"></span></a>
    );
};

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        async function fetchProjects() {
            console.log(markdownFiles);
            const markdownProjects = await Promise.all(markdownFiles.map((file) => fetch(file).then((res) => res.text())))
                .catch((err) => console.error(err));
            setProjects(markdownProjects);
        }
        fetchProjects();
    }, []);

    const markdownRenderers = {
        link: MarkdownLink
    };

    return(
        <Section id="Projects" className="bg-light">
            <div className="row">
                <div className="col-lg-10 offset-lg-1">
                    <SectionHeading className="text-primary">Recent projects</SectionHeading>
                    <p className="lead mb-5">Developing websites and applications in both a personal and professional capacity, I've worked on a number of projects over the years. Here's just a short list of what I've been involved in recently:</p>
                    {
                        projects.map((project, idx) => (
                            <Reveal effect="fadeInUp">
                                <ReactMarkdown className={styles.project} source={project} id={idx} renderers={markdownRenderers} />
                            </Reveal> 
                        ))
                    }
                </div>
            </div>
        </Section>
    );
};

export default Projects;