import React from 'react'
import Button from '../components/Items/Button'
import ProductList from '../components/Product/ProductList'
import { NavLink } from 'react-router-dom'

export default function ProductPage() {
    return (
        <React.Fragment>
            <Button><NavLink to="/product/add">Thêm mới sản phẩm</NavLink></Button>
            <hr />
            <ProductList />
        </React.Fragment >
    );
}