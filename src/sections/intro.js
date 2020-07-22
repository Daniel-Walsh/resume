import React from 'react';
import Section from '../components/section';
import {ReactComponent as Logo} from '../img/dw-logo.svg';
import IntroImg from '../components/intro-img';

function handleScrollTo(eID) {
    const elem = document.getElementById(eID);
    elem.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}

const Intro = () => {
    return(
        <Section className="overflow-hidden my-5">
            <div className="row">
                <div className="col-lg-9 col-xl-7" style={{zIndex: 100}}>
                    <div className="d-flex h-100 flex-column align-items-start justify-content-center" style={{zIndex: 10}}>
                        <Logo className="mb-5 w-auto" style={{maxHeight:'3.5rem'}} />           
                        <h1 className="display-4">Hi, my name is <span className="text-primary">Dan&nbsp;Walsh <span role="img" aria-label="Waving hand">👋</span></span></h1>
                        <p className="h2 mb-5">I'm a web developer,<br/>based&nbsp;in&nbsp;Geelong.</p>
                        <div className="lead mb-4">
                            <p>Pumping out creative coding solutions to everyday problems is my jam.</p>
                            <p>HTML, CSS, JavaScript, PHP and dev ops fill my day, but I'm always keen to take up new challenges and expand my knowledge.</p>
                            {/* <p>Want to know what I've been up to? Scroll down...</p> */}
                        </div>
                        <div className="mb-5 mb-lg-0">
                            <button className="btn btn-primary btn-lg mr-3 mb-3" onClick={() => handleScrollTo('Contact')}>Let's talk<span className="fas fa-megaphone ml-2"></span></button>
                            <button className="btn btn-secondary text-white mb-3 btn-lg" onClick={() => handleScrollTo('Projects')}>See my recent projects<span className="fas fa-arrow-right ml-2"></span></button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-xl-5" style={{zIndex: 50}}>
                    <IntroImg />
                </div>
            </div>
        </Section>
    );
};

export default Intro;