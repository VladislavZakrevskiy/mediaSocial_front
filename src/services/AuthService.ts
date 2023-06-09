import IAuthResponse from '../models/response/AuthResponse'
import { IUser } from '../models/IUser';
import $api from '../http';
import axios, { AxiosResponse } from 'axios';

export class AuthService {
    static async login(email:string, password: string): Promise<AxiosResponse<IAuthResponse>> {
        return axios.post<IAuthResponse>('http://localhost:5000/auth/login', {email, password}, {withCredentials: true})
    }

    static async registration(email:string, password: string): Promise<AxiosResponse<IAuthResponse>> {
        return axios.post<IAuthResponse>('http://localhost:5000/auth/registration', {email, password}, {withCredentials: true})
    }

    static async logout(): Promise<void> {
        return $api.post('/auth/logout')
    }
}