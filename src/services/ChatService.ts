import { useAppSelector } from '../hooks/reduxHooks';
import React, { Dispatch } from 'react';
import { IUser } from '../models/IUser';
import { AnyAction, CombinedState, ThunkDispatch } from '@reduxjs/toolkit';
import { IRegState } from '../store/reducers/rtk/FullRegSlice';
import { IAuthState } from '../store/reducers/rtk/AuthSlice';
import { IChatState } from '../store/reducers/rtk/ChatSlice';
import { getUsers } from '../store/reducers/rtk async/Chat';

export class ChatService {
    static connect(
        socket: any, 
        setCon: (arg: boolean)=>void, 
        setMessage: React.Dispatch<React.SetStateAction<string[]>>,
        user: IUser | null, 
        chat_id: string | undefined
        ){
        socket.current = new WebSocket('ws://localhost:3001')
          socket.current.onopen = async () => {
              setCon(true)
              console.log('ws open')
              const message = {
                event: 'connection',
                email: user?.email,
                chat_id : chat_id,
                from_id: user?.user_id
              }
              socket.current.send(JSON.stringify(message))
          }   
          socket.current.onmessage = (event: any) => {
              const message = JSON.parse(event.data)
              setMessage((prev:any) => [message, ...prev])
          }
          socket.current.onclose = () => {
              console.log('ws close')
          }
          socket.current.onerror = () => {
              console.log('ws error')
          }
      }

    static sendMessage(
        chat_id: string | undefined, 
        value: string, 
        user: IUser | null, 
        socket: any, 
        setValue: React.Dispatch<React.SetStateAction<string>> 
        ) {
    const message = {
        email: user?.email,
        body: value,
        id: Date.now(),
        event: 'message',
        chat_id: chat_id,
        from_id: user?.user_id
        }
        socket.current.send(JSON.stringify(message))
        setValue('')
    }
    
}