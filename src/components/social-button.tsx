import Link from 'next/link'
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
        'w-14 h-14',
        'flex items-center justify-center',
        'rounded-full',
        'text-white text-2xl',
        'cursor-pointer select-none',
        'hover:bg-white hover:text-gray-900',
        success && 'bg-green-500',
        success && 'text-white',
        success && 'pointer-events-none'
    )

    const button = (
        <div className={classes} onClick={onClick}>
            {icon}
        </div>
    )

    return href ? (
        <Link href={href} target={target}>
            <a>{button}</a>
        </Link>
    ) : (
        button
    )
}
