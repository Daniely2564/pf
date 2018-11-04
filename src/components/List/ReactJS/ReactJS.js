import React from 'react';

class ReactJS extends React.Component {

    render() {

        return (
            <div>
                <div className="header-container" style={{ backgroundColor: '#61DBFB' }}>
                    <h1 className="header-txt">
                        <i className="react icon" />React JS
                    </h1>
                </div>
                <div style={{ textAlign: "center" }}>
                    <h1 style={{ marginTop: '20px', color: '#61DBFB' }}>ReactJS Projects</h1>
                </div>
                <div>
                    <div className="ui grid">
                        <div class="eight wide column" style={{ textAlign: 'center' }}>
                            <div className="box">
                                <div className="figure">
                                    <div className="top-image">TypoGenerator</div>
                                    <img src={require('../../../img/nodejs/nodejs-1.png')} />
                                    <div className="caption">
                                        <div className="text-box">
                                            <h2>Skillset</h2>
                                            <ul>
                                                <li>ReactJS</li>
                                                <li>Semantic UI</li>
                                                <li>HTML</li>
                                                <li>CSS</li>
                                                <li>Javascript</li>
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
                                    <div className="top-image">Portfolio</div>
                                    <img src={require('../../../img/nodejs/nodejs-2.png')} />
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
                </div>
            </div>
        );
    }
};

export default ReactJS;