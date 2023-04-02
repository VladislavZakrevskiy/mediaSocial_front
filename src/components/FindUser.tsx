import React, { useState } from 'react'
import { useAppDispatch } from '../hooks/reduxHooks';
import { FindUser } from '../store/reducers/rtk async/FindUser';
import FallenListUserPub from './FallenListUserPub';
import { Box, IconButton, TextField } from '@mui/material';
import { SearchOutlined } from '@mui/icons-material';

const FindUserPublic = () => {
    const [query, setQuery] = useState('')

    const dispatch = useAppDispatch()
    
    const handleFindUser = () => {
        dispatch(FindUser({name: query}))
    }

    return (
        <Box
            component={'div'}
            display='flex'
            flexDirection='column'
        >
           <Box>
           <TextField 
                label='Search user or public'
                variant='standard'
                type="text" 
                value={query}
                onChange={e=>setQuery(e.target.value)}
                sx={{color: 'inherit', backgroundColor:'inherit'}}
            />
            <IconButton sx={{color:"inherit"}} onClick={handleFindUser}><SearchOutlined/></IconButton>
           </Box>
            <FallenListUserPub/>
        </Box>
    )
}

export default FindUserPublic