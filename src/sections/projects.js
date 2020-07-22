import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Section from '../components/section';
import SectionHeading from '../components/section-heading';
import styles from './projects.module.scss';
import Reveal from 'react-reveal/Reveal';
import ExternalLink from '../components/external-link';

const importAll = (r) => r.keys().map(r);
const markdownFiles = importAll(require.context('../projects', false, /\.md$/))
  .sort();

const MarkdownLink = (props) => {
    return (
        <ExternalLink href={props.href} className="btn-outline-secondary">
            {props.children}<span className="fas fa-arrow-right ml-2"></span>
        </ExternalLink>
    );
};

const Projects = () => {
    const [projects, setProjects] = useState([]);

    const markdownRenderers = {
        link: MarkdownLink
    };

    useEffect(() => {
        async function fetchProjects() {
            console.log(markdownFiles);
            const markdownProjects = await Promise.all(markdownFiles.map((file) => fetch(file).then((res) => res.text())))
                .catch((err) => console.error(err));
            setProjects(markdownProjects);
        }
        fetchProjects();
    }, []);

    return(
        <Section id="Projects" className="bg-light">
            <div className="row">
                <div className="col-lg-10 offset-lg-1">
                    <SectionHeading className="text-primary">Recent projects</SectionHeading>
                    <p className="lead mb-5">Developing websites and applications in both a personal and professional capacity, I've worked on a number of projects over the years. Here's just a short list of what I've been involved in recently:</p>
                    {
                        projects.map((project, idx) => (
                            <Reveal effect="fadeInUp">
                                <div className={styles.project}>
                                    <ReactMarkdown source={project} id={idx} renderers={markdownRenderers} />
                                    <hr />
                                </div>
                            </Reveal> 
                        ))
                    }
                </div>
            </div>
        </Section>
    );
};

export default Projects;