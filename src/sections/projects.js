import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Section from '../components/section';

const importAll = (r) => r.keys().map(r);
const markdownFiles = importAll(require.context('../projects', false, /\.md$/))
  .sort();

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

    return(
        <Section id="Projects" className="bg-light">
            <h1><span className="text-primary">//</span> Recent projects</h1>
            <p className="lead">Developing websites and applications in both a personal and professional capacity, I've worked on a number of projects over the years. Here's just a short list of what I've been involved in recently:</p>
            {
                projects.map((project, idx) => (
                    <ReactMarkdown source={project} />
                ))
            }
        </Section>
    );
};

export default Projects;