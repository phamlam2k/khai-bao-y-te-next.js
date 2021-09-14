// import React from "react";
import axios from "axios";

export function get(method = 'get', url, data ){
    return axios({
        method : method,
        url : url,
        data : data

    }).catch(err =>{
        console.log(err)
    })

}

export function deleteListOfInformation(method= 'delete', endpoint, data){
    return axios({
        method : method,
        url : `https://611b1bf022020a00175a4341.mockapi.io/Khaibaoyte/${endpoint}`,
        data : data,

    }).catch(err => {
        console.log(err)
    })

}