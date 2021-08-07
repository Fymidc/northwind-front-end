import React from 'react'
import { Route } from 'react-router-dom'
import { Grid} from 'semantic-ui-react'
import CartDetail from '../pages/CartDetail'
import ProductDetail from '../pages/ProductDetail'
import ProductList from '../pages/ProductList'
import Categories from './Categories'
import {ToastContainer} from 'react-toastify'
import ProductAdd from '../pages/ProductAdd'


function Dashboard() {
    return (
        <div >

            <ToastContainer position = "bottom-right" />

            <Grid  stackable >
                <Grid.Row>
                    <Grid.Column  width={4} >
                        <Categories />
                    </Grid.Column>
                    <Grid.Column width={12} >
                        <Route exact path="/" component={ProductList} />
                        <Route exact path="/products/:name" component={ProductDetail} />
                        <Route exact path="/cart" component={CartDetail} />
                        <Route exact path="/product/add" component={ProductAdd} />

                    </Grid.Column>
                </Grid.Row>
            </Grid>

        </div>
    )
}

export default Dashboard
