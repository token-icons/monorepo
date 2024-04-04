import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenSDEX = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M18.428 8.991a1.93 1.93 0 0 0-.985-1.624l-1.475-.921-2.935-1.843a1.8 1.8 0 0 0-2.07.021Q9.77 5.377 8.57 6.116l-.463.287c-.518.326-1.041.647-1.555.977-.51.326-.977.964-.982 1.586v5.948a2.04 2.04 0 0 0 .995 1.715l2.28 1.431 2.112 1.32a1.84 1.84 0 0 0 2.152-.026 108 108 0 0 1 2.293-1.44c.698-.437 1.401-.87 2.095-1.315a2.02 2.02 0 0 0 .93-1.646zm-3.865 5.58q-1.05.723-2.143 1.376a.8.8 0 0 1-.42.124q-.225-.001-.45-.137a68 68 0 0 0-1.157-.694l-1.35-.814c-.489-.3-.48-.806-.472-1.303v-.146a.28.28 0 0 0-.137-.257c-.206-.124-.411-.27-.621-.416-.223-.154-.446-.313-.669-.445-.176-.108-.283-.052-.283.158v.446c-.004.608-.008 1.217.013 1.826.017.548.287.985.772 1.285l3.535 2.173c.557.343 1.106.33 1.659-.013l1.611-.985c.643-.395 1.286-.785 1.92-1.183a1.63 1.63 0 0 0 .772-1.282c.025-.27-.219-.403-.442-.527l-.141-.077c-.322-.193-.806-.497-1.38-.857-.802-.502-1.779-1.11-2.713-1.68 0 0 2.074 3.411 2.1 3.428zM11.58 8.053q-1.095.653-2.143 1.376a595 595 0 0 1 2.096 3.428c-.935-.57-1.912-1.178-2.713-1.68-.574-.36-1.059-.664-1.38-.857l-.142-.077c-.222-.124-.471-.257-.437-.527a1.63 1.63 0 0 1 .767-1.286l1.92-1.179 1.612-.985a1.46 1.46 0 0 1 1.658-.013l2.336 1.436 1.2.732a1.52 1.52 0 0 1 .772 1.29c.021.609.017 1.218.012 1.822v.45c0 .21-.107.266-.282.158-.223-.132-.446-.291-.669-.445-.21-.146-.416-.292-.621-.416a.28.28 0 0 1-.138-.257v-.146c.009-.497.018-1.003-.471-1.303l-1.35-.814a68 68 0 0 1-1.157-.694.86.86 0 0 0-.45-.137.8.8 0 0 0-.42.124"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="#00FFB2"
            d="M18.428 8.991a1.93 1.93 0 0 0-.985-1.624l-1.475-.921-2.935-1.843a1.8 1.8 0 0 0-2.07.021Q9.77 5.377 8.57 6.116l-.463.287c-.518.326-1.041.647-1.555.977-.51.326-.977.964-.982 1.586v5.948a2.04 2.04 0 0 0 .995 1.715l2.28 1.431 2.112 1.32a1.84 1.84 0 0 0 2.152-.026 108 108 0 0 1 2.293-1.44c.698-.437 1.401-.87 2.095-1.315a2.02 2.02 0 0 0 .93-1.646zm-3.865 5.58q-1.05.723-2.143 1.376a.8.8 0 0 1-.42.124q-.225-.001-.45-.137a68 68 0 0 0-1.157-.694l-1.35-.814c-.489-.3-.48-.806-.472-1.303v-.146a.28.28 0 0 0-.137-.257c-.206-.124-.411-.27-.621-.416-.223-.154-.446-.313-.669-.445-.176-.108-.283-.052-.283.158v.446c-.004.608-.008 1.217.013 1.826.017.548.287.985.772 1.285l3.535 2.173c.557.343 1.106.33 1.659-.013l1.611-.985c.643-.395 1.286-.785 1.92-1.183a1.63 1.63 0 0 0 .772-1.282c.025-.27-.219-.403-.442-.527l-.141-.077c-.322-.193-.806-.497-1.38-.857-.802-.502-1.779-1.11-2.713-1.68 0 0 2.074 3.411 2.1 3.428zM11.58 8.053q-1.095.653-2.143 1.376a595 595 0 0 1 2.096 3.428c-.935-.57-1.912-1.178-2.713-1.68-.574-.36-1.059-.664-1.38-.857l-.142-.077c-.222-.124-.471-.257-.437-.527a1.63 1.63 0 0 1 .767-1.286l1.92-1.179 1.612-.985a1.46 1.46 0 0 1 1.658-.013l2.336 1.436 1.2.732a1.52 1.52 0 0 1 .772 1.29c.021.609.017 1.218.012 1.822v.45c0 .21-.107.266-.282.158-.223-.132-.446-.291-.669-.445-.21-.146-.416-.292-.621-.416a.28.28 0 0 1-.138-.257v-.146c.009-.497.018-1.003-.471-1.303l-1.35-.814a68 68 0 0 1-1.157-.694.86.86 0 0 0-.45-.137.8.8 0 0 0-.42.124"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      )}
    </BaseIcon>
  ),
)

TokenSDEX.displayName = 'SDEX'
