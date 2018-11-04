import React from 'react';
const Intro = ({ render }) => {
    return (
        <div><div style={{ textAlign: "center" }}>
            <h1 style={{ marginTop: '20px', color: '#6cc24a' }}>NodeJS Projects</h1>
        </div>
            <div>
                <div className="ui grid">
                    <div class="eight wide column" style={{ textAlign: 'center' }}>
                        <div className="box">
                            <div className="figure" onClick={() => { render('satcademy') }}>
                                <div className="top-image">SATCADEMY</div>
                                <img src={require('../../../../img/nodejs/nodejs-1.png')} />
                                <div className="caption">
                                    <div className="text-box">
                                        <h2>Skillset</h2>
                                        <ul>
                                            <li>NodeJS</li>
                                            <li>ExpressJS</li>
                                            <li>MongoDB</li>
                                            <li>Mongoose</li>
                                            <li>Passport JS</li>
                                            <li>HandlebarsJS</li>
                                            <li>HTML</li>
                                            <li>Bootstrap 4</li>
                                            <li>Animation</li>
                                            <li>Javascript</li>
                                            <li>ChartJS</li>
                                            <div className="learn-more">
                                                Learn More
                                    </div>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="eight wide column" style={{ textAlign: 'center' }}>
                        <div className="box">
                            <div className="figure">
                                <div className="top-image">Personal Youtube Blog</div>
                                <img src={require('../../../../img/nodejs/nodejs-2.png')} />
                                <div className="caption">
                                    <div className="text-box">
                                        <h2>Skillset</h2>
                                        <ul>
                                            <li>NodeJS</li>
                                            <li>ExpressJS</li>
                                            <li>Semantic UI</li>
                                            <li>Google API</li>
                                            <li>HandlebarsJS</li>
                                            <li>HTML</li>
                                            <li>Bootstrap 4</li>
                                            <li>CSS</li>
                                            <div className="learn-more">
                                                Learn More
                                    </div>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div></div>
    )
}

export default Intro;