import React from 'react';
import Section from '../components/section';
import {ReactComponent as Logo} from '../img/dw-logo.svg';
import IntroImg from '../components/intro-img';
// import {ReactComponent as Coding} from '../img/coding.svg';

const Intro = () => {
    return(
        <div class="overflow-hidden">

            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-lg-9 col-xl-7">
                        <div className="d-flex h-100 flex-column align-items-start justify-content-center" style={{zIndex: 10}}>
                            <Logo className="mb-5 w-auto" style={{maxHeight:'3.5rem'}} />           
                            <h1 className="display-4">Hi, my name is <span className="text-primary">Dan&nbsp;Walsh&nbsp;👋</span></h1>
                            <p className="h2 mb-5">I'm a web developer,<br/>based&nbsp;in&nbsp;Geelong.</p>
                            <div className="lead mb-4">
                                <p>Pumping out creative coding solutions to everyday problems is my jam.</p>
                                <p>HTML, CSS, JavaScript, PHP and dev ops fill my day, but I'm always keen to take up new challenges and expand my knowledge.</p>
                                {/* <p>Want to know what I've been up to? Scroll down...</p> */}
                            </div>
                            <div className="mb-5 mb-lg-0">
                                <a className="btn btn-primary btn-lg mr-3" href="#">Let's talk<span className="fas fa-megaphone ml-2"></span></a>
                                <a className="btn btn-light btn-lg" href="#">See my recent projects<span className="fas fa-arrow-right ml-2"></span></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-xl-5">
                        <IntroImg />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Intro;