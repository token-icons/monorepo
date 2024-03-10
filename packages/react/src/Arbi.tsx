import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconArbi = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m13.149 13.174-.75 2.045a.24.24 0 0 0 0 .18l1.285 3.522 1.496-.857-1.791-4.89a.129.129 0 0 0-.24 0m1.5-3.445a.128.128 0 0 0-.24 0l-.75 2.044a.24.24 0 0 0 0 .18l2.112 5.768 1.492-.857-2.615-7.14z"
          />
          <path
            fill="currentColor"
            d="M12 5.147q.057 0 .107.03l5.786 3.364a.21.21 0 0 1 .107.185v6.544a.22.22 0 0 1-.107.184l-5.786 3.377a.22.22 0 0 1-.214 0L6.107 15.46A.21.21 0 0 1 6 15.274V8.726c0-.078.043-.146.107-.185l5.786-3.364A.2.2 0 0 1 12 5.143zm0-.861c-.201 0-.407.055-.587.158L5.73 7.714a1.17 1.17 0 0 0-.587 1.012v6.544c0 .416.223.806.587 1.016l5.683 3.27a1.17 1.17 0 0 0 1.174 0l5.683-3.27a1.16 1.16 0 0 0 .587-1.016V8.726c0-.416-.223-.806-.587-1.012l-5.683-3.27A1.2 1.2 0 0 0 12 4.286"
          />
          <path
            fill="currentColor"
            d="m8.241 17.73.523-1.427 1.05.87-.981.9z"
          />
          <path
            fill="currentColor"
            d="M11.524 8.143H10.08a.26.26 0 0 0-.24.175L6.754 16.86l1.487.87 3.403-9.407a.134.134 0 0 0-.124-.18zm2.52 0h-1.44a.26.26 0 0 0-.24.171L8.833 18.06l1.491.87 3.84-10.611a.13.13 0 0 0-.013-.12.13.13 0 0 0-.107-.056"
          />
        </>
      ) : (
        <>
          <g clipPath="url(#ARBI__a)">
            <path fill="#213147" d="M0 0h24v24H0z" />
            <path
              fill="#12AAFF"
              d="m13.149 13.174-.75 2.045a.24.24 0 0 0 0 .18l1.285 3.522 1.496-.857-1.791-4.89a.129.129 0 0 0-.24 0m1.5-3.445a.128.128 0 0 0-.24 0l-.75 2.044a.24.24 0 0 0 0 .18l2.112 5.768 1.492-.857-2.615-7.14z"
            />
            <path
              fill="#9DCCED"
              d="M12 5.147q.057 0 .107.03l5.786 3.364a.21.21 0 0 1 .107.185v6.544a.22.22 0 0 1-.107.184l-5.786 3.377a.22.22 0 0 1-.214 0L6.107 15.46A.21.21 0 0 1 6 15.274V8.726c0-.078.043-.146.107-.185l5.786-3.364A.2.2 0 0 1 12 5.143zm0-.861c-.201 0-.407.055-.587.158L5.73 7.714a1.17 1.17 0 0 0-.587 1.012v6.544c0 .416.223.806.587 1.016l5.683 3.27a1.17 1.17 0 0 0 1.174 0l5.683-3.27a1.16 1.16 0 0 0 .587-1.016V8.726c0-.416-.223-.806-.587-1.012l-5.683-3.27A1.2 1.2 0 0 0 12 4.286"
            />
            <path fill="#213147" d="m8.241 17.73.523-1.427 1.05.87-.981.9z" />
            <path
              fill="#fff"
              d="M11.524 8.143H10.08a.26.26 0 0 0-.24.175L6.754 16.86l1.487.87 3.403-9.407a.134.134 0 0 0-.124-.18zm2.52 0h-1.44a.26.26 0 0 0-.24.171L8.833 18.06l1.491.87 3.84-10.611a.13.13 0 0 0-.013-.12.13.13 0 0 0-.107-.056"
            />
          </g>
          <defs>
            <clipPath id="ARBI__a">
              <path fill="#fff" d="M0 0h24v24H0z" />
            </clipPath>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconArbi.displayName = 'Arbi'

export default IconArbi
