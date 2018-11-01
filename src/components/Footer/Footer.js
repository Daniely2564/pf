import React, { Component } from 'react'
import Button from './Button/Button';

export default class Footer extends Component {
    buttons = [{
        icon: 'user',
        name: 'Profile',
        color: '#555',
        id: 'profile',
    }, {
        icon: 'node js',
        name: 'NodeJS',
        color: '#6cc24a',
        id: 'nodejs',
    }, {
        icon: 'react',
        name: 'ReactJS',
        color: '#61DBFB',
        id: 'react'
    }, {
        icon: 'coffee',
        name: 'Java',
        color: '#E86D01',
        id: 'java',
    }, {
        icon: 'youtube',
        name: 'Youtube',
        color: '#FF0000',
        id: 'youtube'
    }
    ]
    renderButtons = (buttons) => {
        return buttons.map((button) => {
            return <Button button={button} />
        })
    }
    render() {
        return (
            <div>
                {this.renderButtons(this.buttons)}
            </div>
        )
    }
}
