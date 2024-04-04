import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenFPS = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M11.871 9.433a1.04 1.04 0 0 1-.463-.313q-.655-.77-1.555-1.869c-.493-.604-1.08-1.204-1.903-1.247A2.524 2.524 0 0 0 5.28 8.19c-.3 1.817-.6 3.634-.887 5.451a7 7 0 0 0-.107.93 2.563 2.563 0 0 0 2.588 2.563 2.584 2.584 0 0 0 2.456-2.293h-.01l-.008-.004a1.791 1.791 0 0 1-.6-3.437c.844-.36 1.774.034 2.186.865.127.324.192.669.192 1.016l.013.009h1.672c.017 0 .025-.009.034-.017a.05.05 0 0 0 .017-.035c.043-.973.673-1.954 1.672-1.984a1.73 1.73 0 0 1 1.58 1.003c.507 1.114-.17 2.426-1.375 2.559-.03 0-.043.021-.043.051.219 1.427 1.415 2.451 2.842 2.258a2.58 2.58 0 0 0 2.177-2.982q-.411-2.638-.977-6.022a2.52 2.52 0 0 0-2.722-2.1c-.793.065-1.453.737-1.937 1.333l-.364.45q-.532.676-1.097 1.324c-.184.206-.42.36-.707.309z"
          />
          <path
            fill="currentColor"
            d="M9.343 14.014a.986.986 0 0 0 .968-.994.986.986 0 0 0-.968-.995.98.98 0 0 0-.969.995.98.98 0 0 0 .969.994m6.171-.998a.986.986 0 0 1-.968.994.986.986 0 0 1-.969-.995.985.985 0 0 1 .969-.99.986.986 0 0 1 .968.99"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#FPS__a)"
            d="M11.872 9.433a1.04 1.04 0 0 1-.463-.313 133 133 0 0 1-1.556-1.87c-.493-.604-1.08-1.204-1.903-1.247A2.524 2.524 0 0 0 5.28 8.19c-.3 1.817-.6 3.634-.887 5.451a7 7 0 0 0-.107.93 2.563 2.563 0 0 0 2.589 2.563 2.584 2.584 0 0 0 2.455-2.293h-.008l-.009-.004a1.791 1.791 0 0 1-.6-3.437c.845-.36 1.775.034 2.186.865.127.324.193.669.193 1.016l.013.009h1.671c.017 0 .026-.009.034-.017a.05.05 0 0 0 .018-.035c.042-.973.672-1.954 1.671-1.984a1.73 1.73 0 0 1 1.581 1.003c.506 1.114-.171 2.426-1.375 2.559-.03 0-.043.021-.043.051.218 1.427 1.414 2.451 2.841 2.258a2.58 2.58 0 0 0 2.177-2.982q-.411-2.638-.977-6.022a2.52 2.52 0 0 0-2.721-2.1c-.793.065-1.453.737-1.937 1.333l-.365.45q-.531.676-1.097 1.324c-.184.206-.42.36-.707.309z"
          />
          <path
            fill="url(#FPS__b)"
            d="M9.343 14.014a.986.986 0 0 0 .969-.994.985.985 0 0 0-.969-.995.98.98 0 0 0-.968.995.98.98 0 0 0 .968.994"
          />
          <path
            fill="url(#FPS__c)"
            d="M15.515 13.016a.986.986 0 0 1-.969.994.986.986 0 0 1-.968-.995.985.985 0 0 1 .968-.99.986.986 0 0 1 .969.99"
          />
          <defs>
            <linearGradient
              id="FPS__a"
              x1="4.878"
              x2="19.393"
              y1="11.198"
              y2="11.245"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#AA32F2" />
              <stop offset="1" stopColor="#8760FB" />
            </linearGradient>
            <linearGradient
              id="FPS__b"
              x1="-23.568"
              x2="92.048"
              y1="1.361"
              y2="1.894"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#AA32F2" />
              <stop offset="1" stopColor="#8760FB" />
            </linearGradient>
            <linearGradient
              id="FPS__c"
              x1="4.877"
              x2="19.393"
              y1="11.199"
              y2="11.246"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#AA32F2" />
              <stop offset="1" stopColor="#8760FB" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

TokenFPS.displayName = 'FPS'
