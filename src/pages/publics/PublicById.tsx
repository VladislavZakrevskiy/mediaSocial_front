import React, {useState} from 'react'
import { useLocation, useParams, useSearchParams } from 'react-router-dom'
import PublicItem from '../../components/Public/PublicItem'
import { useGetPublicQuery } from '../../store/reducers/rtk query/PublicApi'
import { IPublic } from '../../models/IPublic';
import PostList from '../../components/Posts/PostList';
import PostForm from '../../components/Posts/postForm';
import { useGetPostsPublicQuery } from '../../store/reducers/rtk query/PostsApi';


const PublicById = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const id = searchParams.get('id')
    const isAdmin = searchParams.get('isAdmin')
    const {data, isLoading, isError} = useGetPublicQuery(id)
    const [page, setPage] = useState(1)
    const {data: posts, isFetching, isLoading: isPostsLoading} = useGetPostsPublicQuery({limit:10, page, id})
    console.log(posts)
    if(isLoading) {
        return ( <div>Loading...</div> )
    }

    if(isError){
        return (<div>Error</div>)
    }

  return (
    <div>
        {
            isAdmin == 'true' ? 
            <PostForm
                    id={id}
                />
            : false
        }

        {
            data ?  
            <div>
                <PublicItem
                    about={data.about}
                    admins={data.admins}
                    title={data.title}
                />
            </div>
            : <div> Такого нет </div>

        }
        {
            posts ? 
            <PostList posts={posts}/>
            : <div>Пока нет постов</div>
        }
    </div>
  )
}

export default PublicById