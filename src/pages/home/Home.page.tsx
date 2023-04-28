import React, {useEffect, useState} from 'react'
import PostList from '../../components/Posts/PostList';
import { useGetPostsQuery } from '../../store/reducers/rtk query/PostsApi';


const Home = ( ) => {
  const [limit, setLimit] = useState(20)
  const [page, setPage] = useState(1)
  const {data, isLoading, isError, isFetching} = useGetPostsQuery({limit, page})

  useEffect(() => {
      const onScroll = () => {
        const scrolledToBottom =
          window.innerHeight + window.scrollY >= document.body.offsetHeight;
        if (scrolledToBottom && !isFetching ) {
          console.log("Fetching more data...");
          setPage(page + 1);
        }
      };
  
      document.addEventListener("scroll", onScroll);
  
      return function () {
        document.removeEventListener("scroll", onScroll);
      };
    }, [page, isFetching])

  return (
    <div> 
      {
        !isLoading || !isError ? 
        <PostList posts={data?.array}/> :
        <div>Загрузка</div>
      }
    </div>
  )
}

export default Home