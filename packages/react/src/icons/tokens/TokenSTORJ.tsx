import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenSTORJ = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M13.24 13.75a2 2 0 0 1-.92.227c-.424 0-.817-.133-1.138-.36-.196.09-.415.141-.646.141-.85 0-1.538-.68-1.538-1.52 0-.838.689-1.518 1.538-1.518q.167 0 .324.034a1.97 1.97 0 0 1 1.46-.645c.963 0 1.763.686 1.927 1.59a1.16 1.16 0 0 1 .865 1.12c0 .64-.526 1.158-1.174 1.158-.261 0-.502-.084-.697-.227m4.692-4.91-.123-.194a.48.48 0 0 1 .458-.625.48.48 0 0 1 .482.477.484.484 0 0 1-.818.341m-11.74-.197-.127.201a.484.484 0 0 1-.815-.345.48.48 0 0 1 .483-.476.48.48 0 0 1 .46.62m5.805-3.309a.48.48 0 0 0 .482-.476.48.48 0 0 0-.482-.476.48.48 0 0 0-.482.477.48.48 0 0 0 .482.475m.482 13.81a.48.48 0 0 1-.482.476.48.48 0 0 1-.482-.476.48.48 0 0 1 .482-.476c.267 0 .482.213.482.476M5.733 15.98a.48.48 0 0 0 .482-.476.48.48 0 0 0-.482-.476.48.48 0 0 0-.445.66.48.48 0 0 0 .445.293m13.017-.476a.48.48 0 0 1-.482.476.48.48 0 0 1-.482-.477.48.48 0 0 1 .482-.476.48.48 0 0 1 .482.477"
          />
          <path
            fill="currentColor"
            d="M13.41 5.177q.037-.155.037-.32c0-.789-.648-1.428-1.447-1.428a1.438 1.438 0 0 0-1.41 1.748L6.66 7.395a1.45 1.45 0 0 0-.927-.333c-.8 0-1.447.64-1.447 1.429a1.43 1.43 0 0 0 .964 1.347v4.304a1.43 1.43 0 0 0-.964 1.347c0 .79.648 1.429 1.447 1.429.332 0 .654-.113.913-.321l3.944 2.226q-.035.155-.036.32c0 .79.648 1.429 1.446 1.429a1.438 1.438 0 0 0 1.41-1.749l3.945-2.226c.249.2.567.32.913.32.8 0 1.447-.64 1.447-1.428a1.43 1.43 0 0 0-.965-1.347V9.838a1.43 1.43 0 0 0 .965-1.347c0-.789-.648-1.429-1.447-1.429-.338 0-.667.117-.928.333zm-.928.5a.95.95 0 0 0 .473-.82.96.96 0 0 0-.964-.952.96.96 0 0 0-.965.952.95.95 0 0 0 .492.83v3.716c-.373.11-.72.297-1.021.553l-.084-.002c-.329 0-.641.07-.923.196L6.694 8.422a.96.96 0 0 0-.961-.883.96.96 0 0 0-.965.952c0 .526.432.952.965.952a.97.97 0 0 0 .536-.16l2.408 1.488a2.18 2.18 0 0 0-.233 2.442L6.188 14.65a1 1 0 0 0-.455-.113.96.96 0 0 0-.965.952c0 .526.432.952.965.952a.96.96 0 0 0 .963-.982l2.386-1.52a2.25 2.25 0 0 0 1.694.405q.347.228.742.344v3.625a.95.95 0 0 0-.492.83c0 .526.432.952.965.952a.96.96 0 0 0 .964-.952.95.95 0 0 0-.473-.82V14.8a3 3 0 0 0 .619-.104c.259.119.548.185.852.185a2.03 2.03 0 0 0 1.449-.604l1.902 1.187v.026c0 .526.432.952.964.952a.96.96 0 0 0 .965-.952.96.96 0 0 0-.965-.952 1 1 0 0 0-.46.115l-1.918-1.198a1.97 1.97 0 0 0-.188-1.568 2 2 0 0 0-.737-.728l-.05-.135 2.816-1.741a.97.97 0 0 0 .537.161.96.96 0 0 0 .965-.952.96.96 0 0 0-.965-.952.96.96 0 0 0-.962.882l-2.898 1.793a2.8 2.8 0 0 0-1.926-.922z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="#2683FF"
            d="M13.24 13.75a2 2 0 0 1-.92.227c-.424 0-.817-.133-1.138-.36-.196.09-.415.141-.646.141-.85 0-1.538-.68-1.538-1.52 0-.838.689-1.518 1.538-1.518q.167 0 .324.034a1.97 1.97 0 0 1 1.46-.645c.963 0 1.763.686 1.927 1.59a1.16 1.16 0 0 1 .865 1.12c0 .64-.526 1.158-1.174 1.158-.261 0-.502-.084-.697-.227m4.692-4.91-.123-.194a.48.48 0 0 1 .458-.625.48.48 0 0 1 .482.477.484.484 0 0 1-.818.341m-11.74-.197-.127.201a.484.484 0 0 1-.815-.345.48.48 0 0 1 .483-.476.48.48 0 0 1 .46.62m5.805-3.309a.48.48 0 0 0 .482-.476.48.48 0 0 0-.482-.476.48.48 0 0 0-.482.477.48.48 0 0 0 .482.475m.482 13.81a.48.48 0 0 1-.482.476.48.48 0 0 1-.482-.476.48.48 0 0 1 .482-.476c.267 0 .482.213.482.476M5.733 15.98a.48.48 0 0 0 .482-.476.48.48 0 0 0-.482-.476.48.48 0 0 0-.445.66.48.48 0 0 0 .445.293m13.017-.476a.48.48 0 0 1-.482.476.48.48 0 0 1-.482-.477.48.48 0 0 1 .482-.476.48.48 0 0 1 .482.477"
          />
          <path
            fill="#2683FF"
            d="M13.41 5.177q.037-.155.037-.32c0-.789-.648-1.428-1.447-1.428a1.438 1.438 0 0 0-1.41 1.748L6.66 7.395a1.45 1.45 0 0 0-.927-.333c-.8 0-1.447.64-1.447 1.429a1.43 1.43 0 0 0 .964 1.347v4.304a1.43 1.43 0 0 0-.964 1.347c0 .79.648 1.429 1.447 1.429.332 0 .654-.113.913-.321l3.944 2.226q-.035.155-.036.32c0 .79.648 1.429 1.446 1.429a1.438 1.438 0 0 0 1.41-1.749l3.945-2.226c.249.2.567.32.913.32.8 0 1.447-.64 1.447-1.428a1.43 1.43 0 0 0-.965-1.347V9.838a1.43 1.43 0 0 0 .965-1.347c0-.789-.648-1.429-1.447-1.429-.338 0-.667.117-.928.333zm-.928.5a.95.95 0 0 0 .473-.82.96.96 0 0 0-.964-.952.96.96 0 0 0-.965.952.95.95 0 0 0 .492.83v3.716c-.373.11-.72.297-1.021.553l-.084-.002c-.329 0-.641.07-.923.196L6.694 8.422a.96.96 0 0 0-.961-.883.96.96 0 0 0-.965.952c0 .526.432.952.965.952a.97.97 0 0 0 .536-.16l2.408 1.488a2.18 2.18 0 0 0-.233 2.442L6.188 14.65a1 1 0 0 0-.455-.113.96.96 0 0 0-.965.952c0 .526.432.952.965.952a.96.96 0 0 0 .963-.982l2.386-1.52a2.25 2.25 0 0 0 1.694.405q.347.228.742.344v3.625a.95.95 0 0 0-.492.83c0 .526.432.952.965.952a.96.96 0 0 0 .964-.952.95.95 0 0 0-.473-.82V14.8a3 3 0 0 0 .619-.104c.259.119.548.185.852.185a2.03 2.03 0 0 0 1.449-.604l1.902 1.187v.026c0 .526.432.952.964.952a.96.96 0 0 0 .965-.952.96.96 0 0 0-.965-.952 1 1 0 0 0-.46.115l-1.918-1.198a1.97 1.97 0 0 0-.188-1.568 2 2 0 0 0-.737-.728l-.05-.135 2.816-1.741a.97.97 0 0 0 .537.161.96.96 0 0 0 .965-.952.96.96 0 0 0-.965-.952.96.96 0 0 0-.962.882l-2.898 1.793a2.8 2.8 0 0 0-1.926-.922z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      )}
    </BaseIcon>
  ),
)

TokenSTORJ.displayName = 'STORJ'
