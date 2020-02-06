import React, { Component } from 'react'

import './Product.css'
import Facts from './Facts'

export default class FullProduct extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        var prod = this.props.product
        return (
            <div className="">
                <div className="">
                    <div className="">
                        <div className="">
                            <div className="">
                                <div className="">{prod.title}</div>
                            </div>
                            <div className="">
                                <Facts facts={prod.facts} />
                            </div>
                        </div>
                    </div>
                    <div className="">{prod.short}</div>
                </div>
            </div>
        )
    }
}
