import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

// 本番環境以外はリクエストとレスポンス時にデバッグ用ログを出力する
if (process.env.NEXT_PUBLIC_ENV !== 'production') {
  instance.interceptors.request.use(
    (config) => {
      console.log(config);
      return config;
    },
    (error) => {
      console.log(error);
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response) => {
      console.log(response);
      return response;
    },
    (error) => {
      console.log(error);
      return Promise.reject(error);
    }
  );
}

export default instance;