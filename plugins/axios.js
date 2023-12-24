export default function ({ $axios, redirect, app, store, req }) {
  // base_url for development mode
  // $axios.setBaseURL(`https://moltaqa.com.sa/control-panel/api/v1`)
  $axios.setBaseURL(`
  https://phpv8.aait-d.com/dukanv2/public/api/website/`);

  function setHeader() {
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    };

    return headers;
  }
  // Add a request interceptor
  $axios.interceptors.request.use(
    function (config) {
      // Do something before request is sent
      config.headers = setHeader(config);

      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );
}
