import axios from 'axios';
import {basePath} from './env';
import AsyncStorage from '@react-native-async-storage/async-storage';
let headers = {}

AsyncStorage.getItem('token').then(resp => {
  console.log('token ==================', resp);
  headers.token=resp
});



export const getCategory = async () =>
  await axios.get(basePath + '/catalouge/get', {headers});

export const createCategory = async obj =>
  await axios.post(basePath + '/catalouge/create', obj,{headers});