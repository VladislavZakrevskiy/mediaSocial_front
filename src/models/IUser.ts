export interface IUser {
    email: string,
    isActivated: boolean, 
    user_id: string
    first_name: string
    last_name: string
    username: string
}

export interface IChatResponse extends IUser {
    first_name:string
    last_name:string
    username:string
    chat_id: string
    from_id: string
    to_id:string
}