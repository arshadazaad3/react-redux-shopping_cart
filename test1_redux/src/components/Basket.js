import React, { Component } from 'react'

export default class Basket extends Component {
    render() {
        const { cartItems } = this.props;
        return (
            <div className="alert alert-info" style={{ backgroundColor: 'black', marginBottom: 40}}>
                {cartItems === 0 ? "Basket is Empty" : <div>You have {cartItems.length} products in the basket</div>}
                {cartItems.length > 0 &&
                    <div>
                        <ul>
                            {cartItems.map(item =>
                                <li>
                                    <b>{item.name}
                                    </b>
                                </li>
                            )}
                        </ul>
                    </div>}
            </div>
        )
    }


}