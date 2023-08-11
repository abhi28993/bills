import axios from 'axios';
import {basePath} from './env';
import AsyncStorage from '@react-native-async-storage/async-storage';
let headers = {}

AsyncStorage.getItem('token').then(resp => {
  console.log('token ==================', resp);
  headers.token=resp
});



export const getStatusWiseOrderCount = async () =>{
  console.log('tpken',headers);
  let resp =await AsyncStorage.getItem('token')
  headers.token=resp
  global.token=resp
  let data =await axios.get(basePath + '/order/statuswisecount', {headers});
  return data
}

