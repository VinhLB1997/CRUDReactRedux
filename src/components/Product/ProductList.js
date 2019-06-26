import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import ProductItem from './ProductItem'
import CallApi from '../../utils/CallApi'


function ProductList(props) {
    // var { products } = props
    const [data, setData] = useState([])

    useEffect(() => {
        CallApi('product', 'GET', null, res => { setData(res.data) })
    }, [data])


    return (
        <div>
            <div className="panel panel-primary">
                <div className="panel-heading">Danh sách sản phẩm</div>
                <div className="panel-body">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Tên sản phẩm</th>
                                <th>Hãng sản phẩm</th>
                                <th>Giá sản phẩm</th>
                                <th>Tình trạng</th>
                                <th>Tác vụ</th>
                            </tr>
                        </thead>
                        <tbody>
                            {showProduct(data)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )

    function showProduct(products) {
        var result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return <ProductItem key={index} product={product} />
            })
        }
        return result;
    }
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps, null)(ProductList);