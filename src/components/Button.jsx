import React from 'react';
import './button.css';

const STYLES = [
    "btn--primary--solid",
    "btn--warning--solid",
    "btn--secondary--solid",
    "btn--success--solid",
    "btn--primary--outline",
    "btn--primary--outline2",
    "btn--primary--outline3",
    "btn--primary--outline4",
    "btn--success--outline",
    "btn--warning--outline",
    "btn--secondary--outline",
    "btn--other--solid",
    "btn--other--outline",
    "btn--prog--all",
    "btn--flappy",
    "btn--flappy--2",
    "btn--flappy--github",
    "btn--flappy--github2",
    "btn--flappy--github3",
    "btn--flappy--github4",
    "btn--flappy--github5",
    "btn--flies--yt",
    "btn--single"

];

const SIZES = [
    "btn--medium", "btn--small"
];
export const Button = ({ children, type, onClick, buttonStyle, buttonSize }) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle  : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
    return (
        <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}onClick={onClick} type={type}>
            {children}
        </button>
    )
}
