import '../styles/globals.css'
import { SnackbarProvider } from 'notistack'
import { Provider } from 'react-redux'
import { store } from '../redux/store'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <SnackbarProvider maxSnack={3} autoHideDuration={3000}>
        <Component {...pageProps} />
      </SnackbarProvider>
    </Provider>
  )
}

export default MyApp
