import React from 'react';
import Section from '../components/section';

const Footer = () => {
    return(
        <Section className="bg-dark text-white text-center">
            <p>
                <a class="btn btn-link" href="https://github.com/Daniel-Walsh"><span className="fab fa-github display-4"></span></a>
                <a class="btn btn-link" href="https://www.linkedin.com/in/danielwalshau/"><span className="fab fa-linkedin display-4"></span></a>
            </p>
            <p class="mb-0">Copyright &copy; 2020 Dan Walsh</p>
        </Section>
    );
};

export default Footer;