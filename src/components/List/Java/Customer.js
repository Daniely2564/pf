import React from 'react';
import ProjectTemplate from './ProjectTemplate';

const CustomerObj = {
    sliders: [
        <div>
            <img src={require('./img/swing.png')} style={{ height: '90%' }} className="project-images" />
        </div>
        ,
        <div>
            <img src={require('./img/swing2.gif')} style={{ height: '90%' }} className="project-images" />
        </div>,
        <div>
            <img src={require('./img/swing3.gif')} style={{ height: '90%' }} className="project-images" />
        </div>
    ],
    skills: [
        'Java',
        'Java Swing',
        'HSSFWorkbook',
        'Windows Builder',
        'Java Event Handler',

    ],
    h2: {
        link: 'http://www.danieltwlc.com',
        title: 'DanielTWLC - ',
    },
    p: <div>
        <p>
            <b>DanielTWLC</b> is a website built for teachers who teaches students who are
            currently studying SAT. It allows them to score SAT tests, and display beautiful result
            on a printable format. After taking their tests, they can send the score to their parents,
            and students by clicking 'Send Email' button, and the sat scores are stored on each students
            profiles to see overall improvement.
        </p>
        <p>
            The server is run by <b>NodeJS express</b>, and database I used is <b>Mongodb</b>. MongoDb was a great
            database when storing student's sat scores and save what they got right and wrong in a object.
            NodeJS template, <b>HandlebarsJS</b> was the great tool for UI. Not only I could manipulate html, but
            I could also work functions with hanldebars helpers. It made the website more dynamic like reactjs.
        </p>
        <p>
            Basic <b>CSS</b>, and <b>Twitter Boostrap</b> allowed to build the web design much quicker and prettier.
        </p>
    </div>,


}

const Customer = ({ render }) => {
    return (
        <ProjectTemplate render={render} Item={CustomerObj} />
    )
}

export default Customer;