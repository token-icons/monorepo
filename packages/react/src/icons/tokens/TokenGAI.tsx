import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenGAI = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M13.08 18.497a.3.3 0 0 0-.043-.128l-.981-1.74a.33.33 0 0 0-.193-.155.31.31 0 0 0-.335.12.33.33 0 0 0-.025.36l.977 1.728a.33.33 0 0 0 .416.145.32.32 0 0 0 .171-.197q.02-.063.013-.133m.9-.167a.321.321 0 0 1 .574.155.334.334 0 0 1-.277.372.31.31 0 0 1-.318-.162.33.33 0 0 1 .025-.365zm.18-2.55a.32.32 0 0 1 .433.12l1.393 2.464a.33.33 0 0 1-.146.463c-.15.069-.33 0-.416-.15l-1.384-2.451a.33.33 0 0 1 .12-.446m-6.073 2.55a.32.32 0 0 1 .214-.124.31.31 0 0 1 .313.163.33.33 0 0 1-.234.488.31.31 0 0 1-.319-.162.33.33 0 0 1 .026-.365m3.017-.728q.053.043.086.098l.364.652c.086.15.056.343-.085.441a.32.32 0 0 1-.46-.103l-.372-.664a.33.33 0 0 1 .116-.446.31.31 0 0 1 .351.026zm6.18-4.723c.035.026.06.06.086.094l.827 1.474a.33.33 0 0 1-.146.463c-.15.069-.33 0-.415-.15l-.823-1.457a.33.33 0 0 1 .116-.45.31.31 0 0 1 .355.026m2.306-1.14a.334.334 0 0 1-.034.54.31.31 0 0 1-.437-.12.33.33 0 0 1 .115-.446.31.31 0 0 1 .356.026m-1.98-2.25a.33.33 0 0 0-.416-.146l.009.004a.32.32 0 0 0-.172.197.34.34 0 0 0 .026.266l1.877 3.326a.34.34 0 0 1-.085.441.32.32 0 0 1-.46-.102l-2.28-4.038a.325.325 0 0 0-.415-.145.32.32 0 0 0-.171.197.33.33 0 0 0 .026.261l1.285 2.28a.33.33 0 0 1-.141.459c-.155.073-.335 0-.416-.146l-.287-.501c-.082-.15-.261-.219-.412-.146a.32.32 0 0 0-.17.197.33.33 0 0 0 .025.261l.973 1.728a.33.33 0 0 1-.146.458c-.15.069-.33 0-.416-.146l-1.217-2.16a.33.33 0 0 0-.21-.158.31.31 0 0 0-.257.056.35.35 0 0 0-.082.441l.75 1.329a.33.33 0 0 1-.115.445.314.314 0 0 1-.437-.12l-.185-.33a.326.326 0 0 0-.467-.102.35.35 0 0 0-.081.44l.518.918a.33.33 0 0 1-.145.463c-.15.069-.33 0-.412-.15l-.227-.394a.33.33 0 0 0-.206-.155.31.31 0 0 0-.257.052c-.133.098-.163.296-.081.441l1.251 2.216a.33.33 0 0 1-.146.459.324.324 0 0 1-.415-.146l-2.276-4.025c-.086-.15-.261-.222-.416-.15a.32.32 0 0 0-.171.198.34.34 0 0 0 .026.261l.942 1.663a.33.33 0 0 1-.145.463.326.326 0 0 1-.416-.15l-.639-1.127a.33.33 0 0 0-.205-.155.31.31 0 0 0-.257.052c-.133.098-.163.296-.082.441l.87 1.543a.33.33 0 0 1-.146.463.32.32 0 0 1-.41-.15L8.19 13.693a.325.325 0 0 0-.34-.157.3.3 0 0 0-.123.054.35.35 0 0 0-.086.442l2.452 4.337a.33.33 0 0 1-.146.463c-.15.068-.33 0-.416-.15l-1.705-3.026a.33.33 0 0 0-.344-.155.3.3 0 0 0-.12.052.34.34 0 0 0-.085.441l.81 1.432a.33.33 0 0 1-.146.463.33.33 0 0 1-.415-.146L4.286 12l3.87-6.857h7.74l3.244 5.752a.33.33 0 0 1-.146.462c-.15.069-.33 0-.411-.15l-.973-1.714zm-2.25 5.156.831 1.47a.33.33 0 0 1-.039.377.3.3 0 0 1-.106.081c-.155.073-.33 0-.416-.146l-.823-1.457a.33.33 0 0 1 .238-.486.31.31 0 0 1 .315.16m1.496.085a.4.4 0 0 1 .081.095l.514.917a.337.337 0 0 1-.081.441.32.32 0 0 1-.463-.103l-.523-.93a.33.33 0 0 1 .116-.446.31.31 0 0 1 .356.026m-.665 2.293a.32.32 0 0 1 .215-.128.31.31 0 0 1 .317.162.33.33 0 0 1-.235.488.31.31 0 0 1-.318-.162.33.33 0 0 1 .021-.36m-5.58-7.166.729-1.285h2.087l-1.65 3H5.53L8.653 6H14.9l-.985 1.714H9.86L8.73 9.857z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#GAI__a)"
            d="M13.08 18.497a.3.3 0 0 0-.042-.128l-.982-1.74a.33.33 0 0 0-.193-.155.31.31 0 0 0-.334.12.33.33 0 0 0-.026.36l.977 1.728a.33.33 0 0 0 .416.145.32.32 0 0 0 .172-.197q.019-.063.012-.133m.9-.167a.32.32 0 0 1 .45-.06.326.326 0 0 1 .095.403.33.33 0 0 1-.129.142.313.313 0 0 1-.437-.12.33.33 0 0 1 .026-.365zm.18-2.55a.32.32 0 0 1 .433.12l1.393 2.464a.33.33 0 0 1-.146.463c-.15.069-.33 0-.415-.15l-1.385-2.451a.33.33 0 0 1 .12-.446m-6.072 2.55a.32.32 0 0 1 .214-.124.31.31 0 0 1 .313.163.33.33 0 0 1-.235.488.31.31 0 0 1-.318-.162.33.33 0 0 1 .026-.365m3.017-.728q.052.043.085.098l.365.652c.085.15.055.343-.086.441a.32.32 0 0 1-.459-.103l-.372-.664a.33.33 0 0 1 .115-.446.31.31 0 0 1 .352.026zm6.18-4.723q.05.041.085.094l.828 1.474a.33.33 0 0 1-.146.463c-.15.069-.33 0-.416-.15l-.823-1.457a.33.33 0 0 1 .116-.45.31.31 0 0 1 .356.026m2.305-1.14a.334.334 0 0 1-.034.54.31.31 0 0 1-.437-.12.33.33 0 0 1 .116-.446.31.31 0 0 1 .355.026m-1.98-2.25a.33.33 0 0 0-.415-.146l.008.004a.32.32 0 0 0-.171.197.34.34 0 0 0 .026.266l1.877 3.326a.34.34 0 0 1-.086.441.32.32 0 0 1-.459-.102l-2.28-4.038a.325.325 0 0 0-.415-.145.32.32 0 0 0-.172.197.33.33 0 0 0 .026.261l1.286 2.28a.33.33 0 0 1-.142.459c-.154.073-.334 0-.415-.146l-.288-.501c-.081-.15-.261-.219-.411-.146a.32.32 0 0 0-.185.33.3.3 0 0 0 .04.129l.972 1.727a.33.33 0 0 1-.146.458c-.15.069-.33 0-.415-.146l-1.217-2.16a.33.33 0 0 0-.21-.158.31.31 0 0 0-.258.056.35.35 0 0 0-.081.441l.75 1.329a.33.33 0 0 1-.116.445.314.314 0 0 1-.437-.12l-.184-.33a.324.324 0 0 0-.467-.102.35.35 0 0 0-.082.44l.519.918a.33.33 0 0 1-.146.463c-.15.069-.33 0-.411-.15l-.227-.394a.33.33 0 0 0-.206-.155.31.31 0 0 0-.257.052c-.133.098-.163.296-.082.441l1.252 2.216a.33.33 0 0 1-.146.459c-.154.072-.334 0-.416-.146l-2.275-4.025c-.086-.15-.262-.222-.416-.15a.32.32 0 0 0-.172.198.34.34 0 0 0 .026.261l.943 1.663a.33.33 0 0 1-.038.381.3.3 0 0 1-.108.082.326.326 0 0 1-.415-.15l-.639-1.127a.33.33 0 0 0-.206-.155.31.31 0 0 0-.257.052c-.133.098-.163.296-.081.441l.87 1.543a.33.33 0 0 1-.146.463c-.15.069-.33 0-.411-.15L8.19 13.693a.325.325 0 0 0-.34-.157.3.3 0 0 0-.122.054.35.35 0 0 0-.086.442l2.451 4.337a.33.33 0 0 1-.145.463c-.15.068-.33 0-.416-.15l-1.706-3.026a.33.33 0 0 0-.344-.155.3.3 0 0 0-.119.052.34.34 0 0 0-.085.441l.81 1.432a.33.33 0 0 1-.146.463.33.33 0 0 1-.416-.146L4.286 12l3.87-6.857h7.74l3.244 5.752a.33.33 0 0 1-.145.462c-.15.069-.33 0-.412-.15l-.973-1.714zm-2.25 5.156.832 1.47a.33.33 0 0 1-.146.458c-.154.073-.33 0-.416-.146l-.822-1.457a.33.33 0 0 1 .237-.486.31.31 0 0 1 .315.16m1.496.085a.4.4 0 0 1 .082.095l.514.917a.336.336 0 0 1-.082.441.32.32 0 0 1-.462-.103l-.523-.93a.33.33 0 0 1 .115-.446.31.31 0 0 1 .356.026m-.664 2.293a.32.32 0 0 1 .214-.128.31.31 0 0 1 .317.162.33.33 0 0 1-.234.488.31.31 0 0 1-.319-.162.33.33 0 0 1 .022-.36m-5.58-7.166.728-1.285h2.088l-1.65 3H5.529L8.653 6h6.249l-.986 1.714H9.862L8.73 9.857z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <defs>
            <linearGradient
              id="GAI__a"
              x1="8.156"
              x2="16.136"
              y1="5.143"
              y2="18.656"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".2" stopColor="#EE3285" />
              <stop offset=".9" stopColor="#8D3C97" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

TokenGAI.displayName = 'GAI'
