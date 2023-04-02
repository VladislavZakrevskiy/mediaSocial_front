import React, {useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import PublicList from '../../components/Public/PublicList'
import { useGetPublicsQuery, useGetUserPublicQuery } from '../../store/reducers/rtk query/PublicApi'
import { useAppSelector } from '../../hooks/reduxHooks';
import { useInfiniteScroll } from '../../hooks/useInfScroll';
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';

const Publics = () => {
  const {user} = useAppSelector(state => state.AuthReducer)
  const [page, setPage] = useState<number>(1)
  const [limit, setLimit] = useState(5)
  const {data, isLoading, isFetching} = useGetPublicsQuery({limit,page})
  useInfiniteScroll(isFetching, page, setPage)
  const {data: publics, isLoading: isPublicLoading} = useGetUserPublicQuery(user?.user_id)
  const [panel, setPanel] = useState(true)

  if(isLoading){
    return (
        <div>
          Loading...
        </div>
      )
  }

  return (
    <Box component={'div'} display={'flex'} flexDirection={'column'} alignItems={'center'}>
        <Link style={{textDecoration: 'none', color:'#1976d2', fontSize: 24, fontWeight: 'bold', fontFamily: '"Roboto","Helvetica","Arial",sans-serif', margin: 10}} to={'/createPublic'}>
          Создать
        </Link>
        <Accordion sx={{width: '100%'}} expanded={panel} onChange={()=>setPanel(!panel)}>
          <AccordionSummary
            expandIcon={<ExpandMore/>}
            aria-controls='panel1a-content'
            id="panel1a-header"
          >
            <Typography>Ваши Сообщества</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <PublicList publics={publics} link={true}/>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{width: '100%'}}>
          <AccordionSummary
            expandIcon={<ExpandMore/>}
            aria-controls='panel1a-content'
            id="panel1a-header"
          >
            <Typography>Все Сообщества</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <PublicList publics={data} link={false}/>
          </AccordionDetails>
        </Accordion>  
    </Box>
  )
}

export default Publics