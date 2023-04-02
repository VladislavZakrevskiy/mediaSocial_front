import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCreatePublicMutation } from '../../store/reducers/rtk query/PublicApi'
import { Button, IconButton, TextField } from '@mui/material'
import { Add, HdrPlus, PlusOne } from '@mui/icons-material'

interface IPublic {
    name: string
    password: string
    about: string
    admins: string[] 
}

interface IAdmin {
    admin: string | number | readonly string[] | undefined
}



const CreatePublic = () => {
    const [publicTeam, setPublic] = useState<IPublic>()
    const [admins, setAdmins] = useState<(string | null)[]>([null])
    const [createPub, {isLoading, isSuccess}] = useCreatePublicMutation()
    const nav = useNavigate()

    const handleForm = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
        let data = [...admins]
        data[index] = event.target.value
        setAdmins(data)
    }

    const addFields = () => {
        setAdmins([...admins, ''])
    }

    useEffect(()=>{
        setPublic({...publicTeam, admins: admins} as IPublic)
    },[admins])

    const createPublic = async () => {
        await createPub(publicTeam)
        if(isSuccess){
            nav('/public')
        }
    }

    if(isLoading) {
        return (
                <div>
                    Loading...
                </div>
            )
    }

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '70%', gap: 10}}>
            <TextField fullWidth
            label='Имя Сообщества'
            type="text" 
            value={publicTeam?.name}
            onChange={e=>setPublic({...publicTeam, name:e.target.value} as IPublic)}
            />

            <TextField fullWidth
            label='Пароль'
            type="password" 
            value={publicTeam?.password}
            onChange={e=>setPublic({...publicTeam, password:e.target.value} as IPublic)}
            />

            <TextField fullWidth
            label='О сообществе'
            type="text" 
            value={publicTeam?.about}
            onChange={e=>setPublic({...publicTeam, about:e.target.value} as IPublic)}
            />
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 5}}>
            {
                admins.map((admin, i) => 
                <TextField 
                    label={`Админ ${i + 1}`}
                    type="text" 
                    value={admin as string | number | readonly string[] | undefined} 
                    onChange={e=>handleForm(i, e)}
                />
                )
            }
            <IconButton onClick={addFields}><Add/></IconButton>
            </div>
            <Button fullWidth variant='contained' onClick={createPublic}>Создать</Button>    
        </div>
    )
}

export default CreatePublic