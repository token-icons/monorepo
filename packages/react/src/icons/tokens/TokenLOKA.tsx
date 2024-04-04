import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenLOKA = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m4.714 12.857 6.429 6.429s-1.8-3.077-2.657-3.947c-.857-.857-3.772-2.482-3.772-2.482m5.143-2.143-5.014 1.303c-.069.017-.107.069-.129.133a.17.17 0 0 0 .077.167l3.386 2.169a.51.51 0 0 0 .472.051.47.47 0 0 0 .304-.36zm3.429 3.429-1.264 5.014a.163.163 0 0 1-.3.047L9.519 15.85a.48.48 0 0 1-.052-.472.5.5 0 0 1 .352-.313zm-3.214-3.857 1.5-5.426a.13.13 0 0 0-.052-.129q-.078-.044-.137.022l-6.634 6.626c-.043.038-.043.085-.022.137.03.047.077.068.129.047zm3.642 3.857L12.43 19.14a.13.13 0 0 0 .051.129q.078.044.137-.022l6.634-6.626c.043-.038.043-.085.022-.137-.03-.047-.077-.068-.129-.047zm0-.429 5.015-1.68a.17.17 0 0 0 .128-.128.14.14 0 0 0-.077-.146l-3.437-1.83a.6.6 0 0 0-.472-.043.45.45 0 0 0-.308.326zM10.5 10.286l1.371-5.435c.018-.072.065-.128.13-.137a.14.14 0 0 1 .153.086l1.908 3.75a.6.6 0 0 1 .042.514.5.5 0 0 1-.33.347zm-.214.428 3.458-.84s.506-.141.377.412a768 768 0 0 1-.835 3.428l-3.429.849s-.501.111-.42-.472c.086-.57.849-3.377.849-3.377m2.143-6 6.857 6.858s-3.403-1.543-4.256-2.465c-.844-.926-2.601-4.393-2.601-4.393"
          />
        </>
      ) : (
        <>
          <path
            fill="#5496F8"
            d="m4.714 12.857 6.429 6.429s-1.8-3.077-2.657-3.947c-.857-.857-3.772-2.482-3.772-2.482"
          />
          <path
            fill="#126BF9"
            d="m9.857 10.714-5.014 1.303c-.069.017-.107.069-.129.133a.17.17 0 0 0 .077.167l3.386 2.169a.51.51 0 0 0 .472.051.47.47 0 0 0 .304-.36z"
          />
          <path
            fill="#0037D1"
            d="m13.286 14.143-1.264 5.014a.163.163 0 0 1-.3.047L9.519 15.85a.48.48 0 0 1-.052-.472.5.5 0 0 1 .352-.313z"
          />
          <path
            fill="#5496F8"
            d="m10.072 10.286 1.5-5.426a.13.13 0 0 0-.052-.129q-.078-.044-.137.022l-6.634 6.626c-.043.038-.043.085-.022.137.03.047.077.068.129.047z"
          />
          <path
            fill="#0127AF"
            d="M13.714 14.143 12.43 19.14a.13.13 0 0 0 .051.129q.078.044.137-.022l6.634-6.626c.043-.038.043-.085.022-.137-.03-.047-.077-.068-.129-.047z"
          />
          <path
            fill="#2C4FF9"
            d="m13.714 13.714 5.015-1.68a.17.17 0 0 0 .128-.128.14.14 0 0 0-.077-.146l-3.437-1.83a.6.6 0 0 0-.472-.043.45.45 0 0 0-.308.326z"
          />
          <path
            fill="#78A8F9"
            d="m10.5 10.286 1.371-5.435c.018-.072.065-.128.13-.137a.14.14 0 0 1 .153.086l1.908 3.75a.6.6 0 0 1 .042.514.5.5 0 0 1-.33.347z"
          />
          <path
            fill="#126BF9"
            d="m10.286 10.714 3.458-.84s.506-.141.377.412a768 768 0 0 1-.835 3.428l-3.429.849s-.501.111-.42-.472c.086-.57.849-3.377.849-3.377"
          />
          <path
            fill="#0037D1"
            d="m12.429 4.714 6.857 6.858s-3.403-1.543-4.256-2.465c-.844-.926-2.601-4.393-2.601-4.393"
          />
        </>
      )}
    </BaseIcon>
  ),
)

TokenLOKA.displayName = 'LOKA'
