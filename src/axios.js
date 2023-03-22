import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://localhost:8000"
    // axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
    // axios.defaults.headers.common["Content-Type"] = "application/json";
    // axios.defaults.headers.common["Accept"] = "application/json";

// await axios.get("/sanctum/csrf-cookie");