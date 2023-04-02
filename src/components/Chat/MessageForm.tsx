import { SendOutlined, SendRounded } from '@mui/icons-material'
import { Box, IconButton, TextField } from '@mui/material'
import React, { FC } from 'react'
import SendIcon from '@mui/icons-material/Send';

type Props = {
    connect: ()=>void
    value: string
    setValue: (arg:string)=>void
}

const MessageForm: FC<Props> = ({connect, setValue, value}: Props) => {
  return (
    <Box component={'div'} width={'100%'} display={'flex'} flexDirection={'row'} margin={1}>
        <TextField value={value} onChange={e=>setValue(e.target.value)} multiline fullWidth/>
        <IconButton onClick={connect}><SendIcon/></IconButton>
    </Box>
  )
}

export default MessageForm