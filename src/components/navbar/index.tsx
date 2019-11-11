import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { useRoute, useAuth } from '@hooks'

// LOCAL DEPENDENCIES
import UserInfo from './user-info'

// ART ASSETS
import AcUnitIcon from '@material-ui/icons/AcUnit'

export default () => {

    const { navigate } = useRoute()
    const { user, logout } = useAuth()

    const handleLogout = () => {
        logout()
    }

    return (
        <AppBar position="static">
            <Toolbar>
                <AcUnitIcon />
                <Typography variant="h6" style={{ flexGrow: 1, marginLeft: 18 }}>
                    Dashboard
                </Typography>

                {user
                    ? <UserInfo name={user.displayName || user.email || '--'} handleClick={handleLogout} />
                    : <Button color="inherit" onClick={() => navigate('/login')}>Login</Button>
                }

            </Toolbar>
        </AppBar>
    )
}

// export interface Navbar {

// }