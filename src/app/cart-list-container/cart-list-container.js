import React, {Component} from 'react'
import {CartList} from '../../cart-list'

export default class CartListContainer extends Component {
    render(){
        const{products}=this.props
        return(
            <CartList products={products}/>
        )
    }
}
