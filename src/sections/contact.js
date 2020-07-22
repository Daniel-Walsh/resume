import React from 'react';
import Section from '../components/section';
import SectionHeading from '../components/section-heading';

const Contact = () => {
    return(
        <Section id="Contact" className="bg-primary">
            <div className="row">
                <div className="col-md-10 offset-md-1  col-lg-8 offset-lg-2">
                    <SectionHeading className="text-light">Get in touch</SectionHeading>
                    <p className="lead mb-5">Got an idea that needs developing? Have an older website that needs updating? Drop me a line and let's come up with a solution that best fits your needs.</p>

                    <form name="Contact" method="POST">
                        <input type="hidden" name="form-name" value="Contact" />
                        <div className="form-group">
                            <label for="Name">Name</label>
                            <input id="Name" class="form-control" type="text" placeholder="Enter your name" />
                        </div>
                        <div className="form-group">
                            <label for="Email">Email</label>
                            <input id="Email" class="form-control" type="email" placeholder="Enter your email address" />
                        </div>
                        <div className="form-group">
                            <label for="Phone">Phone</label>
                            <input id="Phone" class="form-control" type="tel" placeholder="Enter your phone number" />
                        </div>
                        <div className="form-group">
                            <label for="Message">Message</label>
                            <textarea id="Message" class="form-control" rows="5" placeholder="Enter your message" />
                        </div>
                        <button type="submit" class="btn btn-secondary btn-lg">Send message</button>
                    </form>
                </div>
            </div>
        </Section>
    );
};

export default Contact;