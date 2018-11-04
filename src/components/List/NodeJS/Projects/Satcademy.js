import React from 'react';
import Slider from 'react-slick';

const Satcademy = ({ render }) => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    return (
        <div style={{ width: '100%', paddingBottom: '1200px' }}>
            <div style={{ width: '100%', padding: '80px', height: '650px' }}>
                <div className="image-slider-container" >
                    <Slider {...settings}>
                        <div>
                            <div>
                                <img src={require('../../../../img/nodejs/hr1.png')} className="project-images" />
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src={require('../../../../img/nodejs/hr2.gif')} className="project-images" />
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src={require('../../../../img/nodejs/hr3.gif')} className="project-images" />
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src={require('../../../../img/nodejs/hr4.gif')} className="project-images" />
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src={require('../../../../img/nodejs/hr5.gif')} className="project-images" />
                            </div>
                        </div>
                    </Slider>
                </div>
                <div className="project-description">
                    <h1 className="project-intro">Skills</h1>

                    <ul>
                        <li>NodeJS</li>
                        <li>ExpressJS</li>
                        <li>MongoDB</li>
                        <li>Mongoose</li>
                        <li>Passport JS</li>
                        <li>HandlebarsJS</li>
                        <li>HTML</li>
                        <li>Bootstrap 4</li>
                        <li>CSS</li>
                        <li>Animation</li>
                        <li>Javascript</li>
                        <li>ChartJS</li>
                    </ul>
                    <h2 style={{ textAlign: 'center' }}>SATCADEMY - <a target="_blank" href="http://satcademy.herokuapp.com">http://satcademy.herokuapp.com</a></h2>
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
                </div>
                <div style={{ textAlign: 'center' }}>
                    <div style={{ padding: '10px 30px', fontSize: '150%', marginTop: '50px' }} className="ui button" onClick={() => render('intro')}>
                        Go Back
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Satcademy;