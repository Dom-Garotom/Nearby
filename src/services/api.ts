import   axios  from "axios"

export const api = axios.create({
    baseURL: "http://10.112.1.178:3333",
    timeout: 1000,
})