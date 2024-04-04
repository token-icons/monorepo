import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenCTX = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M8.413 11.887 6 13.04l1.26.581q.547-.309 1.075-.648c.35-.23.559-.096.665 0v2.354l-.857.576v1.79l-.857.335v.83l1.51-.637v-1.67l2.347-1.224v-.973l3.054-1.201c.435-.653 1.142-1.025 1.442-1.129v1.753l-.639.366V15l1.286-.73v-3.543L15 11.076v-2.61l1.135.616.58-1.717c-.04-.345-.461-.853-.716-.667-.37.269.061.61.255.763l-.39.732-1.017-.907h-.704v-.317c.18.018.385-.089.428-.145.008-.112.02-.468 0-.997-.018-.528-.524-.676-.764-.684-1.078-.01-.82 1.084-.521 1.45v.693h-.959l-1.666 1.35c.196.306.62.982.754 1.246.168.33.42.405.558.415.136.011.417.032.48-.351.05-.307-.392-.334-.619-.31l-.27-.768.955-.403.558 2.123-3.638 1.793z"
          />
        </>
      ) : (
        <>
          <path
            fill="#DEB132"
            d="M8.413 11.887 6 13.04l1.26.581q.547-.309 1.075-.648c.35-.23.559-.096.665 0v2.354l-.857.576v1.79l-.857.335v.83l1.51-.637v-1.67l2.347-1.224v-.973l3.054-1.201c.435-.653 1.142-1.025 1.442-1.129v1.753l-.639.366V15l1.286-.73v-3.543L15 11.076v-2.61l1.135.616.58-1.717c-.04-.345-.461-.853-.716-.667-.37.269.061.61.255.763l-.39.732-1.017-.907h-.704v-.317c.18.018.385-.089.428-.145.008-.112.02-.468 0-.997-.018-.528-.524-.676-.764-.684-1.078-.01-.82 1.084-.521 1.45v.693h-.959l-1.666 1.35c.196.306.62.982.754 1.246.168.33.42.405.558.415.136.011.417.032.48-.351.05-.307-.392-.334-.619-.31l-.27-.768.955-.403.558 2.123-3.638 1.793z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

TokenCTX.displayName = 'CTX'
