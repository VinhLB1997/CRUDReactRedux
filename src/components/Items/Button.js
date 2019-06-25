import React from 'react'

export default function Button(props) {
    return (
        <React.Fragment>
            <button type="button" className="btn btn-default">{props.children}</button>
        </React.Fragment>
    )
}