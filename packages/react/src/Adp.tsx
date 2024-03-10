import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconAdp = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12.72 5.143a.819.819 0 0 0-1.44 0L5.237 16.697a.8.8 0 0 0-.086.502c2.01.574 5.246.32 6.849-2.713 1.414-2.687 2.246-4.166 2.764-5.096l.094-.163-2.138-4.08zM15.03 9.557l-2.623 4.929a4.65 4.65 0 0 0 4.564 3.085c.793 0 1.406-.141 1.869-.343a.8.8 0 0 0-.073-.531z"
          />
        </>
      ) : (
        <>
          <g clipPath="url(#ADP__a)">
            <path fill="url(#ADP__b)" d="M0 0h24v24H0z" />
            <path
              fill="#fff"
              d="M12.72 5.143a.819.819 0 0 0-1.44 0L5.237 16.697a.8.8 0 0 0-.086.502c2.01.574 5.246.32 6.849-2.713 1.414-2.687 2.246-4.166 2.764-5.096l.094-.163-2.138-4.08z"
            />
            <path
              fill="url(#ADP__c)"
              d="m15.03 9.557-2.623 4.929a4.65 4.65 0 0 0 4.564 3.085c.793 0 1.406-.141 1.869-.343a.8.8 0 0 0-.073-.531z"
            />
          </g>
          <defs>
            <linearGradient
              id="ADP__b"
              x1="5.473"
              x2="19.727"
              y1="1.157"
              y2="21.746"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3E64DF" />
              <stop offset="1" stopColor="#4587F1" />
            </linearGradient>
            <linearGradient
              id="ADP__c"
              x1="14.019"
              x2="18.746"
              y1="13.226"
              y2="18.6"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fff" />
              <stop offset="1" stopColor="#4483EF" />
            </linearGradient>
            <clipPath id="ADP__a">
              <path fill="#fff" d="M0 0h24v24H0z" />
            </clipPath>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconAdp.displayName = 'Adp'

export default IconAdp
