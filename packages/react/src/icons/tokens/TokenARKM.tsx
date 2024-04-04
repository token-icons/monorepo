import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenARKM = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="currentColor"
        d="M14.572 7.714H6.429l.737-2.142h6.686q.012.006 0 0zm2.194-2.095 2.057 6.248a.04.04 0 0 1-.017.047l-1.8 1.299a.04.04 0 0 1-.042.006.04.04 0 0 1-.027-.032l-2.481-7.543a.043.043 0 0 1 .043-.055h2.22q.015 0 .026.007a.04.04 0 0 1 .017.023zM8.64 8.409l-2.468 7.5a.04.04 0 0 1-.024.021l-.017.001-.015-.005-1.817-1.303a.034.034 0 0 1-.013-.039L6.33 8.383a.04.04 0 0 1 .039-.026h2.233a.04.04 0 0 1 .03.017.03.03 0 0 1 .008.035m.6-.052h2.644a.04.04 0 0 1 .039.026l.686 2.07a.04.04 0 0 1-.005.034.04.04 0 0 1-.03.017H8.55l-.017-.005a.04.04 0 0 1-.017-.046l.686-2.07a.04.04 0 0 1 .038-.026m5.554.03.815 2.447a.04.04 0 0 1-.017.052l-1.796 1.294a.05.05 0 0 1-.043.004.04.04 0 0 1-.019-.01.04.04 0 0 1-.011-.02L12.48 8.417a.04.04 0 0 1 .001-.033.04.04 0 0 1 .025-.022.04.04 0 0 1 .021-.005h2.22a.04.04 0 0 1 .043.03zm-4.17 2.704-1.238 3.772a.04.04 0 0 1-.026.026.04.04 0 0 1-.038 0l-1.805-1.295a.04.04 0 0 1-.017-.047l.814-2.485a.04.04 0 0 1 .043-.026h2.225a.04.04 0 0 1 .042.034.04.04 0 0 1 0 .021m5.863 2.495-2.143 1.534a.04.04 0 0 1-.042 0l-1.809-1.294a.038.038 0 0 1 0-.06l3.257-2.349.014-.007.016-.001a.04.04 0 0 1 .026.025l.694 2.113a.04.04 0 0 1-.013.043zm3.21 1.028-5.34 3.849a.04.04 0 0 1-.043 0l-1.817-1.299a.04.04 0 0 1 0-.064l6.467-4.65a.04.04 0 0 1 .05.002.04.04 0 0 1 .01.015l.69 2.105a.04.04 0 0 1-.017.042m-9.12-1.517 3.257 2.336a.04.04 0 0 1 .013.03.04.04 0 0 1-.017.034l-1.8 1.299a.04.04 0 0 1-.051 0L9.84 15.262a.04.04 0 0 1-.013-.043l.686-2.1a.043.043 0 0 1 .064-.022m-3.214 1.029 6.48 4.646.01.012a.034.034 0 0 1-.01.043L12.03 20.13a.034.034 0 0 1-.043 0L6.63 16.29a.034.034 0 0 1-.013-.043l.69-2.104a.03.03 0 0 1 .026-.022.04.04 0 0 1 .03 0z"
      />
    </BaseIcon>
  ),
)

TokenARKM.displayName = 'ARKM'
