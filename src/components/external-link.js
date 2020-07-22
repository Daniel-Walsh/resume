import React from 'react';

const ExternalLink = (props) => {
    return(
        <a className={`btn ${props.className}`} href={props.href} rel="noopener noreferrer" target="_blank">
            {props.children}
        </a>
    );
};

export default ExternalLink;