import * as axios from "axios";

const instance = axios.create({
   withCredentials: true,
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   headers: {
      "API-KEY": "8e7a3fe9-89c5-48d3-ba63-7d0a8f0f6fc3"
    }
})

export const usersAPI = {
   getUsers(currentPage = 1, pageSize = 10){
      return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
          return response.data;
        });
    }
}

