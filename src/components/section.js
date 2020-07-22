import React from 'react';

const Section = (props) => {
    return(
        <section id={props.id} className={props.className}>
            <div className="container py-5">
                <div className="row">
                    <div className="col">
                        {props.children}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Section;