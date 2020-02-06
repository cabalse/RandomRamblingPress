import React, { Component } from 'react'

export default class Facts extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        var fact = this.props.facts
        return (
            <div className="">
                <div className="">
                    <div className="">Type</div>
                    <div className="">{fact.type}</div>
                </div>
                <div className="">
                    <div className="">Format</div>
                    <div className="">{fact.format}</div>
                </div>
                <div className="">
                    <div className="">Pages</div>
                    <div className="">{fact.pages}</div>
                </div>
            </div>
        )
    }
}
