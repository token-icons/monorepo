import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenOXB = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M4.714 10.286h2.143a.857.857 0 0 1 .857.857v.428a.214.214 0 1 0 .429 0v-.428a1.286 1.286 0 0 0-1.286-1.286H4.714a1.286 1.286 0 0 0-1.285 1.286v.428a.214.214 0 1 0 .428 0v-.428a.86.86 0 0 1 .857-.857m-.857 2.143a.214.214 0 1 0-.428 0v.428a1.286 1.286 0 0 0 1.285 1.286h2.143a1.286 1.286 0 0 0 1.286-1.286v-.428a.214.214 0 1 0-.429 0v.428a.857.857 0 0 1-.857.857H4.714a.857.857 0 0 1-.857-.857zM9.484 9.93a.214.214 0 0 1 .3-.017l2.143 1.928a.215.215 0 0 1 0 .318l-2.143 1.928a.214.214 0 0 1-.282-.317L11.464 12l-1.962-1.77a.214.214 0 0 1-.018-.3m5.036.004a.24.24 0 0 1-.017.322L12.703 12l-.274-.343 1.8-1.744c.085-.086.214-.073.291.021m0 4.132a.244.244 0 0 0-.017-.322L12.703 12l-.274.343 1.8 1.744c.085.086.214.073.291-.021m1.337-3.995c0-.12.095-.214.215-.214h3.214c.887 0 1.286.399 1.286 1.286a.99.99 0 0 1-.45.848c.257.172.45.459.45.866 0 .754-.532 1.286-1.286 1.286h-3.214a.214.214 0 1 1 0-.429h3.214c.518 0 .857-.338.857-.857 0-.386-.3-.608-.656-.643h-3.415a.214.214 0 1 1 0-.428h3.205a1 1 0 0 1 .202 0c.343-.043.664-.27.664-.643 0-.66-.197-.857-.857-.857h-3.214a.215.215 0 0 1-.215-.215"
          />
        </>
      ) : (
        <>
          <path
            fill="#fff"
            d="M4.714 10.286h2.143a.857.857 0 0 1 .857.857v.428a.214.214 0 1 0 .429 0v-.428a1.286 1.286 0 0 0-1.286-1.286H4.714a1.286 1.286 0 0 0-1.285 1.286v.428a.214.214 0 1 0 .428 0v-.428a.86.86 0 0 1 .857-.857m-.857 2.143a.214.214 0 1 0-.428 0v.428a1.286 1.286 0 0 0 1.285 1.286h2.143a1.286 1.286 0 0 0 1.286-1.286v-.428a.214.214 0 1 0-.429 0v.428a.857.857 0 0 1-.857.857H4.714a.857.857 0 0 1-.857-.857zM9.484 9.93a.214.214 0 0 1 .3-.017l2.143 1.928a.215.215 0 0 1 0 .318l-2.143 1.928a.214.214 0 0 1-.282-.317L11.464 12l-1.962-1.77a.214.214 0 0 1-.018-.3"
          />
          <path
            fill="#27E9AF"
            d="M14.52 9.934a.24.24 0 0 1-.017.322L12.703 12l-.274-.343 1.8-1.744c.085-.086.214-.073.291.021m0 4.132a.244.244 0 0 0-.017-.322L12.703 12l-.274.343 1.8 1.744c.085.086.214.073.291-.021"
          />
          <path
            fill="#fff"
            d="M15.857 10.071c0-.12.095-.214.215-.214h3.214c.887 0 1.286.399 1.286 1.286a.99.99 0 0 1-.45.848c.257.172.45.459.45.866 0 .754-.532 1.286-1.286 1.286h-3.214a.214.214 0 1 1 0-.429h3.214c.518 0 .857-.338.857-.857 0-.386-.3-.608-.656-.643h-3.415a.214.214 0 1 1 0-.428h3.205a1 1 0 0 1 .202 0c.343-.043.664-.27.664-.643 0-.66-.197-.857-.857-.857h-3.214a.215.215 0 0 1-.215-.215"
          />
        </>
      )}
    </BaseIcon>
  ),
)

TokenOXB.displayName = 'OXB'
