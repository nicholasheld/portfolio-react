import React from 'react';
import './AboutMe.css'
import me from './me.jpg'
export function AboutMe() {
    return (
        <div id="summary">
        <p>My name is Nicholas Held and I am a full stack web development student in the University of Minnesota coding Bootcamp. 
        The completion of the program is August 2021. I started this journey to enhance my skill set to open up new opportunities.
      My background is in the medical device industry with a degree in Biomechanical Engineering. 
      I hope to showcase my newfound skills in this portfolio with a desire to develop web innovtive solutions. 
    
      Tech stack: HTML, CSS, Javascript, Node, sequelize, SQL, Mongo, Handlebars, Express, Heroku, React

    Some of my hobbies are: golf, cooking, back-packing, reading, video games, basketball and spending time with my family</p>

    <img src={me} alt='This is me' />
        </div>
    )
}