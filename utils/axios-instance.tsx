import axios from "axios";

export const API = axios.create({
    baseURL: process.env.INSTANCE_API,
});

