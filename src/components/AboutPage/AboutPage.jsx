import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <h2>At Home Logger</h2>
        <h3>Technologies Used</h3>
        <p>React Redux Node Express Postgres SQL CSS</p>
        <h3>Thank you! </h3>
        <h4>Dorian Cohort!!</h4>
        <h4>Dev!</h4>
        <p> Prime! Thank you for staring a part time program. </p>
        <h4>Thank you for you ongoing support for my Prime journey! </h4>
        <p>Prime Alumni Sarah and Alicia! </p><p>Carter and Zach!</p>
        <p>C.H. Robinson!</p>
        <p>Family and Friends!</p>
        <p>Whippa and Kal Pals!</p>
        <h4>Laura!</h4>
        <p>Up Next for the project....</p>
        <p> Here's Jonathan!</p>
      </div>
    </div>
  );
}

export default AboutPage;
