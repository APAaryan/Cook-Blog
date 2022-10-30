import axios from 'axios';

import {API_Notification_messages , SERVICE_URLS} from '../constants/config.js'
import { getaccesstoken ,getType} from '../utils/commonutils.js';

const API_URL='https://apcookblog.herokuapp.com' || 'http://localhost:8000';

const axiosInstance = axios.create({
    baseURL:API_URL,
    timeout:20000,
    headers: {
        "content-type":"application/json"
    }
})

axiosInstance.interceptors.request.use(
    function(config){
        if(config.TYPE.params){
            config.params = config.TYPE.params;
        }
        else if(config.TYPE.query){
            config.url=config.url + '/' + config.TYPE.query;
        }
        return config;
    },
    function(error){
        return Promise.reject(error);
    }
)

axiosInstance.interceptors.response.use(
    function(response){
        return processResponse(response);
    },
    function(error){
        return Promise.reject(processError(error));
    }
)


//if success -> return (isSuccess: true, data:object)
//if fail ->return(isFailure:true , status:string , msg:string , code:int)

const processResponse = (response) =>{
  if(response?.status===200){
    return {isSuccess: true ,data :response.data}
  }
  else{
    return {
        isFailure: true,
        status: response?.status,
        msg: response?.msg,
        code: response?.code
    }
  }
}

const processError =  (error) =>{
   if(error.response){
    console.log("Error in Response: " ,error.toJSON());
    return {
        isError: true,
        msg: API_Notification_messages.responseFailure,
        code: error.response.status
    }
   }
   else if(error.request){
    
    console.log("Error in Request: " ,error.toJSON());
    return {
        isError: true,
        msg: API_Notification_messages.requestFailure,
        code: ''
    }
   }
   else{
    console.log("Error in Network: " ,error.toJSON());
    return {
        isError: true,
        msg: API_Notification_messages.networkError,
        code:''
    }
   }
}

const API = {};

for (const [key, value] of Object.entries(SERVICE_URLS)) {
    API[key] = (body, showUploadProgress, showDownloadProgress) =>
        axiosInstance({
            method: value.method,
            url: value.url,
            data: value.method === 'DELETE' ? {} : body,
            responseType: value.responseType,
            headers: {
                authorization: getaccesstoken()
            },
            TYPE: getType(value, body),
            onUploadProgress: function(progressEvent) {
                if (showUploadProgress) {
                    let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    showUploadProgress(percentCompleted);
                }
            },
            onDownloadProgress: function(progressEvent) {
                if (showDownloadProgress) {
                    let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    showDownloadProgress(percentCompleted);
                }
            }
        });
}

export { API };

