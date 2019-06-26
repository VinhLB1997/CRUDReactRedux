import axios from 'axios'
import * as config from '../constants/Config'

export default function CallApi(enpoint, method = 'GET', data, action) {
    return axios({
        method, url: `${config.BASE_URL_API}/${enpoint}`, data
    }).then(response => {
        action(response)
    }).catch(err => {
        console.log(err)
    })
}