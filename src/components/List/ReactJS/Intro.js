import React from 'react';
const Intro = ({ render }) => {
    return (
        <div><div style={{ textAlign: "center" }}>
            <h1 style={{ marginTop: '20px', color: '#61DBFB' }}>ReactJS Projects</h1>
        </div>
            <div>
                <div className="ui grid">
                    <div class="eight wide column" style={{ textAlign: 'center' }}>
                        <div className="box">
                            <div className="figure" onClick={() => { render('typogenerator') }}>
                                <div className="top-image">Typo Generator</div>
                                <img src={require('./img/reactjs-1.png')} />
                                <div className="caption">
                                    <div className="text-box">
                                        <h2>Skillset</h2>
                                        <ul>
                                            <li>ReactJS</li>
                                            <li>Google Font</li>
                                            <li>CSS</li>
                                            <li>HTML</li>
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
                            <div className="figure" onClick={() => { render('portfolio') }}>
                                <div className="top-image">Portfolio</div>
                                <img src={require('./img/reactjs-2.png')} />
                                <div className="caption">
                                    <div className="text-box">
                                        <h2>Skillset</h2>
                                        <ul>
                                            <li>ReactJS</li>
                                            <li>React-Slick</li>
                                            <li>Semantic UI</li>
                                            <li>CSS</li>
                                            <li>Animation</li>
                                            <li>HTML</li>
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