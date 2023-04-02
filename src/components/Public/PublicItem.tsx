import React from 'react'
import { IPublic } from '../../models/IPublic';
import { Box, Typography } from '@mui/material';



const PublicItem = ({about,admins,title, public_id}: IPublic) => {

    return (
            <Box component={'div'} display={'flex'} flexDirection={'column'} alignItems={"center"}> 
                <Typography fontWeight={'bold'} variant='h4'>{title}</Typography>
                <Typography variant='h5'>{about}</Typography>
                <Box component={'div'}>
                    <Typography fontWeight={'bold'}>Админы Сообщества</Typography>
                    {
                        admins?.split(',').map((admin, i) => <Typography>{i + 1}. {admin}</Typography>)
                    }
                </Box>
            </Box>
    )
}

export default PublicItem