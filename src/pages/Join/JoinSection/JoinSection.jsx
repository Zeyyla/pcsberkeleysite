// @flow
import React from 'react';
import './JoinSection.scss';
import image from 'assets/home/group_photo.jpg';

const JoinSection = (props) => {
  return (
    <section className="Description">
      <div className="description-top">
        <h2 className="description-heading">Recruitment</h2>
        <div className="description-mission" role="text">
        <br />
        </div>
      </div>
      <div className="description-main">
        <p>
          Thank you for your interest in PCS@Berkeley!
          <br />
          <br/ >
          We will be hosting virtual recruitment events, including two
          information sessions regarding our club, upcoming projects, and
          a walkthrough of our application process. You'll be able to meet
          our current leadership team and ask us any questions you may have.
          <br />
          <br />
          <center><b>Important Dates:</b></center>
          <ul>
            <li> Information sessions: Tuesday September 7th, 2021 & Wednesday September 8th, 2021 at 7PM (PST)</li>
            <li>Application due date: Friday September 10, 2021 at 11:59PM (PST)</li>
          </ul>
          Can't make it because of a class conflict or time zone issues?
          No problem.
          <a href="mailto:pcs.berkeley@gmail.com"> Shoot us an email </a>
          or
          <a href="https://www.facebook.com/PCSatBerkeley/"> message us on Facebook</a>,
          and we'll send you a screen recording and answer any of your questions there.
        </p>

        <p>
          💻 <a href="https://docs.google.com/forms/d/e/1FAIpQLSeLE3Co-XF8ITyNUrHU6dUuhnHWarzN2xVMh5_xrtYTYYIyNA/viewform?usp=sf_link">Apply Here!</a> 
          <br />
          <br />
        </p>
      </div>
    </section>
  );
};



export default JoinSection;
