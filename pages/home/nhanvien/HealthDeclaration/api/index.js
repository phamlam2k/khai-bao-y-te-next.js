// import React from 'react';
import axios from 'axios';

export function getList(method = 'get', url, data){
    return  axios({
        method: method,
        url: `https://vapi.vnappmob.com/api/${url}`,
        data: data
    }).catch(err => {
        console.log(err);
    })
}

export function Method_Post(method = 'post', endpoint, body){
    return axios({
        method: method,
        url: `https://611b1bf022020a00175a4341.mockapi.io/${endpoint}`,
        data: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
          },
    }).catch(err => {
        console.log(err.response);
    })
}