import React from 'react';
import Intro from './Intro';
import TypoGen from './TypoGen';
import Portfolio from './Portfolio';

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
            case 'typogenerator':
                return <TypoGen render={this.renderProject} />;
            case 'portfolio':
                return <Portfolio render={this.renderProject} />;
            default:
                return <Intro render={this.renderProject} />;
        }
    }
    render() {

        return (
            <div>
                <div className="header-container" style={{ backgroundColor: '#61DBFB' }}>
                    <h1 className="header-txt">
                        <i className="react icon" />React JS
                    </h1>
                </div>
                {this.renderSwitch()}
            </div>
        );
    }
};

export default ReactJS;