import axios from 'axios';
import {basePath} from './env';
let headers = {token:global.token}





export const getTransection = async (type,page=0) =>
  await axios.get(basePath + '/transection/get/'+type+'?page='+page, {headers});

export const createTransection = async obj =>
  await axios.post(basePath + '/transection/save', obj,{headers});