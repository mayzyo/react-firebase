import 'react-hot-loader'
import ReactDOM from 'react-dom'
import { initializeApp } from 'firebase'
import Router, { AppRouting } from './app-routing'
import { firebaseKey } from './keystore'

// React dom container setup
let container = document.createElement('div')
container.id = 'app'
document.body.style.margin = '0'
document.body.appendChild(container)

// Firebase app setup
initializeApp(firebaseKey)

// Hot module reload setup
if (module.hot) {
    module.hot.accept('./app-routing', () => {
        ReactDOM.render(Router(), container)
    })
}

ReactDOM.render(Router(), container)

// App routing start
AppRouting.push('/')