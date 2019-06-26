import React, { useState, useEffect } from 'react'
import Button from '../Items/Button'
import { NavLink } from 'react-router-dom'
import { actGetProductByIdApi, actUpdateProductApi } from '../../actions/index'
import { connect } from 'react-redux'

function Update(props) {

    const [name, setName] = useState("")
    const [provider, setProvider] = useState("")
    const [price, setPrice] = useState("")
    const [status, setStatus] = useState(1)

    useEffect(() => {
        var { id } = props.match.params
        if (id) {
            props.getProductById(id)
        }
    }, [])

    useEffect(() => {
        var product = props.products;
        setName(product.name);
        setProvider(product.provider);
        setPrice(product.price);
        setStatus(product.status);
    }, [props.products])

    const handleSubmit = (e) => {
        e.preventDefault();
        var { id } = props.match.params
        if (id) {
            var product = { name, provider, price, status }
            props.updateProduct(id, product)
            props.history.goBack()
        }
    }

    return (
        <React.Fragment>
            <h2>Thông tin sản phẩm</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Tên sản phẩm</label>
                    <input type="text" value={name} onChange={e => setName(e.target.value)} className="form-control" placeholder="Tên sản phẩm" name="name" required />
                </div>
                <div className="form-group">
                    <label>Hãng sản phẩm</label>
                    <input type="text" value={provider} onChange={e => setProvider(e.target.value)} className="form-control" placeholder="Hãng sản phẩm" name="provider" />
                </div>
                <div className="form-group">
                    <label>Giá sản phẩm</label>
                    <input type="text" value={price} onChange={e => setPrice(e.target.value)} className="form-control" id="pwd" placeholder="Giá sản phẩm" name="price" />
                </div>
                <div className="form-group">
                    <label>Tình trạng</label>
                    <select className="form-control" value={status} onChange={e => { setStatus(parseInt(e.target.value)) }} name="status">
                        <option value={0}>Hết hàng</option>
                        <option value={1}>Còn hàng</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-default">Cập nhật</button>
                <Button><NavLink to="/product">Hủy</NavLink></Button>
            </form>
        </React.Fragment>
    );
}
const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispacth, props) => {
    return {
        getProductById: id => {
            dispacth(actGetProductByIdApi(id))
        },
        updateProduct: (id, product) => {
            dispacth(actUpdateProductApi(id, product))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Update);