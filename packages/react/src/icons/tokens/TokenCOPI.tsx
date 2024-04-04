import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenCOPI = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M8.571 12.857c.215 3.214 2.332 5.242 3.609 5.756-1.5.66-4.963.407-4.963-5.953 0-6.39 3.836-7.714 5.867-7.933l2.027.441 1.603-.44.429.44c-.54.172-1.337 1.175-1.715 1.69-.54-1.06-1.82-1.287-2.344-1.287-2.485 0-4.778 3.322-4.513 7.286"
          />
          <path
            fill="currentColor"
            d="M16.714 4.727c-.698.201-1.375 1.029-1.603 1.543a2.3 2.3 0 0 0-2.04-1.127c-1.817 0-5.357 2.644-5.357 7.5 0 4.825 2.876 6 5.357 6 1.5 0 2.422-.973 2.268-1.573-.078-.296-.043-.883.677-.883s.767.441.677.883c-.227 1.101-1.972 2.644-4.907 2.644-2.932 0-5.246-3.527-5.923-5.07-.54-1.234-1.277-1.688-1.577-1.761.36-.707 1.2-.737 1.577-.664a7.59 7.59 0 0 1 7.208-7.933c.9 0 1.59.295 1.818.441a1.74 1.74 0 0 1 1.127-.441c.27 0 .484.214.698.441"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#COPI__a)"
            d="M8.572 12.857c.214 3.214 2.331 5.242 3.608 5.756-1.5.66-4.962.407-4.962-5.953 0-6.39 3.835-7.714 5.867-7.933l2.027.441 1.603-.44.428.44c-.54.172-1.337 1.175-1.714 1.69-.54-1.06-1.821-1.287-2.344-1.287-2.486 0-4.779 3.322-4.513 7.286"
          />
          <path
            fill="url(#COPI__b)"
            d="M16.715 4.727c-.699.201-1.376 1.029-1.603 1.543a2.29 2.29 0 0 0-2.04-1.127c-1.817 0-5.357 2.644-5.357 7.5 0 4.825 2.875 6 5.357 6 1.5 0 2.421-.973 2.267-1.573-.077-.296-.043-.883.677-.883s.767.441.677.883c-.227 1.101-1.971 2.644-4.907 2.644-2.931 0-5.246-3.527-5.923-5.07-.54-1.234-1.277-1.688-1.577-1.761.36-.707 1.2-.737 1.577-.664a7.59 7.59 0 0 1 7.209-7.933c.9 0 1.59.295 1.817.441a1.74 1.74 0 0 1 1.127-.441c.27 0 .484.214.699.441"
          />
          <defs>
            <linearGradient
              id="COPI__a"
              x1="10.715"
              x2="10.715"
              y1="4.286"
              y2="19.715"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7C4F14" />
              <stop offset=".17" stopColor="#CF8C21" />
              <stop offset=".28" stopColor="#F0B035" />
              <stop offset=".43" stopColor="#734A08" />
              <stop offset=".67" stopColor="#BC7908" />
              <stop offset="1" stopColor="#3E1E05" />
            </linearGradient>
            <linearGradient
              id="COPI__b"
              x1="10.505"
              x2="10.505"
              y1="4.286"
              y2="19.714"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#EFDF58" />
              <stop offset=".47" stopColor="#C67D16" />
              <stop offset="1" stopColor="#8B4102" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

TokenCOPI.displayName = 'COPI'
