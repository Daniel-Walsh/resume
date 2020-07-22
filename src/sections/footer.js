import React from 'react';
import Section from '../components/section';

const Footer = () => {
    return(
        <Section className="bg-dark text-white text-center">
            <p><span className="fab fa-github"></span> <span className="fab fa-linkedin"></span></p>
            <p class="mb-0">Copyright © 2020 Dan Walsh</p>
        </Section>
    );
};

export default Footer;