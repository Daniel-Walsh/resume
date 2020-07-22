import React from 'react';
import Section from '../components/section';
import SectionHeading from '../components/section-heading';
import Reveal from 'react-reveal/Reveal';

const Contact = () => {
    return(
        <Section id="Contact" className="bg-primary">
            <Reveal effect="fadeInUp">
                <div className="row">
                    <div className="col-md-10 offset-md-1  col-lg-8 offset-lg-2">
                        <SectionHeading className="text-light">Get in touch</SectionHeading>
                        <div className="lead mb-5">
                            <p>Got an idea that needs developing? Have an older website that needs updating?</p>
                            <p>Drop me a line and let's come up with a solution that best fits your needs.</p>
                        </div>
                        <form name="Contact" method="POST">
                            <input type="hidden" name="form-name" value="Contact" />
                            <div className="form-group">
                                <label for="Name">Name</label>
                                <input name="Name" id="Name" class="form-control" type="text" placeholder="Enter your name" />
                            </div>
                            <div className="form-group">
                                <label for="Email">Email</label>
                                <input name="Email" id="Email" class="form-control" type="email" placeholder="Enter your email address" />
                            </div>
                            <div className="form-group">
                                <label for="Phone">Phone</label>
                                <input name="Phone" id="Phone" class="form-control" type="tel" placeholder="Enter your phone number" />
                            </div>
                            <div className="form-group">
                                <label for="Message">Message</label>
                                <textarea name="Message" id="Message" class="form-control" rows="5" placeholder="Enter your message" />
                            </div>
                            <button type="submit" class="btn btn-secondary btn-lg">Send message<span className="fas fa-paper-plane ml-2"></span></button>
                        </form>
                    </div>
                </div>
            </Reveal>
        </Section>
    );
};

export default Contact;