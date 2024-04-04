import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenUSDC = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12 18.857A6.84 6.84 0 0 0 18.857 12 6.84 6.84 0 0 0 12 5.143 6.84 6.84 0 0 0 5.143 12 6.84 6.84 0 0 0 12 18.857m1.886-5.773c0-.998-.6-1.341-1.8-1.483-.857-.115-1.029-.343-1.029-.745 0-.399.287-.656.857-.656.515 0 .802.171.943.6.03.086.116.141.202.141h.454a.195.195 0 0 0 .201-.197v-.03c-.115-.63-.63-1.23-1.285-1.286v-.63c0-.115-.086-.201-.228-.227h-.377c-.115 0-.223.086-.252.227v.63c-.858.116-1.428.772-1.428 1.488 0 .942.57 1.311 1.77 1.457.802.141 1.059.313 1.059.771 0 .454-.403.772-.943.772-.746 0-1.003-.318-1.088-.746-.026-.112-.112-.172-.198-.172h-.488a.195.195 0 0 0-.197.202v.03c.111.711.57 1.2 1.513 1.341v.635c0 .115.085.192.227.222h.411c.111 0 .189-.077.219-.222v-.635c.857-.141 1.457-.715 1.457-1.487M9.114 15.22c.415.38.9.674 1.429.865.086.06.171.172.171.257v.403c0 .056 0 .086-.03.111-.025.116-.141.172-.257.116a5.143 5.143 0 0 1 0-9.801c.03-.026.086-.026.116-.026.116.026.171.111.171.227v.399c0 .145-.055.231-.171.287A4.23 4.23 0 0 0 8 10.598a4.26 4.26 0 0 0 1.113 4.621m4.202-7.934c.025-.115.141-.171.257-.115a5.19 5.19 0 0 1 3.343 3.373A5.136 5.136 0 0 1 13.573 17c-.03.026-.086.026-.116.026-.116-.026-.171-.111-.171-.227V16.4c0-.145.055-.231.171-.287A4.23 4.23 0 0 0 16 13.573a4.256 4.256 0 0 0-2.542-5.486c-.086-.06-.171-.172-.171-.287v-.4c0-.06 0-.086.03-.116"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="#2775CA"
            d="M12 18.857A6.84 6.84 0 0 0 18.857 12 6.84 6.84 0 0 0 12 5.143 6.84 6.84 0 0 0 5.143 12 6.84 6.84 0 0 0 12 18.857m1.886-5.773c0-.998-.6-1.341-1.8-1.483-.857-.115-1.029-.343-1.029-.745 0-.399.287-.656.857-.656.515 0 .802.171.943.6.03.086.116.141.202.141h.454a.195.195 0 0 0 .201-.197v-.03c-.115-.63-.63-1.23-1.285-1.286v-.63c0-.115-.086-.201-.228-.227h-.377c-.115 0-.223.086-.252.227v.63c-.858.116-1.428.772-1.428 1.488 0 .942.57 1.311 1.77 1.457.802.141 1.059.313 1.059.771 0 .454-.403.772-.943.772-.746 0-1.003-.318-1.088-.746-.026-.112-.112-.172-.198-.172h-.488a.195.195 0 0 0-.197.202v.03c.111.711.57 1.2 1.513 1.341v.635c0 .115.085.192.227.222h.411c.111 0 .189-.077.219-.222v-.635c.857-.141 1.457-.715 1.457-1.487M9.114 15.22c.415.38.9.674 1.429.865.086.06.171.172.171.257v.403c0 .056 0 .086-.03.111-.025.116-.141.172-.257.116a5.143 5.143 0 0 1 0-9.801c.03-.026.086-.026.116-.026.116.026.171.111.171.227v.399c0 .145-.055.231-.171.287A4.23 4.23 0 0 0 8 10.598a4.26 4.26 0 0 0 1.113 4.621m4.202-7.934c.025-.115.141-.171.257-.115a5.19 5.19 0 0 1 3.343 3.373A5.136 5.136 0 0 1 13.573 17c-.03.026-.086.026-.116.026-.116-.026-.171-.111-.171-.227V16.4c0-.145.055-.231.171-.287A4.23 4.23 0 0 0 16 13.573a4.256 4.256 0 0 0-2.542-5.486c-.086-.06-.171-.172-.171-.287v-.4c0-.06 0-.086.03-.116"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      )}
    </BaseIcon>
  ),
)

TokenUSDC.displayName = 'USDC'
