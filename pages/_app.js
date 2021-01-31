import { AppWrappers } from '../components/AppWrappers'
import { AppGlobalStyles } from '../components/GlobalStyles'

function MyApp({ Component, pageProps }) {
    return (
        <AppWrappers>
            <AppGlobalStyles />
            <Component {...pageProps} />
        </AppWrappers>
    )
}

export default MyApp
