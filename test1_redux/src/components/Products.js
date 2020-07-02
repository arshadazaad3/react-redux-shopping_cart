import React from 'react'

export default class Products extends React.Component {
    render() {

        const productitems = this.props.products.map((product, i) => (
            <div className="col-md-4" key={i} style={{ color: 'black' }}>
                <div className="thumbnail text-center" style={{ backgroundColor: 'aliceblue' }}>
                    <a href={product.id} >
                        <img src={product.details.image} alt={product.details.image} />
                        <p style={{ color: 'black' }}>
                            ${product.details.price}
                        </p>
                    </a>
                    <div>
                        <b>
                            {product.name}
                        </b>
                        <button className="btn btn-primary" style={{ backgroundColor: 'black', color: 'white', marginTop: 10 }}
                            onClick={(e) => this.props.handleAddtoCart(e, product)}>Add to Cart</button>
                    </div>

                </div>
            </div>
        )
        )

        return (
            <div className="row">
                {productitems}
            </div>
        )
    }
}