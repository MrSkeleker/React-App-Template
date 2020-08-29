import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Views/Home';
import About from './Views/About';
import ProductPage from './Views/ProductPage';

function Routes() {
    return (
        <div className='p-3'>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/products/:id">
                    <ProductPage />
                </Route>
            </Switch>
        </div>
    )
}

export default Routes;