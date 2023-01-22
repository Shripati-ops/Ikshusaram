import axios from "axios";
import { refreshToken } from "./refreshToken";
axios.defaults.baseURL = "http://localhost:5000/";

// Request Interceptor. Gets Called when the server side call is initiated
axios.interceptors.request.use(
    async (config:any) => {
        // This fetches the tokens from the localStorage.
        const rawTokens:any = localStorage.getItem("tokens");
        const tokens = JSON.parse(rawTokens);
        const session = tokens;
        // check if the tokens exist. 
      if (session.tokens.token.Accesstoken) {
        config.headers = {
          authorization: `Bearer ${session.tokens.token.Accesstoken}`,
        };
      }
      // Return the configuration with the header.
      return config;
    },
    // If any error reject the promise
    (error) => Promise.reject(error)
  );
 // Response Interceptors. Gets called when the Server sends a response. 
  axios.interceptors.response.use(
      (response) => response,
    async (error) => {
        // In case error is received
      const config = error?.config;
      // If 401 is received
      if (error?.response?.status === 401 && !config?.sent) {
        config.sent = true;
        // call the refreshToken function from the refreshToken.ts file
        const result = await refreshToken();
        // receive the data. This is the new Access token
        if (result.data) {
            // Set the new token to the authorization header. 
          config.headers = {
            authorization: `Bearer ${result.data}`,
          };

        }
        return axios(config);
      }
      return Promise.reject(error);
    }
  );

  export const axiosPrivate = axios;