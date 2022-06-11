import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faCheck, faEnvelope } from '@fortawesome/free-solid-svg-icons'

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

    const discordIcon = copiedDiscord ? faCheck : faDiscord

    return (
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex flex-col items-center justify-center">
                <h1 className="font-bold text-center text-6xl text-green-500 select-none">
                    braden lamb
                </h1>
                <p className="mt-2 font-normal text-center text-lg text-white text-opacity-80 select-none">
                    building distributed, real-time systems
                    <br />
                    and multiplayer games
                </p>
                <div className="flex items-center justify-center mt-4 space-x-4">
                    <SocialButton
                        icon={<FontAwesomeIcon icon={discordIcon} />}
                        success={copiedDiscord}
                        onClick={copyDiscord}
                    />
                    <SocialButton
                        icon={<FontAwesomeIcon icon={faGithub} />}
                        href={GITHUB_LINK}
                        target="_blank"
                    />
                    <SocialButton
                        icon={<FontAwesomeIcon icon={faEnvelope} />}
                        href={EMAIL_LINK}
                        target="_blank"
                    />
                </div>
            </div>
        </div>
    )
}
