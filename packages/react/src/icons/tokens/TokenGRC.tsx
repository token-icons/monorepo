import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenGRC = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12 5.212 6.429 8.495v6.582L12 18.36l5.571-3.283V8.494zm6 3.038-6-3.536L6 8.25v7.072l6 3.535 6-3.535z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M16.393 11.09c-.28-1.398-1.264-2.403-2.375-3.185l-1.564.827c1.1.613 2.096 1.34 2.405 2.41h1.545zm-4.386-4.388c.506.276 1.063.58 1.607.931L12 8.487q-.305-.159-.606-.312-.51-.254-1.008-.53a24 24 0 0 1 1.618-.945zm-.45-.248a10 10 0 0 1-.833-.505c-.502.3-1.506.891-1.506.862.2.208.46.402.755.59a25 25 0 0 1 1.585-.947M16.467 12H12l-.857 1.714h2.868c-.692.639-1.677 1.18-2.653 1.716-.768.423-1.531.842-2.14 1.303.502.293 1.506.9 1.506.916l.519-.287c2.228-1.227 5.106-2.811 5.223-5.362"
          />
          <path
            fill="currentColor"
            d="M7.612 11.09c.447-2.236 2.7-3.467 4.386-4.388.497-.272.946-.517 1.283-.753.503.3 1.507.891 1.507.862-.484.503-1.305.92-2.176 1.364-1.716.874-3.629 1.848-3.561 3.774.043 1.218 1.176 2.087 2.52 2.876-.56.314-.953.536-1.55.873-1.585-1.153-2.808-2.614-2.409-4.608m2.798 4.88q.795-.45 1.593-.896.32.18.644.356c.322.177.643.354.952.533l-.232.148c-.477.306-.833.535-1.361.83a23 23 0 0 1-1.596-.97m2.034 1.216.319.176q.267.146.518.287c0-.015 1.005-.623 1.507-.916a10 10 0 0 0-.787-.53l.006.008q-.218.138-.405.259-.57.372-1.158.716"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#GRC__a)"
            d="M12 5.212 6.429 8.495v6.582L12 18.36l5.571-3.283V8.494zm6 3.038-6-3.536L6 8.25v7.072l6 3.535 6-3.535z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="url(#GRC__b)"
            d="M16.393 11.09c-.28-1.398-1.264-2.403-2.375-3.185l-1.564.827c1.1.613 2.096 1.34 2.405 2.41h1.545zm-4.386-4.388c.506.276 1.063.58 1.607.931L12 8.487q-.305-.159-.606-.312-.51-.254-1.008-.53a24 24 0 0 1 1.618-.945zm-.45-.248a10 10 0 0 1-.833-.505c-.502.3-1.506.891-1.506.862.2.208.46.402.755.59a25 25 0 0 1 1.585-.947M16.467 12H12l-.857 1.714h2.868c-.692.639-1.677 1.18-2.653 1.716-.768.423-1.531.842-2.14 1.303.502.293 1.506.9 1.506.916l.519-.287c2.228-1.227 5.106-2.811 5.223-5.362"
          />
          <path
            fill="url(#GRC__c)"
            d="M7.612 11.09c.447-2.236 2.7-3.467 4.386-4.388.497-.272.946-.517 1.283-.753.503.3 1.507.891 1.507.862-.484.503-1.305.92-2.176 1.364-1.716.874-3.629 1.848-3.561 3.774.043 1.218 1.176 2.087 2.52 2.876-.56.314-.953.536-1.55.873-1.585-1.153-2.808-2.614-2.409-4.608m2.798 4.88q.795-.45 1.593-.896.32.18.644.356c.322.177.643.354.952.533l-.232.148c-.477.306-.833.535-1.361.83a23 23 0 0 1-1.596-.97m2.034 1.216.319.176q.267.146.518.287c0-.015 1.005-.623 1.507-.916a10 10 0 0 0-.787-.53l.006.008q-.218.138-.405.259-.57.372-1.158.716"
          />
          <defs>
            <linearGradient
              id="GRC__a"
              x1="12"
              x2="12"
              y1="4.714"
              y2="18.857"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7401E2" />
              <stop offset="1" stopColor="#41007F" />
            </linearGradient>
            <linearGradient
              id="GRC__b"
              x1="12"
              x2="12"
              y1="4.714"
              y2="18.857"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7401E2" />
              <stop offset="1" stopColor="#41007F" />
            </linearGradient>
            <linearGradient
              id="GRC__c"
              x1="12"
              x2="12"
              y1="4.714"
              y2="18.857"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7401E2" />
              <stop offset="1" stopColor="#41007F" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

TokenGRC.displayName = 'GRC'
