import React from 'react'
import { connect } from 'react-redux'
import ProductItem from './ProductItem'

function ProductList(props) {
    var { products } = props
    function showProduct(products) {
        var result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return <ProductItem key={index} product={product} />
            })
        }
        return result;
    }
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
                                <th>Tác vụ</th>
                            </tr>
                        </thead>
                        <tbody>
                            {showProduct(products)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps, null)(ProductList);