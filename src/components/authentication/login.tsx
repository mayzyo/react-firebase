import React, { useState, ChangeEvent, FormEvent } from 'react'
import styled from 'styled-components'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

import { useAuth, useRoute } from '@hooks'
import { LoginForm } from '@models'

export default () => {

    const [form, setForm] = useState<LoginForm>({ email: '', password: '' })
    const [disabled, setDisabled] = useState<boolean>(false)
    const { signin } = useAuth()
    const { navigate } = useRoute()

    const handleChange = (name: keyof LoginForm) => (event: ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [name]: event.target.value })
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        setDisabled(true)
        const res = await signin(form)
        !res && setDisabled(false)
    }

    const handleAnomynous = () => {
        navigate('/')
    }

    return (
        <FormView onSubmit={handleSubmit}>
            <TextField
                id="email"
                label="Email"
                value={form.email}
                onChange={handleChange('email')}
                margin="normal"
                variant="outlined"
                type="email"
                required
                disabled={disabled}
            />
            <TextField
                id="password"
                label="Password"
                value={form.password}
                onChange={handleChange('password')}
                placeholder="Minimum of 8 characters, at least 1 letter or number"
                margin="normal"
                variant="outlined"
                type="password"
                required
                disabled={disabled}
            />

            <ButtonView>
                <FormButton
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={disabled}
                >
                    Login
                </FormButton>
                <FormButton disabled={disabled} onClick={handleAnomynous}>
                    Continue Anomynously
                </FormButton>
            </ButtonView>
        </FormView>
    )
}

// STYLE PROPERTIES
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