import classNames from 'classnames'

import type { FunctionComponent, MouseEventHandler, ReactNode } from 'react'

interface Props {
    icon: ReactNode
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
    const classes = classNames(
        'w-12 h-12',
        'flex items-center justify-center',
        'rounded-full',
        'text-white',
        'cursor-pointer select-none',
        'hover:bg-white hover:text-gray-900',
        success && 'p-4',
        success && 'bg-green-500',
        success && 'text-white',
        success && 'pointer-events-none'
    )

    const button = (
        <div className={classes} onClick={onClick}>
            <div className="w-8 h-8 flex items-center justify-center">
                {icon}
            </div>
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
