import React, {useState} from 'react'
import { useCreatePostMutation } from '../../store/reducers/rtk query/PostsApi'

interface IPostFormPost {
    id: string | null 
}

const PostForm = ({id}:IPostFormPost) => {
    const [value, setValue] = useState('')
    const [createPost, {}] = useCreatePostMutation()
  
    const handleCreatePost = () => {
      createPost({body: value, owner: 'public', id})
    }
  

  return (
      <div>
        <input 
          placeholder='текст'
          type="text" 
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <button onClick ={handleCreatePost}>Создать</button>
      </div>
  )
}

export default PostForm