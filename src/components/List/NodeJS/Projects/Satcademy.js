import React from 'react';
import Slider from 'react-slick';
import ProjectTemplate from './ProjectTemplate';

const SatCademyObj = {
    sliders: [
        <div>
            <img src={require('./img/hr1.png')} className="project-images" />
        </div>
        ,
        <div>
            <img src={require('./img/hr2.gif')} className="project-images" />
        </div>
        , <div>
            <img src={require('./img/hr3.gif')} className="project-images" />
        </div>
        , <div>
            <img src={require('./img/hr4.gif')} className="project-images" />
        </div>
        , <div>
            <img src={require('./img/hr5.gif')} className="project-images" />
        </div>
        ,
    ],
    skills: [
        'NodeJS',
        'ExpressJS',
        'MongoDB',
        'Mongoose',
        'Passport JS',
        'HandlebarsJS',
        'HTML',
        'Bootstrap 4',
        'CSS',
        'Animation',
        'Javascript',
        'ChartJS',
    ],
    h2: {
        link: 'http://satcademy.herokuapp.com',
        title: 'SATCADEMY - ',
    },
    p: <div>
        <p>
            <b>SATCADEMY</b> is a website built for teachers who teaches students who are
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

const SatCademy = ({ render }) => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    return (
        <div>
            <ProjectTemplate Item={SatCademyObj} render={render} />
        </div>
    )
}

export default SatCademy;