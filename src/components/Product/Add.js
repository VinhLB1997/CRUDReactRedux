import React, { useState } from 'react'
import Button from '../Items/Button'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { actAddProductApi } from '../../actions/index'

function Add(props) {

    const [name, setName] = useState("")
    const [provider, setProvider] = useState("")
    const [price, setPrice] = useState("")
    const [status, setStatus] = useState(1)

    const handleSubmit = (e) => {
        e.preventDefault();
        var product = { name, provider, price, status }
        props.addProduct(product)
        props.history.goBack()
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
                <button type="submit" className="btn btn-default">Lưu</button>
                <Button><NavLink to="/product">Hủy</NavLink></Button>
            </form>
        </React.Fragment>
    );
}

const mapDispatchToProps = (dispacth, props) => {
    return {
        addProduct: product => {
            dispacth(actAddProductApi(product))
        }
    }
}
export default connect(null, mapDispatchToProps)(Add);