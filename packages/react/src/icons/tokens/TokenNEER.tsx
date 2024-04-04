import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenNEER = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M5.143 7.397v5.777c0 .06.047.112.107.112h2.357c.064 0 .107-.052.107-.112v-2.781a.11.11 0 0 1 .112-.107H9.75c.06 0 .107-.052.107-.116V7.397a.107.107 0 0 0-.107-.111h-4.5a.107.107 0 0 0-.107.111m0 6.849c0-.056.043-.103.103-.103H7.61c.056 0 .103.043.103.103v2.365a.1.1 0 0 1-.103.103H5.246a.103.103 0 0 1-.103-.103zm5.571 2.365V7.397c0-.056.047-.107.107-.107h6.197a.12.12 0 0 1 .078.034l1.731 1.723c.017.021.03.051.03.077v7.487c0 .06-.047.103-.107.103h-2.366c-.06 0-.099-.043-.099-.103v-6.218c0-.06-.055-.107-.115-.107h-2.756c-.06 0-.128.043-.128.107v6.218c0 .06-.03.103-.086.103h-2.38c-.06 0-.107-.043-.107-.103"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#NEER__a)"
            d="M5.143 7.397v5.777c0 .06.047.112.107.112h2.357c.064 0 .107-.052.107-.112v-2.781a.11.11 0 0 1 .112-.107H9.75c.06 0 .107-.052.107-.116V7.397a.107.107 0 0 0-.107-.111h-4.5a.107.107 0 0 0-.107.111m0 6.849c0-.056.043-.103.103-.103H7.61c.056 0 .103.043.103.103v2.365a.1.1 0 0 1-.103.103H5.246a.103.103 0 0 1-.103-.103zm5.571 2.365V7.397c0-.056.047-.107.107-.107h6.197a.12.12 0 0 1 .078.034l1.731 1.723c.017.021.03.051.03.077v7.487c0 .06-.047.103-.107.103h-2.366c-.06 0-.099-.043-.099-.103v-6.218c0-.06-.055-.107-.115-.107h-2.756c-.06 0-.128.043-.128.107v6.218c0 .06-.03.103-.086.103h-2.38c-.06 0-.107-.043-.107-.103"
          />
          <defs>
            <linearGradient
              id="NEER__a"
              x1="7.516"
              x2="13.417"
              y1="8.673"
              y2="17.509"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0BD4F9" />
              <stop offset=".34" stopColor="#335DF7" />
              <stop offset=".62" stopColor="#5551CB" />
              <stop offset=".93" stopColor="#702EB6" />
              <stop offset="1" stopColor="#4E2EAD" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

TokenNEER.displayName = 'NEER'
