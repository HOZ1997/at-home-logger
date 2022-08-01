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
        <h4>Dorian Cohort</h4>
        <p>Dev</p>
        <p> Prime Thank you for staring a part time program. </p>
        <p>Prime Alumni Sarah and Alicia </p>
        <p>Carter</p>
        <h4>C.H. Robinson</h4>
        <h4>Friends and Family. I am looking forward to more Auntie time </h4>
        <h4>Whippa and Kal Pals</h4>
        <h4>My friend Laura who said you have to do this! In memory of her brother Jason.  </h4>
        
      </div>
    </div>
  );
}

export default AboutPage;
