import React from 'react'

export function Elem({ children, className }) {
    return <Div className={className}>{children}</Div>
}

export function FluidContainer({ children, className }) {
    const classes = 'fluid-container ' + className
    return <Div className={classes}>{children}</Div>
}

export function Container({ children, className }) {
    const classes = 'container ' + className
    return <Div className={classes}>{children}</Div>
}

export function Row({ children, className }) {
    const classes = 'row ' + className
    return <Div className={classes}>{children}</Div>
}

export function Col({ children, className }) {
    const classes = 'col ' + className
    return <Div className={classes}>{children}</Div>
}

function Div({ children, className }) {
    return <div className={className}>{children}</div>
}
