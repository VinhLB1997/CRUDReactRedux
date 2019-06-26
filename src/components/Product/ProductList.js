import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import ProductItem from './ProductItem'
import { actFetchAllProductApi, actDeleteProductByIdApi } from '../../actions/index'


function ProductList(props) {
    const [data, setData] = useState([])

    useEffect(() => {
        props.fetchAllProduct()
    }, [props])

    useEffect(() => {
        setData(props.products)
    }, [props.products])

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

    function onDelete(id) {
        props.onDelete(id)
    }

    function showProduct(products) {
        var result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return <ProductItem key={index} product={product} onDelete={onDelete} />
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

const mapDispatchToProps = (dispacth, props) => {
    return {
        fetchAllProduct: () => {
            dispacth(actFetchAllProductApi())
        },
        onDelete: id => {
            dispacth(actDeleteProductByIdApi(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);