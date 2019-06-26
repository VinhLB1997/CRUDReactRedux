import * as Types from '../constants/ActionType'
import CallApi from '../utils/CallApi'

export const actFetchAllProductApi = () => {
    return dispatch => {
        CallApi('product', 'GET', null, res => { dispatch(actFetchAllProduct(res.data)) })
    }
}

export const actFetchAllProduct = products => {
    return {
        type: Types.FETCH_PRODUCT,
        products
    }
}


export const actDeleteProductByIdApi = id => {
    return dispatch => {
        CallApi(`product/${id}`, 'DELETE', null, res => { dispatch(actDeleteProductById(id)) })
    }
}

export const actDeleteProductById = id => {
    return {
        type: Types.DELETE_PRODUCT,
        id
    }
}

export const actAddProductApi = product => {
    return dispatch => {
        CallApi('product', 'POST', product, res => { dispatch(actAddProduct(product)) })
    }
}

export const actAddProduct = product => {
    return {
        type: Types.ADD_PRODUCT,
        product
    }
}

export const actGetProductByIdApi = id => {
    return dispatch => {
        CallApi(`product/${id}`, 'GET', null, res => { dispatch(actGetProductById(res.data)) })
    }
}

export const actGetProductById = product => {
    return {
        type: Types.GET_PRODUCT_ID,
        product
    }
}

export const actUpdateProductApi = (id, product) => {
    return dispatch => {
        CallApi(`product/${id}`, 'PUT', product, res => { dispatch(actUpdateProductById(res.data)) })
    }
}

export const actUpdateProductById = product => {
    return {
        type: Types.UPDATE_PRODUCT,
        product
    }
}