import axios from "axios";

export const login = (body) => {
    axios.post(`http://localhost:3003/users/signup`, body)
    .then((response) => {
        localStorage.setItem("token", response.data);
    }).catch((error) => {
        console.log(error.response.data)
    }) 
}