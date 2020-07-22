import React from 'react';
import Section from '../components/section';

const Contact = () => {
    return(
        <Section className="bg-primary">
            <h1><span className="text-light">//</span> Get in touch</h1>
            <p className="lead mb-5">Got an idea that needs developing? Have an older website that needs updating? Drop me a line and let's come up with a solution that best fits your needs.</p>
            <form netlify>
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
                    <input id="Phone" class="form-control" type="text" placeholder="Enter your phone number" />
                </div>
                <div className="form-group">
                    <label for="Message">Message</label>
                    <textarea id="Message" class="form-control" rows="5" placeholder="Enter your message" />
                </div>
                <button type="submit" class="btn btn-secondary btn-lg">Submit</button>
            </form>
        </Section>
    );
};

export default Contact;