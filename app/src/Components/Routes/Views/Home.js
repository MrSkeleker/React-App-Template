import React from 'react';
import Loader from '../../Loader/Loader';
import ProductCard from './ProductCard/ProductCard';
import { useAxiosGet } from '../../../Hooks/HttpRequest';

function Home() {
    const url = `https://5f494a138e271c001650c8e9.mockapi.io/api/v1/ProductsList?page=1&limit=10`;
    let products = useAxiosGet(url)
    let content = null;

    if(products.error) {
        content = <p>
            There was an error. Please refresh or try another page
        </p>
    }

    if(products.loading) {
        content = <Loader />
    }

    if(products.data) {
        content = (
        <div>
            {products.data.map((product) => <ProductCard key={product.id} product={product}/>)}
        </div>)
    }

    return (
    <div>
        <h1 className='font-bold text-2xl mb-3'>
            Best Products
        </h1>
        {content}
    </div>)
}

export default Home;