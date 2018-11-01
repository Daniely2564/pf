import React from 'react';

const Button = ({ button,changePage }) => {
    return (
        <a className="icon-button" style={{ borderColor: button.color, color: button.color }} id={button.id} onMouseEnter={()=>{changePage(button.name.toLowerCase())}}>
            <i className={`btn-icon ${button.icon} icon huge`} />
            <span className="btn-txt">
                {button.name}
            </span>
        </a>
    )
}

export default Button;