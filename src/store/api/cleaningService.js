import axios from "axios";

const cleaningServiceAPI = axios.create({
  baseURL: `https://cleaning-service-api.herokuapp.com`
});

export { cleaningServiceAPI };
