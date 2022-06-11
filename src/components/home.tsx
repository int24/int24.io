import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faCopy, faEnvelope } from '@fortawesome/free-solid-svg-icons'

import { SocialButton } from './social-button'

import { DISCORD_USERNAME, EMAIL_LINK, GITHUB_LINK } from '../const'

import type { FunctionComponent } from 'react'

export const HomePage: FunctionComponent = () => {
    const [copiedDiscord, setCopiedDiscord] = useState(false)

    const copyDiscord = () => {
        if ('clipboard' in navigator)
            navigator.clipboard.writeText(DISCORD_USERNAME)

        setCopiedDiscord(true)
        setTimeout(() => setCopiedDiscord(false), 2000)
    }

    const discordIcon = copiedDiscord ? faCopy : faDiscord

    return (
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex flex-col items-center justify-center">
                <h1 className="font-bold text-6xl text-green-500 select-none">
                    braden
                </h1>
                <div className="flex items-center justify-center mt-2 space-x-2">
                    <SocialButton
                        icon={<FontAwesomeIcon icon={discordIcon} />}
                        success={copiedDiscord}
                        onClick={copyDiscord}
                    />
                    <SocialButton
                        icon={<FontAwesomeIcon icon={faGithub} />}
                        href={GITHUB_LINK}
                        target="github"
                    />
                    <SocialButton
                        icon={<FontAwesomeIcon icon={faEnvelope} />}
                        href={EMAIL_LINK}
                        target="email"
                    />
                </div>
            </div>
        </div>
    )
}
