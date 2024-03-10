import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconApt = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m15.93 9.763-7.869 2.794a.584.584 0 0 1-.775-.651l.728-3.96a.57.57 0 0 1 .206-.347l3.411-2.752a.59.59 0 0 1 .742 0L15.8 7.611a.6.6 0 0 1 .202.309l.3 1.144a.586.586 0 0 1-.373.699m-9.094 4.753L6.44 16.52a.575.575 0 0 0 .305.63 11.6 11.6 0 0 0 5.258 1.277c1.007 0 3-.132 5.207-1.25a.65.65 0 0 0 .348-.708l-.943-5.014a.587.587 0 0 0-.78-.442L7.22 14.08a.59.59 0 0 0-.385.437"
          />
        </>
      ) : (
        <>
          <g clipPath="url(#APT__a)">
            <path fill="url(#APT__b)" d="M0 0h24v24H0z" />
            <path
              fill="url(#APT__c)"
              d="m15.93 9.763-7.869 2.794a.584.584 0 0 1-.775-.651l.728-3.96a.57.57 0 0 1 .206-.347l3.411-2.752a.59.59 0 0 1 .742 0L15.8 7.611a.6.6 0 0 1 .202.309l.3 1.144a.586.586 0 0 1-.373.699m-9.094 4.753L6.44 16.52a.575.575 0 0 0 .305.63 11.6 11.6 0 0 0 5.258 1.277c1.007 0 3-.132 5.207-1.25a.65.65 0 0 0 .348-.708l-.943-5.014a.587.587 0 0 0-.78-.442L7.22 14.08a.59.59 0 0 0-.385.437"
            />
          </g>
          <defs>
            <linearGradient
              id="APT__b"
              x1="4.466"
              x2="29.207"
              y1="4.161"
              y2="32.58"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1A1E21" />
              <stop offset="1" stopColor="#06060A" />
            </linearGradient>
            <linearGradient
              id="APT__c"
              x1="17.503"
              x2="10.354"
              y1="18.351"
              y2="5.717"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".11" stopColor="#C65CFF" />
              <stop offset=".18" stopColor="#BA6BFF" />
              <stop offset=".33" stopColor="#9991FF" />
              <stop offset=".53" stopColor="#6CF" />
              <stop offset=".81" stopColor="#42F0DB" />
              <stop offset=".97" stopColor="#3FC" />
            </linearGradient>
            <clipPath id="APT__a">
              <path fill="#fff" d="M0 0h24v24H0z" />
            </clipPath>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconApt.displayName = 'Apt'

export default IconApt
