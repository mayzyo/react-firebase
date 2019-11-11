import { createBrowserHistory } from 'history'
const history = createBrowserHistory()

const useRoute = () => {

    const navigate = (route:string) => {
        history.push(route)
    }

    const back = () => {
        history.goBack()
    }

    return {
        navigate,
        back,
        history
    }
}

export default useRoute