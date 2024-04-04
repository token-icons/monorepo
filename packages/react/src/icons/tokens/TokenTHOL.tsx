import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenTHOL = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m9.3 8.379 2.443 2.057a.53.53 0 0 0 .694-.004l2.344-2.058a.565.565 0 0 0 .022-.827l-2.349-2.254a.527.527 0 0 0-.728-.009L9.283 7.54a.563.563 0 0 0 .021.84zm1.281-.257 1.235 1.041a.27.27 0 0 0 .351-.004l1.187-1.042a.287.287 0 0 0 .009-.42l-1.187-1.14a.266.266 0 0 0-.369 0l-1.234 1.136a.287.287 0 0 0 .008.429M7.66 8.73l4.054 3.09c.193.15.463.146.651-.008l3.819-3.073a.525.525 0 0 1 .703.03l1.8 1.744a.56.56 0 0 1 0 .806l-1.166 1.123 1.149 1.14a.567.567 0 0 1-.04.831l-4.47 3.707a3.18 3.18 0 0 1-2.03.737h-.23a3.2 3.2 0 0 1-2.027-.728l-4.487-3.712a.56.56 0 0 1-.03-.835l1.183-1.14-1.221-1.136a.566.566 0 0 1-.022-.801l1.659-1.72a.527.527 0 0 1 .702-.055m-.144 1.24 4.058 3.197c.189.146.45.15.643.008l4.359-3.205.998 1.05-5.357 3.844a.54.54 0 0 1-.643-.013L6.54 11.02zm0 3.154 4.058 3.197c.189.15.45.154.643.009l4.359-3.206.943 1.054-5.302 3.84a.53.53 0 0 1-.643-.012l-4.877-3.828z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#THOL__a)"
            d="m9.3 8.379 2.443 2.057a.53.53 0 0 0 .695-.004l2.344-2.058a.565.565 0 0 0 .021-.827l-2.348-2.254a.527.527 0 0 0-.729-.009L9.283 7.54a.563.563 0 0 0 .022.84zm1.282-.257 1.234 1.041a.27.27 0 0 0 .352-.004l1.187-1.042a.287.287 0 0 0 .008-.42l-1.187-1.14a.266.266 0 0 0-.368 0l-1.235 1.136a.287.287 0 0 0 .009.429m-2.923.608 4.054 3.09c.193.15.463.146.652-.008l3.818-3.073a.525.525 0 0 1 .703.03l1.8 1.744a.56.56 0 0 1 0 .806l-1.166 1.123 1.149 1.14a.567.567 0 0 1-.039.831l-4.47 3.707a3.18 3.18 0 0 1-2.031.737h-.227a3.2 3.2 0 0 1-2.027-.728l-4.487-3.712a.56.56 0 0 1-.03-.835l1.182-1.14-1.221-1.136a.566.566 0 0 1-.021-.801l1.658-1.72a.527.527 0 0 1 .703-.055m-.146 1.24 4.059 3.197c.188.146.45.15.643.008l4.358-3.205.999 1.05-5.357 3.844a.54.54 0 0 1-.643-.013L6.54 11.02zm0 3.154 4.059 3.197c.188.15.45.154.643.009l4.358-3.206.943 1.054-5.301 3.84a.53.53 0 0 1-.643-.012l-4.877-3.828z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <defs>
            <linearGradient
              id="THOL__a"
              x1="4.674"
              x2="9.93"
              y1="11.128"
              y2="11.128"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".16" stopColor="#27CAD8" />
              <stop offset="1" stopColor="#4412BD" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

TokenTHOL.displayName = 'THOL'
