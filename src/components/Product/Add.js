import React from 'react'
import Button from '../Items/Button'
import { NavLink } from 'react-router-dom'

export default function Add() {
    return (
        <React.Fragment>
            <h2>Thông tin sản phẩm</h2>
            <form>
                <div className="form-group">
                    <label>Tên sản phẩm</label>
                    <input type="text" className="form-control" id="email" placeholder="Tên sản phẩm" name="email" />
                </div>
                <div className="form-group">
                    <label>Hãng sản phẩm</label>
                    <input type="text" className="form-control" id="pwd" placeholder="Hãng sản phẩm" name="pwd" />
                </div>
                <div className="form-group">
                    <label>Giá sản phẩm</label>
                    <input type="text" className="form-control" id="pwd" placeholder="Giá sản phẩm" name="pwd" />
                </div>
                <button type="submit" className="btn btn-default">Submit</button>
                <Button><NavLink to="/product">Hủy</NavLink></Button>
            </form>
        </React.Fragment>
    );
}