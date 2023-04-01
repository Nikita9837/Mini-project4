// API NOTIFICATION MESSAGE
export const API_NOTIFICATION_MESSAGES ={
        loading:{
            title:"Loading....",
            message: "Data is being loaded,Please Wait."
        },
    success:{
        title:"Success",
        message:"Data successfully loaded."
    },
    responseFailure:{
        title:"Error",
        message:"An error occurred while fetching response from the server.\n Please try again."
    },
    requestFailure:{
        title:"Error",
        message:"An error occurred while parsing the data."
    },
    networkError:{
        title:"Error",
        message:"Unable to connect with the server.\n Please check the internet connectivity."
    }
}

// API SERVICE CALL
// SAMPLE REQUEST
// NEED SERVICE CALL: {url:'/', method: 'POST/GET/PUT/DELETE' params: true/false, query: true/false}
export const SERVICE_URLS ={
    userSignup: {url: '/signup', method: 'POST'}
}


// export default API_NOTIFICATION_MESSAGES;