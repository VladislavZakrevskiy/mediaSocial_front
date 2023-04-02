import React, {useState,useEffect} from 'react'
import { useCreateLikesMutation, useGetLikesQuery } from '../../store/reducers/rtk query/PostsApi'
import { useAppSelector } from '../../hooks/reduxHooks';
import Button from '@mui/material/Button';
import {Favorite} from '@mui/icons-material'
import CircularProgress from '@mui/material/CircularProgress';

interface ILikeProps {
    post_id: string
}

const Like = ({post_id}: ILikeProps) => {
    const {user} = useAppSelector(state => state.AuthReducer)
    const {data, isLoading} = useGetLikesQuery({post_id, user_id: user?.user_id})
    const [like, setLike] = useState<boolean>(false)
    const [count, setCount] = useState<number>(0)
    const [createLike] = useCreateLikesMutation()
    //deleteLike
    const writeLike = () => {
        if(like){
            //deleteLike
            setLike(false)
            setCount(count-1)
        }
        else {
            createLike({post_id, user_id: user?.user_id})
            setLike(true)
            setCount(count+1)
        } 
    }

    useEffect(()=>{
        data?.isliked == null ? setLike(false) : setLike(data?.isliked)
        data?.length == null ? setCount(0) : setCount(data?.length)
    }, [data?.isliked, data?.length])

    return (
        <div>
            {
                isLoading ?
                <CircularProgress/>
                : 
                <>
                    <Button 
                        variant = 'text'
                        sx={{color: like ? 'red' : 'inherit'}}
                        onClick={writeLike}
                        endIcon={<Favorite/>}
                        
                        > 
                        {count}
                    </Button>
                    
                </>
            }
        </div>
    )
}

export default Like