import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenPROB = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m13.624 8.764-1.286-.728a.87.87 0 0 0-.771 0l-1.29.728c-.279.159-.279.416 0 .575l1.286.741a.87.87 0 0 0 .771 0l1.286-.741c.278-.159.278-.416 0-.575z"
          />
          <path
            fill="currentColor"
            d="m18.476 7.86-6.09-3.484a.85.85 0 0 0-.763 0L5.528 7.86a.83.83 0 0 0-.381.656v6.968c0 .24.171.536.381.656l6.095 3.484c.214.12.553.12.763 0l6.094-3.484a.83.83 0 0 0 .381-.656V8.516a.84.84 0 0 0-.381-.656zm-2.713 1.62-3.472 2.027a.81.81 0 0 1-.754 0l-2.066-1.35C9.197 10 9 10.127 9 10.44v3.887c0 .309-.253.446-.527.3L8.1 14.43a.8.8 0 0 1-.386-.643v-4.23c0-.24.163-.531.373-.651l3.45-2.006a.84.84 0 0 1 .758 0l3.468 2.006c.274.154.274.415 0 .574"
          />
        </>
      ) : (
        <>
          <path
            fill="#4231C8"
            d="m13.625 8.764-1.286-.728a.87.87 0 0 0-.771 0l-1.29.728c-.28.159-.28.416 0 .575l1.285.741c.214.12.557.12.772 0l1.285-.741c.279-.159.279-.416 0-.575z"
          />
          <path
            fill="#4231C8"
            d="m18.476 7.86-6.09-3.484a.85.85 0 0 0-.763 0L5.53 7.86a.83.83 0 0 0-.382.656v6.968c0 .24.172.536.382.656l6.094 3.484c.215.12.553.12.763 0l6.094-3.484a.83.83 0 0 0 .382-.656V8.516a.84.84 0 0 0-.382-.656zm-2.713 1.62-3.471 2.027a.81.81 0 0 1-.755 0l-2.065-1.35C9.197 10 9 10.127 9 10.44v3.887c0 .309-.253.446-.527.3L8.1 14.43a.8.8 0 0 1-.385-.643v-4.23a.82.82 0 0 1 .372-.651l3.45-2.006a.84.84 0 0 1 .759 0l3.467 2.006c.275.154.275.415 0 .574"
          />
        </>
      )}
    </BaseIcon>
  ),
)

TokenPROB.displayName = 'PROB'
