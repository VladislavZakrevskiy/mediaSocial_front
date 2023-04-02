import { Avatar } from '@mui/material'
import React, {useEffect, useState} from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'
import { getImages } from '../../store/reducers/rtk async/GetImage'


interface IImage {
    id: string
}

const Image = ({id}:IImage) => {
    const [image, setImage] = useState <string> ('')
    const dispatch = useAppDispatch()
    useEffect(()=>{
        dispatch(getImages(id))
    },[])
    const {data, isError, isLoading} = useAppSelector(state => state.ImagesSlice)
    console.log(data)
    // useEffect(()=>{
    //     if(data !== undefined){
    //         
    //     }
    // },[data])
    if(isLoading) {
        return (<h1>Loading...</h1>)
    }
    if(isError){
        return (<>Error</>)
    }

    return (
        <Avatar alt='Фото' src={image}/>
    )
}

export default Image