import React, {useState, useRef,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ChatContainer from '../../components/Chat/Chat';
import ChatsNav from '../../components/Chat/ChatsNav'
import MessageForm from '../../components/Chat/MessageForm';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { ChatService } from '../../services/ChatService';
import { useGetMessagesQuery } from '../../store/reducers/rtk query/ChatApi';



const ChatById = () => {
    const { chatId } = useParams()
    const {user } = useAppSelector(state => state.AuthReducer)
    const [mes, setMessage] = useState<string[]>([])
    const socket = useRef()
    const [con, setCon] = useState(false)
    const [value, setValue] = useState('')
    const {data, isLoading} = useGetMessagesQuery(chatId) 
  
    useEffect(()=>{
        ChatService.connect(socket, setCon, setMessage, user, chatId)
    }, [])
  
    
    const sendMessage = async () => {
      ChatService.sendMessage(chatId, value, user, socket, setValue)
    }

    return (
        <div>
        <ChatsNav/>
        {
            isLoading ? <h1>Loading mes...</h1> :
            <ChatContainer setMessage={setMessage} chat= {mes} messages={data}/>
        }
          <MessageForm
            connect={sendMessage}
            value={value}
            setValue={setValue}
            /> 
        </div>
    )
}

export default ChatById