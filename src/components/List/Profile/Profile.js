import React, { Component } from 'react'
export default class Profile extends Component {
    render() {
        return (
            <div style={{ backgroundColor: '#f5f5f5', height: '100vh' }} className="profile-container">
                <div className="head">

                </div>
                <div className="myprofile">
                    <div className="info">
                        <img src={require('../../../img/profile/me.jpg')} className="my-image" />
                        <div className="description">
                            <span style={{ fontSize: '230%' }}>Hi! I'm <span style={{ fontWeight: '600' }}>Daniel Yoo</span></span>
                            <div style={{ textIndent: '2px', marginTop: '8px', marginBottom: '22px', fontSize: '120%', color: '#555' }}>Fullstack Nodejs Developer</div>
                            <hr />
                            <div style={{ marginTop: '20px' }}>
                                <div style={{ fontSize: '112%' }}>
                                    <span style={{ display: 'inline-block', width: '100px', fontWeight: 'bold' }}>Language</span>
                                    NodeJS, ReactJS, Java, HTML, CSS, Javascript
                                </div>
                            </div>
                            <div style={{ marginTop: '17px' }}>
                                <div style={{ fontSize: '112%' }}>
                                    <span style={{ display: 'inline-block', width: '100px', fontWeight: 'bold' }}>Email</span>
                                    dvlpryoo@gmail.com
                                </div>
                            </div>
                            <div style={{ marginTop: '17px' }}>
                                <div style={{ fontSize: '112%' }}>
                                    <span style={{ display: 'inline-block', width: '100px', fontWeight: 'bold' }}>School</span>
                                    Middlesex County College
                                </div>
                            </div>
                            <div style={{ marginTop: '17px' }}>
                                <div style={{ fontSize: '112%' }}>
                                    <span style={{ display: 'inline-block', width: '100px', fontWeight: 'bold' }}>Phone</span>
                                    +1 908-356-2278
                                </div>
                            </div>
                            <div style={{ marginTop: '17px' }}>
                                <div style={{ fontSize: '112%' }}>
                                    <span style={{ display: 'inline-block', width: '100px', fontWeight: 'bold' }}>Note</span>
                                    Passionate Web Developer, who ceaselessly learns new skillset.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="profile-bottom" style={{ height: '15%', position: 'relative' }}>
                        <div style={{ position: 'absolute' }} className="fb-div link-icon">
                            <a href="#" className="white-icon"><i className="facebook icon big" /></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
