import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenFIS = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m9.57 16.024-.09.018c-.27.128-.793.33-1.436.471l.39 1.916h1.835l.831-2.619c-.484.052-.909.112-1.221.159l-.266.883zm.84-1.808a5.5 5.5 0 0 1 1.273-.236L12 12.973l.3.999c.549.025.943.128 1.286.261l-1.196-3.519h-.926l-1.058 3.502zm3.78 1.83.274.806.039-.729.686.193.214.064a3 3 0 0 0 .544.09l-.403 1.959h-1.89l-.801-2.64c.463.055.926.154 1.337.257m2.057-1.029a8 8 0 0 1-.848-.098 4 4 0 0 1-.819-.236v-.034l1.543-8.22H18l-1.757 8.588zm-8.486.099L6 6.429h1.877l1.607 8.143-.338.158c-.232.107-.433.202-.613.262a2.6 2.6 0 0 1-.772.124"
          />
        </>
      ) : (
        <>
          <path
            fill="#00F3AB"
            d="m9.57 16.024-.09.018c-.27.128-.793.33-1.436.471l.39 1.916h1.835l.831-2.619c-.484.052-.909.112-1.221.159l-.266.883zm.84-1.808a5.5 5.5 0 0 1 1.273-.236L12 12.973l.3.999c.549.025.943.128 1.286.261l-1.196-3.519h-.926l-1.058 3.502zm3.78 1.83.274.806.039-.729.686.193.214.064a3 3 0 0 0 .544.09l-.403 1.959h-1.89l-.801-2.64c.463.055.926.154 1.337.257m2.057-1.029a8 8 0 0 1-.848-.098 4 4 0 0 1-.819-.236v-.034l1.543-8.22H18l-1.757 8.588zm-8.486.099L6 6.429h1.877l1.607 8.143-.338.158c-.232.107-.433.202-.613.262a2.6 2.6 0 0 1-.772.124"
          />
        </>
      )}
    </BaseIcon>
  ),
)

TokenFIS.displayName = 'FIS'
