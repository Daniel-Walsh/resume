import React from 'react';

const SectionHeading = ({className, children}) => {
    return(
        <h1><span className={`${className} mr-2`}>&#47;&#47;</span>{children}</h1>
    );
};

export default SectionHeading;