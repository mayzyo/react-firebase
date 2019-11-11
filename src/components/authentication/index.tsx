import React, { useState, ChangeEvent, FormEvent } from 'react'
import { withStyles } from '@material-ui/core/styles'
import styled from 'styled-components'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'

import Login from './login'

export default () => {

    return (
        <Container>
            <Card>
                <CardMedia
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="Cover Banner"
                />
                <CardContent>
                    <Login />
                </CardContent>
            </Card>
        </Container>
    )
}

// STYLE PROPERTIES
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`
const FormView = styled.form`
    display: flex;
    flex-direction: column;
`
const ButtonView = styled.div`
    display: flex;
    flex-direction: row;
    width: 22vw;
    justify-content: space-between;
`
const FormButton = withStyles({
    root: {
        margin: '40px 0 10px 0'
    },
})(Button)