import React from 'react'

export default function ProductItem(props) {
    return (
        <React.Fragment>
            <tr>
                <td>{props.product.name}</td>
                <td>{props.product.provider}</td>
                <td>{props.product.price}</td>
                <td>
                    <span><i className="far fa-edit"></i></span>&nbsp;
                    <span><i className="far fa-trash-alt"></i></span>
                </td>
            </tr>
        </React.Fragment>
    )
}