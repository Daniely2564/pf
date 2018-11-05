import React from 'react';
import Intro from './Intro';
import Customer from './Customer';

class ReactJS extends React.Component {
    state = {
        render: 'intro',
    }
    renderProject = (name) => {
        this.setState({ render: name });
    }
    renderSwitch = () => {
        switch (this.state.render) {
            case 'intro':
                return <Intro render={this.renderProject} />;
            case 'customer':
                return <Customer render={this.renderProject} />;
            default:
                return <Intro render={this.renderProject} />;
        }
    }
    render() {

        return (
            <div>
                <div className="header-container" style={{ backgroundColor: '#E86D01' }}>
                    <h1 className="header-txt">
                        <i className="react icon" />Java
                    </h1>
                </div>
                {this.renderSwitch()}
            </div>
        );
    }
};

export default ReactJS;