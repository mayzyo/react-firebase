import { hot } from 'react-hot-loader/root'
import React, { useState, useEffect } from 'react'
import { auth } from 'firebase'
import { useRoute } from '@hooks'
import { Authentication, Dashboard } from '@components'

export const AppRouting = useRoute().history

const Router = () => {
    
    const [route, setRoute] = useState({ pathname: '/' })

    useEffect(() => {
        AppRouting.listen((location, action) => setRoute(location))
    }, [])

    switch (route.pathname) {
        case '/':
            return <Dashboard />
        case '/login':
            return <Authentication />
        default:
           return  <Dashboard />
    }
}

const HotRouter = hot(Router)
export default () => <HotRouter />
