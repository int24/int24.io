import '@fontsource/space-mono/400.css'
import '@fontsource/space-mono/700.css'

import '../styles/index.css'

import type { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}

export default App
