import Head from 'next/head'

import { HomePage } from '../components/home'

import type { NextPage } from 'next'

const PAGE_TITLE = 'braden lamb'
const PAGE_DESC =
    'braden lamb: building distributed, real-time systems and multiplayer games'
const PAGE_URL = 'https://retroscepter.com'
const ICON_URL = '/favicon.png'

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>{PAGE_TITLE}</title>
                <meta name="description" content={PAGE_DESC}></meta>
                <meta property="og:title" content={PAGE_TITLE} />
                <meta property="og:description" content={PAGE_DESC} />
                <meta property="og:url" content={PAGE_URL} />
                <link rel="icon" type="image/png" href={ICON_URL}></link>
            </Head>
            <HomePage />
        </>
    )
}

export default Home
