import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductItem(props) {
    return (
        <React.Fragment>
            <tr>
                <td>{props.product.name}</td>
                <td>{props.product.provider}</td>
                <td>{props.product.price}</td>
                <td>{props.product.status ? 'Còn hàng' : 'Hết hàng'}</td>
                <td>
                    <Link to={`/product/update/${props.product.id}`}><span><i className="far fa-edit"></i></span></Link>&nbsp;
                    <span onClick={() => props.onDelete(props.product.id)}><i className="far fa-trash-alt"></i></span>
                </td>
            </tr>
        </React.Fragment >
    )
}