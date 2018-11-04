import React, { Component } from 'react'
export default class Profile extends Component {
    sns = [
        {
            type: 'facebook',
            shorten: 'fb',
            link: 'https://www.facebook.com/profile.php?id=100014349903170',
        },
        {
            type: 'linkedin',
            shorten: 'li',
            link: 'https://www.linkedin.com/in/dvlpryoo/',
        },
        {
            type: 'github',
            shorten: 'gh',
            link: 'https://github.com/Daniely2564/portfolio',
        },
        {
            type: 'youtube',
            shorten: 'yt',
            link: 'https://www.youtube.com/channel/UCU2RDu6Vhlgu3YV0puxz66A?view_as=subscriber',
        }, {
            type: 'google plus square',
            shorten: 'gm',
            link: 'https://mailto:dvlpryoo@gmail.com',
        }
    ]
    renderIcons = (items) => {
        return items.map(item => {
            return (
                <div style={{ position: 'absolute' }} className={item.shorten + "-div link-icon"}>
                    <a href={item.link} target="_blank" className={item.shorten + " white-icon"}><i className={item.type + " icon big"} /></a>
                </div>
            )
        })
    }
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
                        {this.renderIcons(this.sns)}
                    </div>
                </div>
            </div>
        )
    }
}
