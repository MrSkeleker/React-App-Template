import React from 'react';

function Product({product}) {
    return (
        <div>
            <h1 className="text=2xl font-bold mb-3">
                {product.name}
            </h1>
            <div>
                <img
                    src={product.images[0].imageUrl}
                    alt={product.name}
                />
            </div>
            <div className="font-bold text-xl mb-3">
                $ {product.price}
            </div>
            <div>
                {product.description}
            </div>
        </div>)
}

export default Product;