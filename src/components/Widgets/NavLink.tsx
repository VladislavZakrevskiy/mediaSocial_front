import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

interface INavLinkProps {
    to: string
    title: string
}

const NavLink = ({to, title}: INavLinkProps) => {
  return (
    <Button variant='contained' sx={{minWidth: 50}}>
        <Link
            style={{
                textDecoration:'none',
                color:'inherit'
            }}
            to={to}>
                {title}
        </Link>
    </Button>
    
  )
}

export default NavLink