import React from "react";

const divStyle = {
  margin: '100px',
  padding: '20px',
  backgroundColor: 'gray'
}
const pStyle = {
  fontSize: '20px'
}

function About() {
  return (
    <div className='container' style={divStyle}>
      <h1 >About Me</h1><br />
      <h2>Michael Roussel</h2><br />
      <p style={pStyle}>I'm a computer programming student at Georgian College. I'm 21 years old and am a terrible procrastinator. My hobbies include video games, reading manga and basketball.</p>
      <img src={"/images/diablo.jpg"} alt="diablo logo"></img>
    </div>
  );
}

export default About;
