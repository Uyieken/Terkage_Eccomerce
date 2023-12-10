
import axios from 'axios';

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

const csrftoken = getCookie('csrftoken');
const apiUrl = "http://127.0.0.1:8000/";


const axiosInstance = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-Type": "application/json",
    "X-CSRFToken": csrftoken,
    // "X-Requested-With": "XMLHttpRequest",
    "Accept": "application/json",
    // "Authorization": `Bearer ${localStorage.getItem("access_token")}`,
    
  },
})

// axiosInstance.interceptors.response.use(
//   (response) => {
//     return response
//   },
//   (error) => {
//     const originalRequest = error.config
//     if (
//       error.response.status === 401 &&
//       originalRequest.url === `${apiUrl}/auth/token/refresh/`
//     ) {
//       window.location.href = "/login"
//       return Promise.reject(error)
//     }
//   }
// )

export { axiosInstance }

const register = async (full_name, email, password) => {
  
    axiosInstance
    .post(`user/register/`, {
      full_name,
      email,
      password,
      
    })
    .then((response) => {
      console.log(response.data)
       return response.data
    })
  .catch((error) => {
    console.log(error.response.data)
    return error.response.data
  })
}

const login = async (email, password) => {

    axiosInstance
      .post(`auth/token/`, {
        
        username: email,
        password:password,
        grant_type: "password",
        client_id: "ZECVBET3yZaaQEuIEBKqXEkbbQmgkbLHRpEnEBxB",
        client_secret: "bB1MSz7U3thg55lZAdFEHLGbbq3BKB18WouD1oeGSDPwUlVVtDvoIhX6OIPrXxfEJWSpvc5mlM7ULZHWKqeey5isAlnnPD5GPpFqfD91Ky8v1MNdVpPixDY4dzQb9vyJ",
      
        
    })
      .then((response) => {
      
      console.log("Login Successful :",response.data)
      return response.data
    })
  .catch((error) => {
    console.log(error)
    // return error.response.data
  })
}

export {
  register,
  login

}