import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenVIDYA = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m11.931 16.144.047-.287c.018-.09.022-.188.022-.291V6.068c0-.23-.017-.462 0-.69q.013-.141-.107-.192c.051-.043.098-.052.137-.035l5.966 2.632q.02.011.008.03l-5.983 8.4q-.013.02-.034.008-.038-.012-.056-.077"
          />
          <path
            fill="currentColor"
            d="M11.893 5.186q.12.051.107.192v10.188q.002.155-.022.291l-.047.287-5.94-8.34v-.013zM12 17.156v2.143c0 .132.013.24.06.317q-.014.07-.047.094c-.018.008-.03.008-.039-.009q-3.41-5.993-6.827-11.983h.013L12 17.16z"
          />
          <path
            fill="currentColor"
            d="M12.06 19.616a.57.57 0 0 1-.065-.317q.02-.58 0-2.143c2.285-3.142 4.56-6.283 6.836-9.429q.01-.013.017-.004.012.002.005.017l-6.639 11.636a2 2 0 0 1-.15.24z"
          />
        </>
      ) : (
        <>
          <path
            fill="#C474E7"
            d="m11.932 16.144.047-.287c.017-.09.021-.188.021-.291V6.068c0-.23-.017-.462 0-.69q.015-.141-.107-.192c.052-.043.099-.052.137-.035l5.966 2.632q.02.011.009.03l-5.983 8.4q-.015.02-.034.008-.038-.012-.056-.077"
          />
          <path
            fill="#AC8BFE"
            d="M11.893 5.186q.122.051.107.192v10.188c0 .102-.004.201-.021.291l-.047.287-5.94-8.34v-.013z"
          />
          <path
            fill="#93D0FE"
            d="M12 17.156v2.143c0 .132.013.24.06.317q-.013.07-.047.094c-.017.008-.03.008-.038-.009Q8.564 13.708 5.147 7.718h.013L12 17.16z"
          />
          <path
            fill="#8694E8"
            d="M12.06 19.616a.57.57 0 0 1-.064-.317q.02-.58 0-2.143 3.424-4.711 6.836-9.429c.004-.009.013-.009.017-.004q.012.002.004.017l-6.638 11.636a2 2 0 0 1-.15.24z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

TokenVIDYA.displayName = 'VIDYA'
