

export const API_Notification_messages = {
    loading: {
        title: "Loading...",
        message: 'Data is being loaded, please wait'
    },
    success: {
        title: "Success..",
        message: 'Data successfully loaded'
    },
    responseFailure: {
        title: "Error",
        message: 'An error occured while fetching data from the server, Please try Again'
    },
    requestFailure: {
        title: "Error",
        message: 'Ann error occured while parsing request data'
    },
    networkError: {
        title: "Error",
        message: 'Unable to connect to the server, Check your internet connection'
    }
}


//API Service call
export const SERVICE_URLS = {
    userSignup: { url: '/signup' , method: 'POST'},
    userLogin: { url: '/login' , method:  'POST'},
    uploadfile: {url: '/file/upload' , method: 'POST'},
    createPost: {url: 'create' ,method: 'POST'},
    getallPost: {url: '/posts' ,method: 'GET'},
    getPostByID: {url: 'post' ,method: 'GET', query:true},
    updatePostdetails: {url: 'update', method: 'PUT', query:true},
    deletePost: {url: 'delete' , method:'DELETE' , query:true},
    addComment: {url: '/comment/new' , method:'POST'},
    getComments: {url: 'comments' , method:'GET', query:true},
    deletecomment: {url: 'comment/delete' ,method:'DELETE',query:true}
}