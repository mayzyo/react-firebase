import React, { useState, useEffect } from 'react'
import Chip from '@material-ui/core/Chip'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'

// ART ASSETS
import ExitToAppIcon from '@material-ui/icons/ExitToApp'

export default (props: UserInfo) => {

    const nameInitials = (val: string) => {
        const chunks = val.split(' ')
        return chunks.length == 2 ? `${chunks[0][0]}${chunks[1][0]}` : false
    }

    const [token, setToken] = useState(nameInitials(props.name))

    useEffect(() => {
        setToken(nameInitials(props.name))
    }, [props.name])

    return (
        <>
            <Chip avatar={token ? <Avatar>{token}</Avatar> : undefined} label={props.name} />
            <IconButton aria-label="logout" onClick={props.handleClick}>
                <ExitToAppIcon />
            </IconButton>
        </>
    )
}

export interface UserInfo {
    name: string
    handleClick: () => void
}