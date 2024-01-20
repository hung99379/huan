import React from 'react'

const Productltem = ({product}) => {
    return (
        <div className="shadow rounded mx-5 text-center">
            <img src={product.image} alt="" className="w-full" />
            <h2 className="text-lg">{product.name}</h2>
            <span>{product.price}</span>
        </div>
    )
}

export default Productltem