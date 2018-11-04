import React from 'react';
import Intro from './Projects/Intro';
import Satcademy from './Projects/Satcademy';

class NodeJS extends React.Component {
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
            case 'satcademy':
                return <Satcademy render={this.renderProject} />

        }
    }
    render() {

        return (
            <div>
                <div className="header-container">
                    <h1 className="header-txt">
                        <i className="node js icon" />Node JS
                    </h1>
                </div>
                {this.renderSwitch()}
            </div>
        );
    }
};

export default NodeJS;