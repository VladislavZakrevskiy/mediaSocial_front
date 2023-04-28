import React from 'react'
import { IComment } from '../../models/IComment';
import CommentItem from './CommentItem';

interface ICommentListProps {
    comments: IComment[] | undefined
}

const CommentList = ({comments}: ICommentListProps) => {
  return (
    <div>
        {
            comments?.length ? 
            comments?.map((comment: IComment) => 
            <CommentItem comment={comment}/>
            )
            : <div>Комментариев нет</div>
        }
    </div>
  )
}

export default CommentList