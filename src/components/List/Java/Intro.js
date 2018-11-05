import React from 'react';
const Intro = ({ render }) => {
    return (
        <div><div style={{ textAlign: "center" }}>
            <h1 style={{ marginTop: '20px', color: '#E86D01' }}>Java Projects</h1>
        </div>
            <div>
                <div className="ui grid">
                    <div class="eight wide column" style={{ textAlign: 'center' }}>
                        <div className="box">
                            <div className="figure" onClick={() => { render('customer') }}>
                                <div className="top-image">Customer Saving Program</div>
                                <img src={require('./img/swing1.png')} />
                                <div className="caption">
                                    <div className="text-box">
                                        <h2>Skillset</h2>
                                        <ul>
                                            <li>Java</li>
                                            <li>Java Swing</li>
                                            <li>HSSFWorkbook</li>
                                            <li>Windows Builder</li>
                                            <li>Java Event Handler</li>
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