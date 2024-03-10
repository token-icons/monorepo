import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const Icon0x0 = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M11.572 5.246A1.903 1.903 0 0 0 8.43 7.13 2.027 2.027 0 0 0 5.919 9.97a2.26 2.26 0 0 0 .034 4.002 2.027 2.027 0 0 0 2.477 2.893 1.886 1.886 0 0 0 1.817 2.422c.515.004.986-.198 1.325-.527v-2.045h-.545a.858.858 0 1 1 0-.857h.163a.38.38 0 0 0 .382-.381v-2.619a.429.429 0 0 0-.858 0v.857a.43.43 0 0 1-.428.429h-.973a.857.857 0 1 1 0-.857h.116a.43.43 0 0 0 .428-.429v-1.714a.43.43 0 0 0-.428-.429h-.116a.858.858 0 1 1 0-.857h.973a.43.43 0 0 1 .428.429v.857a.428.428 0 1 0 .857 0V8.524a.38.38 0 0 0-.381-.381h-.163a.857.857 0 1 1 0-.857h.545zM12.429 5.246A1.903 1.903 0 0 1 15.57 7.13a2.027 2.027 0 0 1 2.511 2.838 2.26 2.26 0 0 1-.034 4.002 2.027 2.027 0 0 1-2.477 2.893 1.886 1.886 0 0 1-1.817 2.422 1.87 1.87 0 0 1-1.324-.527v-2.045h.544a.858.858 0 1 0 0-.857h-.163a.38.38 0 0 1-.381-.381v-2.619a.429.429 0 0 1 .857 0v.857a.43.43 0 0 0 .428.429h.973a.857.857 0 1 0 0-.857h-.115a.43.43 0 0 1-.43-.429v-1.714a.43.43 0 0 1 .43-.429h.115a.858.858 0 1 0 0-.857h-.973a.43.43 0 0 0-.428.429v.857a.428.428 0 1 1-.857 0V8.524a.38.38 0 0 1 .381-.381h.163a.857.857 0 1 0 0-.857h-.544z"
          />
        </>
      ) : (
        <>
          <g clipPath="url(#0X0__a)">
            <path fill="#181B1E" d="M0 0h24v24H0z" />
            <path
              fill="#D3D2D3"
              d="M11.572 5.246A1.903 1.903 0 0 0 8.43 7.13 2.027 2.027 0 0 0 5.919 9.97a2.26 2.26 0 0 0 .034 4.002 2.027 2.027 0 0 0 2.477 2.893 1.886 1.886 0 0 0 1.817 2.422c.515.004.986-.198 1.325-.527v-2.045h-.545a.858.858 0 1 1 0-.857h.163a.38.38 0 0 0 .382-.381v-2.619a.429.429 0 0 0-.858 0v.857a.43.43 0 0 1-.428.429h-.973a.857.857 0 1 1 0-.857h.116a.43.43 0 0 0 .428-.429v-1.714a.43.43 0 0 0-.428-.429h-.116a.858.858 0 1 1 0-.857h.973a.43.43 0 0 1 .428.429v.857a.428.428 0 1 0 .857 0V8.524a.38.38 0 0 0-.381-.381h-.163a.857.857 0 1 1 0-.857h.545z"
            />
            <path
              fill="#00CBC4"
              d="M12.429 5.246A1.903 1.903 0 0 1 15.57 7.13a2.027 2.027 0 0 1 2.511 2.838 2.26 2.26 0 0 1-.034 4.002 2.027 2.027 0 0 1-2.477 2.893 1.886 1.886 0 0 1-1.817 2.422 1.87 1.87 0 0 1-1.324-.527v-2.045h.544a.858.858 0 1 0 0-.857h-.163a.38.38 0 0 1-.381-.381v-2.619a.429.429 0 0 1 .857 0v.857a.43.43 0 0 0 .428.429h.973a.857.857 0 1 0 0-.857h-.115a.43.43 0 0 1-.43-.429v-1.714a.43.43 0 0 1 .43-.429h.115a.858.858 0 1 0 0-.857h-.973a.43.43 0 0 0-.428.429v.857a.428.428 0 1 1-.857 0V8.524a.38.38 0 0 1 .381-.381h.163a.857.857 0 1 0 0-.857h-.544z"
            />
          </g>
          <defs>
            <clipPath id="0X0__a">
              <path fill="#fff" d="M0 0h24v24H0z" />
            </clipPath>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

Icon0x0.displayName = '0x0'

export default Icon0x0
