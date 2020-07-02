import React from 'react';
import Products from './Products';
import Filter from './Filter'
import Basket from './Basket';

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = { products: [], filteredProducts: [], cartItems: [] };
        this.handleChangeSort = this.handleChangeSort.bind(this);
        this.handleChangeSize = this.handleChangeSize.bind(this);
        this.handleAddtoCart = this.handleAddtoCart.bind(this);
    }
    handleChangeSort(e) {
        this.setState({ sort: e.target.value });
        this.ListProducts();
    }

    handleChangeSize(e) {
        this.setState({ size: e.target.value });
        this.ListProducts();
    }

    ListProducts() {
        this.setState(state => {
            if (state.sort !== '') {
                state.products.sort((a, b) => (state.sort === 'lowest')
                    ? (a.details.price > b.details.price ? 1 : -1)
                    : (a.details.price < b.details.price ? 1 : -1))
            }
            else {
                state.products.sort((a, b) => (a.id > b.id ? 1 : -1))
            }

            if (state.size !== '') {
                return {
                    filteredProducts: state.products.filter(a =>
                        a.details.size.indexOf(state.size) >= 0
                    )
                }
            }
            return { filteredProducts: state.products };
        })
    }

    componentWillMount() {
        fetch('https://my-json-server.typicode.com/prasadhewage/ecommerce/shipments')
            .then(response => response.json())
            .then(data => {
                console.log(data[0].details.image);
                this.setState({
                    products: data,
                    filteredProducts: data
                })
            });

    }


    handleAddtoCart(e, product) {
        this.setState(state => {
            const cartItems = state.cartItems;
            let productAlreadyinCart = false
            cartItems.forEach(item => {
                if (item.id === product.id) {
                    productAlreadyinCart = true;
                    item.count++
                }
            })

            if (!productAlreadyinCart) {
                cartItems.push({ ...product, count: 1 })
            }
            localStorage.setItem("cartItems", JSON.stringify(cartItems))

            return cartItems;
        });


    }

    render() {
        return (
            <div className="container">
                <h1 style={{ color: 'black', fontWeight: 'bold' }}> React - Redux Shopping Cart</h1>
                <hr />
                <div className="row">
                    <div className="col-md-8">
                        <Filter
                            size={this.state.size}
                            sort={this.state.sort}
                            handleChangeSize={this.handleChangeSize}
                            handleChangeSort={this.handleChangeSort}
                            count={this.state.filteredProducts.length}
                        />
                        <hr />
                        <Products products={this.state.filteredProducts} handleAddtoCart={this.handleAddtoCart} />
                    </div>
                    <div className="col-md-4">
                        <Basket cartItems={this.state.cartItems} handleRemoveFromCart={this.handleRemoveCart}/> 
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;