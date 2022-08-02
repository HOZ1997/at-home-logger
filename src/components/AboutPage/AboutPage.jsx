import React from 'react';
import './AboutPage.css';
// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <h2>At Home Logger</h2>
        <p>Up next for the project....</p>

        <h3>Technologies Used</h3>
        <p>React Redux Node Express SQL CSS</p>
        
        <h3>Thank you! </h3>
        <h4>Dorian Cohort!! and their families!</h4>
        <h4>Dev!</h4>
        <p> Prime! Thank you for staring a part time program. </p>
        <h4>Thank you to the following for your ongoing support for my Prime journey!</h4>
           <p>Prime Alumni - Sarah and Alicia!</p>
           <p>C.H. Robinson  - TMC, CHR IT, Carter, Zach, HatCHRy and Luke!</p>
        <p>Family - Mom and Dad - Laurel, Chris and Brandon - Derek, Kathryn, Ella and Palmer!</p>
        <p>Friends - Thank you for being understanding for all I have had to miss. </p>
        <p>Whippa and Kal Pals!</p>
        <h4>Laura!</h4>
        <h5>I dedicate this to Jason, Laura's brother. </h5>
        <p>Thank you all again! </p>
        <p>Now! Another amazing Dorian Cohort member! </p>
      </div>
    </div>
  );
}

export default AboutPage;
