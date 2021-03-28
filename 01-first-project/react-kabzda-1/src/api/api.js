import * as axios from "axios";

const instance = axios.create({
   withCredentials: true, //because of cross-domen we need this param to autosend cookie
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
    },
  follow(userId){
    return instance.post(`follow/${userId}`);
  },
  unfollow(userId){
    return instance.delete(`follow/${userId}`);
  }

}
export const profileAPI = {
  getProfile(userId){
    return instance.get(`profile/` + userId);
  },
  getStatus(userId) {
    return instance.get(`profile/status/` + userId);
  },
  updateStatus(status) {
    return instance.put(`profile/status/`, { status: status });
  }
}
export const headerAPI = {
  getMe(){
    return instance.get(`auth/me`)
  }
}