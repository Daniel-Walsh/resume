import React from 'react';
import Section from '../components/section';
import ExternalLink from '../components/external-link';

const Footer = () => {
    return(
        <Section className="bg-dark text-white text-center">
            <p>
                <ExternalLink className="btn-link" href="https://github.com/Daniel-Walsh/">
                    <span className="fab fa-github display-4"></span>
                </ExternalLink>
                <ExternalLink className="btn-link" href="https://www.linkedin.com/in/danielwalshau/">
                    <span className="fab fa-linkedin display-4"></span>
                </ExternalLink>
            </p>
            <p class="mb-0">Copyright &copy; 2020 Dan Walsh</p>
        </Section>
    );
};

export default Footer;