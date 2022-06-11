import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import type { FunctionComponent, MouseEventHandler } from 'react'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'

interface Props {
    icon: IconDefinition
    success?: boolean
    href?: string
    target?: string
    onClick?: MouseEventHandler<HTMLDivElement>
}

export const SocialButton: FunctionComponent<Props> = ({
    icon,
    success,
    href,
    target,
    onClick
}) => {
    const wrapperClasses = classNames(
        'flex items-center justify-center',
        'rounded-full',
        'cursor-pointer select-none',
        'hover:text-white',
        !success && 'text-white text-opacity-80',
        success && 'text-green-500',
        success && 'pointer-events-none'
    )

    const button = (
        <div className={wrapperClasses} onClick={onClick}>
            <FontAwesomeIcon icon={icon} className="w-6 h-6" />
        </div>
    )

    return href ? (
        <a href={href} target={target}>
            {button}
        </a>
    ) : (
        button
    )
}
