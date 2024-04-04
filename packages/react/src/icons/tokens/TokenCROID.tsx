import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenCROID = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M6 6.428a.429.429 0 0 0 0 .858h3.428v9.428H6a.428.428 0 1 0 0 .857h3.857a.43.43 0 0 0 .429-.428V6.857a.43.43 0 0 0-.429-.429zm6 0a.429.429 0 1 0 0 .858h1.714c.866 0 2.057.351 3.026 1.127A4.42 4.42 0 0 1 18.428 12c0 .33-.034.707-.115 1.101a.46.46 0 0 0 .171.472c.244.171.587.06.652-.232.107-.484.15-.942.15-1.341 0-1.946-.875-3.347-2.01-4.256a6 6 0 0 0-3.562-1.316zm4.92 9.725c.163.188.137.476-.077.608a5.8 5.8 0 0 1-3.129.81H12a.429.429 0 1 1 0-.857h1.714c1.106 0 1.954-.248 2.614-.643a.47.47 0 0 1 .592.082M6 8.143A.429.429 0 0 0 6 9h1.714v1.286a.429.429 0 1 0 .857 0V8.57a.43.43 0 0 0-.428-.428zm5.571.428A.43.43 0 0 1 12 8.143h1.714c.429 0 1.003.085 1.577.317.223.094.3.36.18.57a.48.48 0 0 1-.587.193A3.5 3.5 0 0 0 13.714 9H12a.43.43 0 0 1-.429-.429m5.975 2.915a.39.39 0 0 0-.403-.343c-.27 0-.472.253-.446.523.009.107.013.214.013.334 0 1.23-.506 1.959-1.106 2.396a3.4 3.4 0 0 1-1.89.604H12a.429.429 0 1 0 0 .857h1.714c.643 0 1.59-.188 2.392-.767.827-.591 1.465-1.577 1.465-3.09q0-.27-.025-.514M6 10.286a.43.43 0 0 1 .428.428v3a.428.428 0 1 1-.857 0v-3A.43.43 0 0 1 6 10.286m6 0a.429.429 0 0 0 0 .857h1.714c.124 0 .334.034.519.128.18.086.3.215.351.403a.43.43 0 0 0 .791.128.43.43 0 0 0 .04-.333 1.47 1.47 0 0 0-.797-.965 2.1 2.1 0 0 0-.904-.218zm-.429 3a.43.43 0 0 1 .429-.429h1.286a.429.429 0 0 1 0 .857H12a.43.43 0 0 1-.429-.428m-3 .428a.429.429 0 1 0-.857 0V15H6a.428.428 0 1 0 0 .857h2.143a.43.43 0 0 0 .428-.428zm0-1.714a.428.428 0 1 1-.856 0 .428.428 0 0 1 .856 0m7.715-1.714a.428.428 0 1 0 0-.857.428.428 0 0 0 0 .857M15 12.857a.429.429 0 1 1-.857 0 .429.429 0 0 1 .857 0m3 3A.428.428 0 1 0 18 15a.428.428 0 0 0 0 .857"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#CROID__a)"
            d="M6 6.428a.429.429 0 0 0 0 .858h3.428v9.428H6a.428.428 0 1 0 0 .857h3.857a.43.43 0 0 0 .429-.428V6.857a.43.43 0 0 0-.429-.429zm6 0a.429.429 0 1 0 0 .858h1.714c.866 0 2.057.351 3.026 1.127A4.42 4.42 0 0 1 18.428 12c0 .33-.034.707-.115 1.101a.46.46 0 0 0 .171.472c.244.171.587.06.652-.232.107-.484.15-.942.15-1.341 0-1.946-.875-3.347-2.01-4.256a6 6 0 0 0-3.562-1.316zm4.92 9.725c.163.188.137.476-.077.608a5.8 5.8 0 0 1-3.129.81H12a.429.429 0 1 1 0-.857h1.714c1.106 0 1.954-.248 2.614-.643a.47.47 0 0 1 .592.082M6 8.143A.429.429 0 0 0 6 9h1.714v1.286a.429.429 0 1 0 .857 0V8.57a.43.43 0 0 0-.428-.428zm5.571.428A.43.43 0 0 1 12 8.143h1.714c.429 0 1.003.085 1.577.317.223.094.3.36.18.57a.48.48 0 0 1-.587.193A3.5 3.5 0 0 0 13.714 9H12a.43.43 0 0 1-.429-.429m5.975 2.915a.39.39 0 0 0-.403-.343c-.27 0-.472.253-.446.523.009.107.013.214.013.334 0 1.23-.506 1.959-1.106 2.396a3.4 3.4 0 0 1-1.89.604H12a.429.429 0 1 0 0 .857h1.714c.643 0 1.59-.188 2.392-.767.827-.591 1.465-1.577 1.465-3.09q0-.27-.025-.514M6 10.286a.43.43 0 0 1 .428.428v3a.428.428 0 1 1-.857 0v-3A.43.43 0 0 1 6 10.286m6 0a.429.429 0 0 0 0 .857h1.714c.124 0 .334.034.519.128.18.086.3.215.351.403a.43.43 0 0 0 .791.128.43.43 0 0 0 .04-.333 1.47 1.47 0 0 0-.797-.965 2.1 2.1 0 0 0-.904-.218zm-.429 3a.43.43 0 0 1 .429-.429h1.286a.429.429 0 0 1 0 .857H12a.43.43 0 0 1-.429-.428m-3 .428a.429.429 0 1 0-.857 0V15H6a.428.428 0 1 0 0 .857h2.143a.43.43 0 0 0 .428-.428zm0-1.714a.428.428 0 1 1-.856 0 .428.428 0 0 1 .856 0m7.715-1.714a.428.428 0 1 0 0-.857.428.428 0 0 0 0 .857M15 12.857a.429.429 0 1 1-.857 0 .429.429 0 0 1 .857 0m3 3A.428.428 0 1 0 18 15a.428.428 0 0 0 0 .857"
          />
          <defs>
            <linearGradient
              id="CROID__a"
              x1="12.428"
              x2="12.428"
              y1="6.428"
              y2="17.571"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#30C2C2" />
              <stop offset=".49" stopColor="#73CD8D" />
              <stop offset="1" stopColor="#D6773D" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

TokenCROID.displayName = 'CROID'
