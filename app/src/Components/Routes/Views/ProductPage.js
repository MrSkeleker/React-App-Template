import React from 'react';

import Product from './Product/Product';
import { useParams } from 'react-router-dom';
import Loader from '../../Loader/Loader';
import { useAxiosGet } from '../../../Hooks/HttpRequest';

function ProductPage() {
    const {id} = useParams();
    const url = `https://5f494a138e271c001650c8e9.mockapi.io/api/v1/ProductsList/${id}`;
    let product = useAxiosGet(url);
    let content = null;
   
    if(product.error) {
        content = <p>
            There was an error. Please refresh or try another page
        </p>
    }

    if(product.loading) {
        content = <Loader />
    }

    if(product.data) {
        content = <Product product={product.data}/>
    }

    return (
        <div className='flex justify-center'>
            {content}
        </div>
    )
}

export default ProductPage;