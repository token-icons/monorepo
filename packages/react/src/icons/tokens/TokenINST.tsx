import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenINST = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12.754 19.286c-.415.042-.754-.3-.754-.725v-2.014c0-.42.343-.754.75-.836A3.86 3.86 0 0 0 15.857 12a3.86 3.86 0 0 0-3.107-3.712c-.411-.085-.75-.415-.75-.831V5.438c0-.42.339-.762.754-.72A7.307 7.307 0 0 1 19.286 12c0 3.789-2.863 6.9-6.532 7.286M8.871 5.42c.472-.227.986.137.986.652v11.846c0 .514-.514.878-.985.65A7.32 7.32 0 0 1 4.713 12c0-2.883 1.693-5.378 4.157-6.573z"
          />
        </>
      ) : (
        <>
          <path
            fill="#3F75FF"
            d="M12.754 19.286c-.416.042-.754-.3-.754-.725v-2.014c0-.42.342-.754.75-.836A3.86 3.86 0 0 0 15.857 12a3.86 3.86 0 0 0-3.107-3.712c-.412-.085-.75-.415-.75-.831V5.438c0-.42.338-.762.754-.72A7.307 7.307 0 0 1 19.285 12c0 3.789-2.863 6.9-6.531 7.286M8.87 5.42c.471-.227.986.137.986.652v11.846c0 .514-.515.878-.986.65A7.32 7.32 0 0 1 4.714 12c0-2.883 1.693-5.378 4.157-6.573z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

TokenINST.displayName = 'INST'
