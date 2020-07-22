import React from 'react';
import Section from '../components/section';
import {ReactComponent as Logo} from '../img/dw-logo.svg';
import {ReactComponent as Coding} from '../img/coding.svg';

const Intro = () => {
    return(
        <div class="overflow-hidden">

            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-9 col-xl-7">
                        <div className="d-flex h-100 flex-column align-items-start justify-content-center" style={{zIndex: 10}}>
                            <Logo className="mb-3 w-auto" style={{maxHeight:'3.5rem'}} />           
                            <h1 className="display-4">Hi, my name is <span className="text-primary">Dan&nbsp;Walsh&nbsp;👋</span></h1>
                            <p className="h2">I'm a web developer, based&nbsp;in&nbsp;Geelong.</p>
                            <p className="lead">Pumping out creative coding solutions to everyday problems is my jam.</p>
                            <p className="lead">HTML, CSS, JavaScript, PHP and dev ops fill my day, but I'm always keen to take up new challenges and expand my knowledge.</p>
                            <p className="lead">Want to know what I've been up to? Scroll down...</p>
                            <div className="mb-5 mb-lg-0">
                                <a className="btn btn-primary btn-lg mr-3" href="#">Let's talk</a>
                                <a className="btn btn-light btn-lg" href="#">Get a quote</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-xl-5">
                        <Coding className="position-relative" style={{marginLeft: '-50%', zIndex: 1}}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Intro;