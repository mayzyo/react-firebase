import { useState, useEffect} from 'react'
import { auth } from 'firebase'
import { LoginForm } from '@models'
import useRoute from './useRoute'

const useAuth = () => {

    const { navigate } = useRoute()
    const [user, setUser] = useState(auth().currentUser)

    useEffect(() => {
        const sub = auth().onAuthStateChanged((user) => {
            setUser(user)
        })

        return () => sub()
    }, [])

    const signin = async (form: LoginForm) => {
        try {
            await auth().setPersistence(auth.Auth.Persistence.LOCAL)
            const response = await auth().signInWithEmailAndPassword(form.email, form.password)
            response.user && navigate('/')
        } catch (err) {
            console.error(err)
            // setBanner(err)
        }

        return false
    }

    const logout = async () => {
        try {
            await auth().signOut()
        } catch (err) {
            console.error(err)
        }
    }

    return {
        user,
        signin,
        logout
    }
}



export default useAuth