// import axios from "axios";

// const API = axios.create({
//   baseURL: "http://127.0.0.1:8000/",
// });

// API.interceptors.request.use((config) => {
//   const token = localStorage.getItem("access");
//   if (token) config.headers.Authorization = `Bearer ${token}`;
//   return config;
// });

// export default API;


// import axios from "axios";

// const API = axios.create({
//     baseURL: "http://127.0.0.1:8000/",
// });

// API.interceptors.request.use(config => {
//     const token = localStorage.getItem("token");
//     if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
// });

// export default API;





// import axios from "axios";

// const API = axios.create({
//   baseURL: "http://127.0.0.1:8000/",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// API.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("access");
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// export default API;

// import axios from 'axios';

// const API = axios.create({
//     baseURL: 'http://127.0.0.1:8000/',
// });

// // Добавляем токен в каждый запрос
// API.interceptors.request.use(config => {
//     const token = localStorage.getItem('access'); // JWT токен
//     if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
// });

// export default API;


import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000/",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Интерцептор: подставляем токен в каждый запрос
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access");
    if (token) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      };
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Интерцептор: обработка ошибок (например, истёкший токен)
API.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Если получаем 401 и это не повторный запрос
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refresh = localStorage.getItem("refresh");
        if (!refresh) {
          // refresh отсутствует → разлогиниваем
          localStorage.removeItem("access");
          localStorage.removeItem("refresh");
          window.location.href = "/login";
          return Promise.reject(error);
        }

        // Запрашиваем новый access токен
        const res = await axios.post("http://127.0.0.1:8000/api/token/refresh/", {
          refresh,
        });

        const newAccess = res.data.access;
        localStorage.setItem("access", newAccess);

        // Добавляем новый токен в заголовки и повторяем запрос
        originalRequest.headers.Authorization = `Bearer ${newAccess}`;
        return API(originalRequest);
      } catch (err) {
        // refresh тоже невалидный → разлогиниваем
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");
        window.location.href = "/login";
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);

export default API;
