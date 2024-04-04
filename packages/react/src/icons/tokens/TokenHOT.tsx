import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenHOT = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M5.296 6.889s-.381.013-.366.034c.08.22.607 1.425.615 1.432 1.903.152 3.216.948 3.891 2.79H8.359l-.651 1.713s1.553-.002 1.728 0c-.54 1.726-2.046 2.735-3.827 2.735-.076.179-.626 1.458-.6 1.467 3.085.358 5.996-1.92 6.279-4.202h1.374c0 .293.227.827.391 1.179.999 2.01 3.16 3.164 5.368 3.104.361-.008.636-.052.622-.088l-.615-1.424c-1.739-.138-3.675-.834-4.059-2.77h1.08c.015 0 .596-1.715.596-1.715h-1.69c.601-1.821 2.237-2.755 4.116-2.781 0 0 .416-.939.6-1.418-2.786-.522-5.94 1.32-6.416 4.2H11.31c-.34-3.007-3.602-4.38-6.014-4.256"
          />
        </>
      ) : (
        <>
          <path
            fill="#007F88"
            d="M5.296 6.889s-.381.013-.367.034c.08.22.608 1.425.615 1.432 1.903.152 3.217.948 3.892 2.79H8.358l-.65 1.713s1.553-.002 1.728 0c-.54 1.726-2.046 2.735-3.827 2.735-.076.179-.627 1.458-.6 1.467 3.085.358 5.996-1.92 6.278-4.202h1.375c0 .293.226.827.39 1.179 1 2.01 3.16 3.164 5.368 3.104.362-.008.636-.052.622-.088l-.615-1.424c-1.738-.138-3.674-.834-4.058-2.77h1.08c.015 0 .595-1.715.595-1.715h-1.69c.602-1.821 2.238-2.755 4.117-2.781 0 0 .415-.939.6-1.418-2.786-.522-5.941 1.32-6.416 4.2h-1.346c-.34-3.007-3.602-4.38-6.013-4.256"
          />
        </>
      )}
    </BaseIcon>
  ),
)

TokenHOT.displayName = 'HOT'
