import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconApl = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M10.081 5.582c-.1.01-.148.036-.17.086-.035.073-.007.135.575 1.31.152.307.285.592.296.633a.6.6 0 0 1-.002.3c-.01.043-.133.31-.273.593-.35.712-.517 1.056-1.923 3.96L6.9 15.938c-.279.573-.457.953-.466.996-.018.088 0 .135.069.175.045.026.068.027.786.031.87.005 1.03-.004 1.144-.058.155-.071.187-.119.437-.632a1118.786 1118.786 0 0 0 1.699-3.498c.86-1.775 1.368-2.819 1.384-2.835.04-.04.389.668 2.983 6.045.196.408.38.771.406.806a.5.5 0 0 0 .1.1c.106.075.107.075.994.075.727 0 .834-.003.974-.025q.08-.01.16-.029a2 2 0 0 0-.071-.198c-.084-.21-.151-.35-2.136-4.434q-1.368-2.809-2.728-5.622c-.519-1.076-.507-1.052-.602-1.14-.137-.127-.107-.123-1.053-.123-.445 0-.85.005-.9.01"
          />
        </>
      ) : (
        <>
          <g clipPath="url(#APL__a)">
            <path fill="url(#APL__b)" d="M0 0h24v24H0z" />
            <path
              fill="#fff"
              d="M10.081 5.582c-.1.01-.148.036-.17.086-.035.073-.007.135.575 1.31.152.307.285.592.296.633a.6.6 0 0 1-.002.3c-.01.043-.133.31-.273.593-.35.712-.517 1.056-1.923 3.96L6.9 15.938c-.279.573-.457.953-.466.996-.018.088 0 .135.069.175.045.026.068.027.786.031.87.005 1.03-.004 1.144-.058.155-.071.187-.119.437-.632a1118.786 1118.786 0 0 0 1.699-3.498c.86-1.775 1.368-2.819 1.384-2.835.04-.04.389.668 2.983 6.045.196.408.38.771.406.806a.5.5 0 0 0 .1.1c.106.075.107.075.994.075.727 0 .834-.003.974-.025q.08-.01.16-.029a2 2 0 0 0-.071-.198c-.084-.21-.151-.35-2.136-4.434q-1.368-2.809-2.728-5.622c-.519-1.076-.507-1.052-.602-1.14-.137-.127-.107-.123-1.053-.123-.445 0-.85.005-.9.01"
            />
          </g>
          <defs>
            <linearGradient
              id="APL__b"
              x1="4.286"
              x2="21"
              y1="1.286"
              y2="26.143"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#5E9FF9" />
              <stop offset="1" stopColor="#0050F9" />
            </linearGradient>
            <clipPath id="APL__a">
              <path fill="#fff" d="M0 0h24v24H0z" />
            </clipPath>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconApl.displayName = 'Apl'

export default IconApl
