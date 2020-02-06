import React, { Component } from 'react'

import './Product.css'
import { GetProducts } from '../../services/ProductAPI'
import Product from '../products/Product'

export default class Products extends Component {
    constructor() {
        super()
        this.state = { isLoaded: false, products: [] }
    }
    componentDidMount() {
        this.setState({ isLoaded: true, products: GetProducts() })
    }
    render() {
        return (
            <>
                <p>Some Text for productlist</p>
                <div className="">
                    <div className="">
                        <div className="">
                            {this.state.isLoaded ? (
                                this.state.products.map(product => (
                                    <Product
                                        key={product.id}
                                        product={product}
                                    />
                                ))
                            ) : (
                                <p>Loading ...</p>
                            )}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
