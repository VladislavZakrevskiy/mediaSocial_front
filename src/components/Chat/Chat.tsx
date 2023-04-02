import React, { useEffect, useRef, useState } from 'react'
import Message from './Message'
import { Box, Typography } from '@mui/material'

interface Props {
  messages: any[] | undefined
  chat:any[]
  setMessage: React.Dispatch<React.SetStateAction<string[]>>,
}

const ChatContainer = ({messages, chat, setMessage}: Props) => {

    if(!messages){
        return (
            <Box component={'div'} width={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <Typography fontSize={24}>Пусто</Typography>
            </Box>
            )
    }
    return (
        <Box component={'div'} display='flex' alignItems={'center'} flexDirection={'column'} width={'100%'}  >
            {
                messages.map(mes => 
                    <>
                        {
                            mes.event == 'connection' ? null
                            : <Message body={mes.body} id={mes.user_id}/>
                        }
                    </>
                            
                )
            }
            {
                chat.map(mes => 
                        <>
                            {
                                mes.event == 'connection' ? null
                                : <Message body={mes.body} id={mes.user_id}/>
                            }
                        </>
                    ).reverse()
            }

        </Box>
    )
}

export default ChatContainer