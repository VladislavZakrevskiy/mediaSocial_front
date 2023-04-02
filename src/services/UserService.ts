import IAuthResponse from '../models/response/AuthResponse'
import { IUser } from '../models/IUser';
import $api from '../http';
import { AxiosResponse } from 'axios';

export class UserService {
    static async fetchUsers(email:string, password: string): Promise<AxiosResponse<IUser[]>> {
        return $api.get<IUser[]>('/auth/users')
    }

}