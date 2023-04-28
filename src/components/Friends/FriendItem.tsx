import React from 'react'
import { IUser } from '../../models/IUser';

interface IFriendItemProps {
    friend: IUser
}

const FriendItem = ({friend}: IFriendItemProps) => {
  return (
    <div>
        {/* картинка друга */}
        <p>{friend.first_name} '{friend.username}' {friend.last_name}</p>
    </div>
  )
}

export default FriendItem