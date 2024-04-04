import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenFUSE = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m9.711 6.428 2.195-1.26a.2.2 0 0 1 .201 0l5.786 3.322a.21.21 0 0 1 .107.17v2.285a.19.19 0 0 1-.103.171l-2.186 1.26c-.137.081-.282-.017-.282-.171v-2.049c0-.073-.073-.137-.133-.171L9.71 6.78a.201.201 0 0 1 0-.352M8.293 16.77l-2.19-1.26A.2.2 0 0 1 6 15.338V8.696c0-.069.039-.138.103-.172l1.984-1.148a.2.2 0 0 1 .202 0l2.19 1.255a.202.202 0 0 1 0 .352L8.7 10.01c-.064.039-.129.103-.129.172v6.415c0 .155-.141.249-.278.172M18 15.334a.2.2 0 0 1-.103.176l-5.756 3.321a.2.2 0 0 1-.197 0L9.96 17.696a.2.2 0 0 1-.103-.172V15c0-.154.172-.253.3-.172l1.783 1.016a.21.21 0 0 0 .201 0l5.555-3.206a.2.2 0 0 1 .3.172H18z"
          />
        </>
      ) : (
        <>
          <path
            fill="#B4F9B9"
            d="m9.711 6.428 2.195-1.26a.2.2 0 0 1 .201 0l5.786 3.322a.21.21 0 0 1 .107.17v2.285a.19.19 0 0 1-.103.171l-2.186 1.26c-.137.081-.282-.017-.282-.171v-2.049c0-.073-.073-.137-.133-.171L9.71 6.78a.201.201 0 0 1 0-.352M8.293 16.77l-2.19-1.26A.2.2 0 0 1 6 15.338V8.696c0-.069.039-.138.103-.172l1.984-1.148a.2.2 0 0 1 .202 0l2.19 1.255a.202.202 0 0 1 0 .352L8.7 10.01c-.064.039-.129.103-.129.172v6.415c0 .155-.141.249-.278.172M18 15.334a.2.2 0 0 1-.103.176l-5.756 3.321a.2.2 0 0 1-.197 0L9.96 17.696a.2.2 0 0 1-.103-.172V15c0-.154.172-.253.3-.172l1.783 1.016a.21.21 0 0 0 .201 0l5.555-3.206a.2.2 0 0 1 .3.172H18z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

TokenFUSE.displayName = 'FUSE'
