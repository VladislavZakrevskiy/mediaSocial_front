import React, {useEffect} from 'react';
export const useInfiniteScroll = 
    ( 
    isFetching: boolean,
    page: number, 
    setPage: React.Dispatch<React.SetStateAction<number>> 
    ) => {
    useEffect(() => {
        const onScroll = () => {
          const scrolledToBottom =
            window.innerHeight + window.scrollY >= document.body.offsetHeight;
          if (scrolledToBottom && !isFetching ) {
            setPage(page + 1);
          }
        };
    
        document.addEventListener("scroll", onScroll);
    
        return function () {
          document.removeEventListener("scroll", onScroll);
        };
      }, [page, isFetching]);
      return page
}