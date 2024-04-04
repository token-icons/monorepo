import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenMVL = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M16.035 8.426c-.495 1.946-1.55 6.05-1.811 6.903-.09.29-.25.722-.57 1.089-.348.397-.977.725-1.654.725-.792 0-1.256-.313-1.647-.767-.309-.36-.444-.789-.503-.975l-.017-.052-.009-.027-1.802-6.93c.004.018-.014-.045-.096-.113-.069-.058-.217-.147-.518-.147-.382 0-.55.432-.55.868 0 .47-.393.857-.858.857A.865.865 0 0 1 5.143 9v-.64c0-.288.261-.792.592-1.172a2.17 2.17 0 0 1 1.673-.76c1.382 0 2.085.895 2.246 1.55l1.783 6.855.004.012c.272.815.944.733 1.175-.02.247-.805 1.296-4.885 1.796-6.85l.003-.013.004-.012c.175-.613.875-1.521 2.238-1.521.736 0 1.3.328 1.668.759.343.403.532.916.532 1.37v7.728c0 .47-.392.857-.857.857a.86.86 0 0 1-.857-.852V8.47a.48.48 0 0 0-.486-.337c-.276 0-.424.084-.503.149a.5.5 0 0 0-.118.142zM6 13.286c.474 0 .857.39.857.873v2.111a.865.865 0 0 1-.857.873.865.865 0 0 1-.857-.873v-2.111c0-.482.384-.873.857-.873"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M4.94 12.118a.773.773 0 0 1 0-1.093l.514-.513a.773.773 0 0 1 1.093 0l.513.513a.774.774 0 0 1 0 1.093l-.513.513a.77.77 0 0 1-1.093 0z"
          />
        </>
      ) : (
        <>
          <path
            fill="#072D3A"
            d="M16.034 8.426c-.495 1.946-1.55 6.05-1.81 6.903-.09.29-.25.722-.57 1.089-.349.397-.977.725-1.654.725-.792 0-1.257-.313-1.647-.767-.31-.36-.445-.789-.503-.975l-.017-.052-.01-.027-1.802-6.93c.005.018-.013-.045-.095-.113-.07-.058-.218-.147-.519-.147-.381 0-.55.432-.55.868 0 .47-.393.857-.857.857A.865.865 0 0 1 5.143 9v-.64c0-.288.26-.792.591-1.172a2.17 2.17 0 0 1 1.674-.76c1.381 0 2.084.895 2.245 1.55l1.784 6.855.004.012c.271.815.944.733 1.175-.02.246-.805 1.295-4.885 1.795-6.85l.003-.013.004-.012c.176-.613.876-1.521 2.239-1.521.735 0 1.3.328 1.667.759.344.403.533.916.533 1.37v7.728c0 .47-.393.857-.857.857a.86.86 0 0 1-.858-.852V8.47a.48.48 0 0 0-.486-.337c-.275 0-.423.084-.503.149a.5.5 0 0 0-.117.142zM6 13.286c.473 0 .857.39.857.873v2.111a.865.865 0 0 1-.857.873.865.865 0 0 1-.857-.873v-2.111c0-.482.384-.873.857-.873"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="#F8B739"
            d="M4.94 12.118a.773.773 0 0 1 0-1.093l.513-.513a.773.773 0 0 1 1.093 0l.513.513a.774.774 0 0 1 0 1.093l-.513.513a.77.77 0 0 1-1.093 0z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

TokenMVL.displayName = 'MVL'
