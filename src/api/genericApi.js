import axios from 'axios';

function getApi(url) {
    return axios.get(url);
}

function postApi(url,data={}) {
    return axios.post(url, data);
}

function putApi(url,data={}) {
    return axios.put(url, data);
}

function deleteApi(url,data={}) {
    return axios.delete(url, data);
}

axios.all([getApi(), postApi(), putApi(), deleteApi()])
  .then(axios.spread(function (getRes, postRes, putRes, deleteRes) {
    console.log(getRes, postRes, putRes, deleteRes)
  })).catch(err=>{
      console.log('err',err)
  })