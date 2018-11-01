import React from 'react';

const Button = ({ button }) => {
    return (
        <a className="icon-button" style={{ borderColor: button.color, color: button.color }} id={button.id}>
            <i className={`btn-icon ${button.icon} icon huge`} />
            <span className="btn-txt">
                {button.name}
            </span>
        </a>
    )
}

export default Button;