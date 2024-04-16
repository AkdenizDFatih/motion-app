import ReactDOM from 'react-dom/client'
import {Provider} from 'react-redux'
import store from './store/store'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'
import App from './App.jsx'
import GlobalStyle from './styles/globalStyles'
import {ThemeProvider} from 'styled-components'
import theme from './styles/theme.js'


TimeAgo.addDefaultLocale(en)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Provider store={store}>
        <ThemeProvider theme={theme} >
        <GlobalStyle/>
        <App/>
        </ThemeProvider>
    </Provider>
)
