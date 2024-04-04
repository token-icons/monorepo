import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenYCC = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m14.572 13.019 3.553-2.268c.474-.353 1.173-1.396.307-2.811-.846-1.383-2.066-1.359-2.534-1.073l-5.619 3.481 1.946 1.085 3.928-2.335c.244-.148.413-.15.482-.03.07.122.034.224-.184.375l-1.88 1.183zm-6.46-6.13 3.674 2.015-1.933 1.236-2.031-1.135c-.275-.148-.397-.096-.453 0-.054.094-.032.248.21.372L12 11.811v2.296L5.862 10.76c-.482-.262-1.114-1.307-.338-2.731.792-1.457 2.046-1.374 2.588-1.14m2.174 10.671v-3.944L12 14.638v2.154c0 .346.1.418.214.416.199-.004.221-.151.215-.416v-4.975l1.714-.982v6.849c0 .535-.344 1.601-1.929 1.601-1.622 0-1.876-1.15-1.928-1.725"
          />
        </>
      ) : (
        <>
          <path
            fill="#0276F7"
            d="m14.571 13.019 3.553-2.268c.474-.353 1.173-1.396.308-2.811-.846-1.383-2.067-1.359-2.535-1.073l-5.619 3.481 1.947 1.085 3.928-2.335c.244-.148.413-.15.482-.03.069.122.034.224-.185.375l-1.879 1.183zm-6.46-6.13 3.675 2.015-1.933 1.236-2.031-1.135c-.276-.148-.398-.096-.453 0-.055.094-.032.248.21.372l4.42 2.434v2.296L5.863 10.76c-.482-.262-1.114-1.307-.339-2.731.793-1.457 2.046-1.374 2.589-1.14m2.174 10.671v-3.944L12 14.638v2.154c0 .346.1.418.213.416.2-.004.222-.151.215-.416v-4.975l1.714-.982v6.849c0 .535-.343 1.601-1.928 1.601-1.622 0-1.877-1.15-1.929-1.725"
          />
        </>
      )}
    </BaseIcon>
  ),
)

TokenYCC.displayName = 'YCC'
