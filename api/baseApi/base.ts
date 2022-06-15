import axios from "axios";
import { useUser } from "../../hooks/data/useUser";
import authApi from "../auth/authApi";

export const client = axios.create({
    baseURL: 'https://api.yearbook.udayana.codes/web',
})