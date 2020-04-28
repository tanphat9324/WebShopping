import {actionType} from '../contants/ProductListConstant';
import {settings} from '../../config/settings';
import axios from 'axios';

export const recvCategory = (data) => {
    return {
        type: actionType.GETCATEGORY,
        data
    }
}

export const recvProductList = data => {
    return {
        type: actionType.GETPRODUCTLIST,
        data
    }
}

export const getCategoryList = () => {
    return dispatch => {
        axios({
            method:'GET',
            url:settings.domain + `/categories?_page=1&_limit=4`
        }).then(res => {
            let {data} = res.data;
            // console.log(data);
            dispatch(recvCategory(data))
        }).catch(err => {

        })
    }
}

export const getProductList = (id) => {
    return dispatch => {
        axios({
            method:'GET',
            url: settings.domain + `/products?categoryId=${id}&_page=1&_limit=12`
        }).then(res =>{
            dispatch(recvProductList(res.data))
            // console.log(res.data);
        }).catch(err =>{

        })
    }
}