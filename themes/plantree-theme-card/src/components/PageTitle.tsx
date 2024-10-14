import { ReactNode } from 'react'
import { cn } from '../lib/utils'

interface Props {
  className?: string
  children: ReactNode
}

export default function PageTitle({ children, className }: Props) {
  return (
    <h1
      className={cn(
        'text-2xl font-semibold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-13 mt-16 mb-8',
        className,
      )}
    >
      {children}
    </h1>
  )
}