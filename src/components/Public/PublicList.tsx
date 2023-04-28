import React from 'react'
import { Link } from 'react-router-dom'
import { IPublic } from '../../models/IPublic'
import PublicItem from './PublicItem'
import { Box } from '@mui/material'

interface IPublicList {
    publics: IPublic[]
    link: boolean
}

const PublicList = ({publics, link}: IPublicList) => {
  return (
    <Box component={'div'} display='flex' justifyContent={'center'} alignItems={'center'} flexDirection={'column'} gap={3}>
        {
          publics ? publics.map(pub =>
              <Box component={'div'} display='flex' justifyContent={'center'} alignItems={'center'} flexDirection={'column'} gap={2}>
                <PublicItem 
                  title={pub.title}
                  about={pub.about}
                  admins={pub.admins}
                  key={pub.public_id}
                />
                {
                  !link ? 
                  <Link style={{textDecoration: 'none', color:'#1976d2', fontSize: 24, fontWeight: 'bold', fontFamily: '"Roboto","Helvetica","Arial",sans-serif'}} to={`/public?${pub.public_id&&`id=${pub.public_id}` }&isAdmin=false`}>
                    Перейти
                  </Link> :
                  <Link style={{textDecoration: 'none', color:'#1976d2', fontSize: 24, fontWeight: 'bold', fontFamily: '"Roboto","Helvetica","Arial",sans-serif'}} to={`/public?${pub.public_id&&`id=${pub.public_id}` }&isAdmin=true`}>
                    Перейти
                  </Link>
                }
              </Box>
            ) : <div>Произошла ошибочка</div> 
        }
        
    </Box>
  )
}

export default PublicList