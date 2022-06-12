import Script from 'next/script'

import '@fontsource/space-mono/400.css'
import '@fontsource/space-mono/700.css'

import '../styles/index.css'

import { GA_SCRIPT, GTAG_SRC } from '../const/analytics'

import type { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Script id="gtag" src={GTAG_SRC} async />
            <Script id="ga">{GA_SCRIPT}</Script>
            <Component {...pageProps} />
        </>
    )
}

export default App
