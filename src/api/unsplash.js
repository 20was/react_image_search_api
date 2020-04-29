import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID QMSTBWOyiZZ8GgtCcG4JICoUXm2WB8mKnxjrK7vXgYk",
  },
});
