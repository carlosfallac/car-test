import axios from "axios";

export const apiAuth = axios.create({
  baseURL: "https://test-api-y04b.onrender.com",
});

export const apiBrands = axios.create({
  baseURL: "https://parallelum.com.br/fipe/api/v1/carros",
});
