import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenIDEA = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m8.936 10.667-1.697-.771.437-.78 1.697.775-.437.772zm3.287-1.281c.124 0 .223-.107.223-.236s-.099-.236-.223-.236S12 9.021 12 9.15c0 .128.099.236.223.236m-.609-.137a.3.3 0 0 0 .013-.078.23.23 0 0 0-.223-.235c-.12 0-.222.107-.222.235 0 .129.102.236.223.236a.2.2 0 0 0 .081-.017l.111.12a.3.3 0 0 0-.008.069.23.23 0 0 0 .223.235c.12 0 .218-.107.218-.236 0-.128-.098-.235-.218-.235a.2.2 0 0 0-.086.017zm-.39.304c0 .128-.102.236-.222.236h-.035l-.15.265a.24.24 0 0 1 0 .257l.078.12a.23.23 0 0 1 .291.227.23.23 0 0 1-.223.232.226.226 0 0 1-.223-.232q0-.051.017-.09l-.098-.15h-.026a.226.226 0 0 1-.223-.23c0-.13.099-.237.223-.237h.022l.154-.278a.25.25 0 0 1-.03-.12c0-.129.098-.236.223-.236.12 0 .223.107.223.236m-.985.3a.226.226 0 0 0 .223-.232.23.23 0 0 0-.223-.235c-.125 0-.223.103-.223.235q.002.046.017.086l-.18.253a.2.2 0 0 0-.06-.009c-.12 0-.218.103-.218.236 0 .129.098.236.218.236.129 0 .223-.107.223-.236a.3.3 0 0 0-.017-.098l.171-.245a.2.2 0 0 0 .069.013zm1.388.24c0 .128-.098.236-.223.236-.12 0-.222-.108-.222-.236 0-.129.102-.236.223-.236.124 0 .222.103.222.236m-.043 2.571a.23.23 0 0 0-.2-.236.64.64 0 0 1-.254-.36.3.3 0 0 0 .013-.102.6.6 0 0 1 .27-.399c.103-.021.172-.116.172-.231 0-.129-.095-.232-.215-.232a.227.227 0 0 0-.227.232l.004.043c-.043.214-.145.32-.231.372-.12 0-.214.107-.214.236 0 .111.072.206.171.232.107.064.257.192.287.36a.3.3 0 0 0-.017.085c0 .129.099.232.223.232a.226.226 0 0 0 .223-.232zm-1.967-.677c0 .129-.098.236-.222.236-.12 0-.219-.107-.219-.236s.099-.236.219-.236c.124 0 .222.107.222.236m.318.703a.24.24 0 0 0 .034-.129.23.23 0 0 0-.223-.231c-.124 0-.223.103-.223.236 0 .128.099.231.223.231h.026l.223.369a.25.25 0 0 0-.026.111c0 .129.098.236.218.236.125 0 .223-.103.223-.236a.226.226 0 0 0-.223-.231h-.038zm-.275.497c0 .129-.098.236-.223.236a.23.23 0 0 1-.222-.236c0-.128.102-.236.222-.236.125 0 .223.107.223.236m-.484-.386c.12 0 .219-.107.219-.235 0-.129-.099-.236-.219-.236-.124 0-.223.103-.223.236 0 .128.099.231.223.231zm.484-2.04a.3.3 0 0 1-.03.12l.159.223h.051l.155-.227a.24.24 0 0 1-.026-.116c0-.128.098-.235.218-.235a.23.23 0 0 1 .223.235c0 .129-.098.236-.223.236h-.038l-.159.232a.24.24 0 0 1 .026.11c0 .13-.099.237-.223.237-.12 0-.218-.107-.218-.236 0-.056.017-.107.042-.146l-.145-.201-.026.004-.116.249a.23.23 0 0 1 .065.167c0 .128-.099.236-.219.236-.124 0-.223-.108-.223-.236a.23.23 0 0 1 .202-.236l.12-.257a.24.24 0 0 1-.06-.159c0-.128.102-.235.222-.235a.23.23 0 0 1 .223.235m.857.815c.125 0 .223-.107.223-.24a.226.226 0 0 0-.223-.232.23.23 0 0 0-.223.232c0 .128.103.235.223.235zm.403 1.971c.129 0 .223-.103.223-.236a.23.23 0 0 0-.223-.235c-.12 0-.218.107-.218.235 0 .129.098.236.218.236m.694.36c0 .129-.098.236-.222.236a.2.2 0 0 1-.073-.013l-.099.171a.2.2 0 0 1 .013.078.23.23 0 0 1-.223.235c-.12 0-.218-.103-.218-.236v-.042l-.197-.228a.2.2 0 0 1-.099.013l-.043.103a.24.24 0 0 1 .052.155c0 .128-.099.235-.219.235-.124 0-.223-.103-.223-.236 0-.128.094-.23.214-.235l.056-.125a.25.25 0 0 1-.039-.128c0-.129.103-.236.223-.236.125 0 .223.103.223.236l-.013.077.18.206a.21.21 0 0 1 .172-.017l.103-.172a.3.3 0 0 1-.013-.077c0-.129.103-.236.223-.236.124 0 .223.107.223.236m.416-1.86c0 .129-.098.236-.218.236-.125 0-.223-.107-.223-.236s.09-.227.205-.236c.078-.051.172-.162.228-.377a.25.25 0 0 1-.009-.171.6.6 0 0 0-.214-.373.23.23 0 0 1-.214-.232c0-.128.102-.235.227-.235.12 0 .218.103.218.236a.3.3 0 0 1-.021.107c.043.107.128.295.21.338.128 0 .227.103.227.232a.24.24 0 0 1-.129.214l.013.004a.68.68 0 0 0-.3.467zm.223.849a.226.226 0 0 0 .223-.232c0-.128-.099-.236-.223-.236a.23.23 0 0 0-.223.236q.001.053.022.099l-.185.283h-.03a.226.226 0 0 0-.223.231c0 .129.1.236.223.236a.23.23 0 0 0 .223-.236.26.26 0 0 0-.034-.124l.171-.262zm.193 1.011c0 .129-.099.236-.223.236S12 14.04 12 13.907c0-.129.099-.236.223-.236s.223.107.223.236m.18.759c.124 0 .223-.103.223-.236 0-.129-.099-.236-.223-.236-.12 0-.219.107-.219.236s.099.236.219.236m.261-2.679c0 .129-.098.236-.223.236-.12 0-.218-.107-.218-.236s.098-.236.223-.236c.12 0 .218.107.218.236m.185.917a.23.23 0 0 0 .223-.236c0-.128-.103-.235-.223-.235-.125 0-.223.107-.223.236q.002.053.017.094l-.159.257H12.7a.226.226 0 0 0-.223.231c0 .129.098.236.223.236a.23.23 0 0 0 .223-.236c0-.05-.017-.1-.048-.141l.138-.214q.026.01.06.008m.223.986c0 .043-.018.09-.043.128l.081.13h.021c.125 0 .223.102.223.23 0 .13-.098.236-.223.236-.124 0-.222-.103-.222-.236a.22.22 0 0 1 .043-.128l-.082-.129h-.021a.226.226 0 0 1-.223-.231c0-.129.098-.236.223-.236a.23.23 0 0 1 .223.236m.214-.403c.128 0 .223-.103.223-.236 0-.128-.099-.235-.219-.235a.23.23 0 0 0-.223.235c0 .129.099.236.223.236zm.514.36c0 .129-.103.236-.223.236-.124 0-.223-.107-.223-.236 0-.128.099-.236.223-.236.12 0 .219.103.219.236zm.154-1.616a.23.23 0 0 0 .223-.235c0-.129-.098-.236-.223-.236-.124 0-.223.103-.223.236 0 .128.1.235.223.235m-.171.498a.24.24 0 0 0 .06-.16.23.23 0 0 0-.223-.235c-.12 0-.223.107-.223.236a.23.23 0 0 0 .215.236l.141.231a.3.3 0 0 0-.022.094c0 .129.1.236.223.236.125 0 .223-.103.223-.236a.24.24 0 0 0-.038-.128l.115-.227c.107 0 .189-.086.189-.197s-.086-.198-.184-.198a.19.19 0 0 0-.189.197c0 .035.009.07.022.095l-.116.227a.2.2 0 0 0-.082.004l-.107-.175zm-3.75-.61a.23.23 0 0 0 .043-.128c0-.133-.103-.24-.223-.24-.129 0-.223.107-.223.236s.099.236.223.236h.017l.223.343a.24.24 0 0 0-.022.098.23.23 0 0 0 .223.232.226.226 0 0 0 .223-.232c0-.128-.098-.236-.223-.236a.2.2 0 0 0-.055.005zm1.864 2.504-.107-.103a.3.3 0 0 0 .017-.086c0-.133-.098-.24-.218-.24-.125 0-.223.107-.223.236s.098.236.223.236c.021 0 .043 0 .064-.009l.103.099a.3.3 0 0 0-.017.094c0 .129.098.236.223.236.12 0 .222-.107.222-.236s-.102-.236-.223-.236a.2.2 0 0 0-.064.009m-.441.227c0 .129-.099.236-.223.236s-.223-.107-.223-.236.099-.236.223-.236.223.107.223.236m-1.616-1.067c0 .128-.098.236-.223.236-.124 0-.223-.108-.223-.236 0-.129.099-.236.223-.236.125 0 .223.107.223.236m3.163-2.409q0 .044-.013.082l.193.3h.051c.125 0 .223.102.223.231s-.098.236-.223.236c-.12 0-.223-.107-.223-.236q.001-.058.026-.103l-.201-.308h-.022c-.103 0-.188-.086-.188-.202 0-.107.085-.197.188-.197s.189.086.189.197m.9.039c0 .128-.103.236-.223.236-.124 0-.223-.108-.223-.236 0-.129.099-.236.223-.236a.23.23 0 0 1 .223.236m-.446-.686c0 .129-.098.24-.223.24-.12 0-.223-.107-.223-.236 0-.128.103-.235.223-.235.125 0 .223.102.223.235zm-.84-1.149c0 .13-.098.236-.223.236-.12 0-.218-.107-.218-.236 0-.128.098-.235.218-.235.125 0 .223.107.223.236m.54.3a.23.23 0 0 0 .223-.235c0-.129-.098-.236-.223-.236-.12 0-.223.107-.223.236 0 .128.103.236.223.236m-.904.215c0 .128-.099.236-.223.236-.12 0-.223-.108-.223-.236 0-.129.103-.236.223-.236.124 0 .223.103.223.236m1.256.33c.128 0 .223-.107.223-.236 0-.128-.099-.236-.223-.236-.12 0-.219.103-.219.236 0 .129.099.236.219.236m-.635-.052a.24.24 0 0 0 .138-.218c0-.129-.099-.236-.219-.236-.124 0-.223.103-.223.236a.2.2 0 0 0 .009.073.43.43 0 0 1-.18.24.25.25 0 0 0-.176.244c0 .137.107.253.236.253.128 0 .24-.116.24-.253a.2.2 0 0 0-.013-.073.56.56 0 0 1 .188-.266m1.303.459a.25.25 0 0 1-.068.171l.068.172a.236.236 0 0 1 .223.24c0 .128-.103.236-.223.236-.124 0-.223-.108-.223-.236a.27.27 0 0 1 .052-.155l-.077-.197a.23.23 0 0 1-.197-.231c0-.129.098-.236.222-.236.125 0 .223.103.223.236M12 6.6a1.15 1.15 0 0 0 1.145-1.157A1.15 1.15 0 0 0 12 4.286a1.15 1.15 0 0 0-1.144 1.157A1.15 1.15 0 0 0 12 6.6m5.713 3.441a1.144 1.144 0 1 0 .14-2.284 1.144 1.144 0 0 0-.14 2.284M18.857 15a1.071 1.071 0 1 1-2.142 0 1.071 1.071 0 0 1 2.142 0m-12.57-4.93c.63 0 1.14-.514 1.14-1.157s-.514-1.157-1.14-1.157a1.15 1.15 0 0 0-1.144 1.157 1.15 1.15 0 0 0 1.144 1.157m6.858 8.486A1.15 1.15 0 0 1 12 19.714a1.15 1.15 0 0 1-1.144-1.157A1.15 1.15 0 0 1 12 17.4c.63 0 1.145.514 1.145 1.157m-6.858-2.314c.63 0 1.14-.514 1.14-1.157a1.15 1.15 0 0 0-1.144-1.158 1.147 1.147 0 0 0-1.14 1.158c0 .643.514 1.157 1.14 1.157zm5.285-7.672V6.857h.857v1.714zm3.227 2.392 1.916-1.08-.429-.746-1.912 1.08.43.746zm-5.486 2.7-1.684.977-.343-.643 1.68-.977.343.643zm2.259 1.62v1.714h.857v-1.714zm4.701-.416-1.971-.9.343-.729 1.971.905zm-3.309-8.486c.155-.167.266-.368.326-.591l3.626 2.048c-.18.138-.326.318-.42.528l-3.531-1.989zm4.75 3.887q.198-.001.385-.055v3.583a1.33 1.33 0 0 0-.767 0v-3.583c.124.034.248.056.385.056zm-1.188 5.405-3.557 1.963c.154.167.27.368.325.591l3.686-2.044a1.3 1.3 0 0 1-.454-.51m-5.82 2.558a1.4 1.4 0 0 1 .321-.595l-3.54-1.959c-.098.21-.252.386-.437.523zm-4.419-4.495c-.132 0-.261.021-.385.055V10.21c.25.075.517.075.767 0v3.582a1.3 1.3 0 0 0-.386-.055zm1.218-5.37 3.531-1.993a1.35 1.35 0 0 1-.326-.587L7.085 7.834c.18.137.325.317.42.532"
          />
        </>
      ) : (
        <>
          <path
            fill="#282828"
            d="m8.935 10.667-1.697-.771.437-.78 1.698.775-.438.772z"
          />
          <path
            fill="#03A0DD"
            d="M12.223 9.386c.124 0 .222-.107.222-.236s-.098-.236-.222-.236c-.125 0-.223.107-.223.236 0 .128.098.236.223.236m-.609-.137a.3.3 0 0 0 .013-.078.23.23 0 0 0-.223-.235c-.12 0-.223.107-.223.235 0 .129.103.236.223.236a.2.2 0 0 0 .082-.017l.11.12a.3.3 0 0 0-.008.069.23.23 0 0 0 .223.235c.12 0 .219-.107.219-.236 0-.128-.099-.235-.219-.235a.2.2 0 0 0-.085.017zm-.39.304c0 .128-.103.236-.223.236h-.034l-.15.265a.24.24 0 0 1 0 .257l.077.12a.23.23 0 0 1 .291.227.23.23 0 0 1-.222.232.226.226 0 0 1-.223-.232q-.001-.051.017-.09l-.099-.15h-.025a.226.226 0 0 1-.223-.23c0-.13.098-.237.223-.237h.021l.154-.278a.25.25 0 0 1-.03-.12c0-.129.099-.236.223-.236.12 0 .223.107.223.236m-.986.3a.226.226 0 0 0 .223-.232.23.23 0 0 0-.223-.235.227.227 0 0 0-.223.235c0 .03.009.06.018.086l-.18.253a.2.2 0 0 0-.06-.009c-.12 0-.219.103-.219.236 0 .129.099.236.219.236.128 0 .223-.107.223-.236a.3.3 0 0 0-.018-.098l.172-.245a.2.2 0 0 0 .068.013zm1.389.24c0 .128-.099.236-.223.236-.12 0-.223-.108-.223-.236 0-.129.103-.236.223-.236.124 0 .223.103.223.236m-.043 2.571a.23.23 0 0 0-.201-.236.64.64 0 0 1-.253-.36.3.3 0 0 0 .013-.102.6.6 0 0 1 .27-.399c.102-.021.171-.116.171-.231 0-.129-.094-.232-.214-.232a.227.227 0 0 0-.227.232l.004.043c-.043.214-.146.32-.232.372-.12 0-.214.107-.214.236 0 .111.073.206.172.232.107.064.257.192.287.36a.3.3 0 0 0-.017.085c0 .129.098.232.223.232a.226.226 0 0 0 .222-.232zm-1.967-.677c0 .129-.099.236-.223.236-.12 0-.219-.107-.219-.236s.099-.236.219-.236c.124 0 .223.107.223.236m.317.703a.24.24 0 0 0 .034-.129.23.23 0 0 0-.223-.231c-.124 0-.222.103-.222.236 0 .128.098.231.222.231h.026l.223.369a.24.24 0 0 0-.026.111c0 .129.099.236.219.236.124 0 .223-.103.223-.236a.226.226 0 0 0-.223-.231h-.039zm-.274.497c0 .129-.099.236-.223.236a.23.23 0 0 1-.223-.236c0-.128.103-.236.223-.236.124 0 .223.107.223.236m-.485-.386c.12 0 .219-.107.219-.235 0-.129-.099-.236-.219-.236-.124 0-.222.103-.222.236 0 .128.098.231.222.231zm.485-2.04a.3.3 0 0 1-.03.12l.158.223h.052l.154-.227a.24.24 0 0 1-.026-.116c0-.128.099-.235.219-.235a.23.23 0 0 1 .223.235c0 .129-.099.236-.223.236h-.039l-.158.232a.24.24 0 0 1 .025.11c0 .13-.098.237-.222.237-.12 0-.219-.107-.219-.236q.002-.086.043-.146l-.146-.201-.026.004-.115.249a.23.23 0 0 1 .064.167c0 .128-.099.236-.219.236-.124 0-.222-.108-.222-.236a.23.23 0 0 1 .201-.236l.12-.257a.24.24 0 0 1-.06-.159c0-.128.103-.235.223-.235a.23.23 0 0 1 .223.235m.857.815c.124 0 .223-.107.223-.24a.226.226 0 0 0-.223-.232.23.23 0 0 0-.223.232c0 .128.103.235.223.235zm.403 1.971c.128 0 .223-.103.223-.236a.23.23 0 0 0-.223-.235c-.12 0-.219.107-.219.235 0 .129.099.236.219.236m.694.36c0 .129-.099.236-.223.236a.2.2 0 0 1-.073-.013l-.098.171a.2.2 0 0 1 .013.078.23.23 0 0 1-.223.235c-.12 0-.219-.103-.219-.236v-.042l-.197-.228a.2.2 0 0 1-.098.013l-.043.103a.24.24 0 0 1 .051.155c0 .128-.098.235-.218.235-.125 0-.223-.103-.223-.236 0-.128.094-.23.214-.235l.056-.125a.25.25 0 0 1-.039-.128c0-.129.103-.236.223-.236.124 0 .223.103.223.236l-.013.077.18.206a.21.21 0 0 1 .171-.017l.103-.172a.3.3 0 0 1-.013-.077c0-.129.103-.236.223-.236.124 0 .223.107.223.236m.416-1.86c0 .129-.099.236-.219.236-.124 0-.223-.107-.223-.236s.09-.227.206-.236c.077-.051.172-.162.227-.377a.25.25 0 0 1-.008-.171.6.6 0 0 0-.215-.373.23.23 0 0 1-.214-.232c0-.128.103-.235.227-.235.12 0 .219.103.219.236a.3.3 0 0 1-.022.107c.043.107.129.295.21.338.129 0 .227.103.227.232a.24.24 0 0 1-.128.214l.013.004a.68.68 0 0 0-.3.467zm.223.849a.226.226 0 0 0 .223-.232c0-.128-.1-.236-.223-.236a.23.23 0 0 0-.223.236q0 .053.021.099l-.184.283h-.03a.226.226 0 0 0-.223.231c0 .129.099.236.223.236a.23.23 0 0 0 .223-.236.26.26 0 0 0-.035-.124l.172-.262zm.192 1.011c0 .129-.098.236-.222.236-.125 0-.223-.103-.223-.236 0-.129.098-.236.223-.236.124 0 .222.107.222.236m.18.759c.125 0 .223-.103.223-.236 0-.129-.098-.236-.223-.236-.12 0-.218.107-.218.236s.098.236.219.236m.262-2.679c0 .129-.099.236-.223.236-.12 0-.219-.107-.219-.236s.099-.236.223-.236c.12 0 .219.107.219.236m.184.917a.23.23 0 0 0 .223-.236c0-.128-.103-.235-.223-.235-.124 0-.223.107-.223.236 0 .034.009.068.018.094l-.16.257h-.008a.226.226 0 0 0-.223.231c0 .129.099.236.223.236a.23.23 0 0 0 .223-.236c0-.05-.017-.1-.047-.141l.137-.214q.027.01.06.008m.223.986c0 .043-.017.09-.043.128l.082.13h.021c.124 0 .223.102.223.23 0 .13-.099.236-.223.236s-.223-.103-.223-.236a.22.22 0 0 1 .043-.128l-.081-.129h-.022a.226.226 0 0 1-.223-.231c0-.129.099-.236.223-.236a.23.23 0 0 1 .223.236m.214-.403c.129 0 .223-.103.223-.236 0-.128-.098-.235-.218-.235a.23.23 0 0 0-.223.235c0 .129.098.236.223.236zm.515.36c0 .129-.103.236-.223.236-.125 0-.223-.107-.223-.236 0-.128.098-.236.223-.236.12 0 .218.103.218.236zm.154-1.616a.23.23 0 0 0 .223-.235c0-.129-.099-.236-.223-.236s-.223.103-.223.236a.23.23 0 0 0 .223.235m-.171.498a.24.24 0 0 0 .06-.16c0-.128-.1-.235-.223-.235-.12 0-.223.107-.223.236a.23.23 0 0 0 .214.236l.142.231a.3.3 0 0 0-.022.094c0 .129.099.236.223.236s.223-.103.223-.236a.24.24 0 0 0-.039-.128l.116-.227c.107 0 .188-.086.188-.197s-.085-.198-.184-.198a.19.19 0 0 0-.188.197c0 .035.008.07.021.095l-.116.227a.2.2 0 0 0-.081.004l-.107-.175zm-3.75-.61a.23.23 0 0 0 .042-.128c0-.133-.103-.24-.223-.24-.128 0-.222.107-.222.236s.098.236.223.236h.017l.223.343a.24.24 0 0 0-.022.098.23.23 0 0 0 .223.232.226.226 0 0 0 .223-.232c0-.128-.099-.236-.223-.236a.2.2 0 0 0-.056.005zm1.864 2.504-.107-.103a.3.3 0 0 0 .017-.086c0-.133-.099-.24-.219-.24-.124 0-.223.107-.223.236s.099.236.223.236c.022 0 .043 0 .065-.009l.102.099a.3.3 0 0 0-.017.094c0 .129.099.236.223.236.12 0 .223-.107.223-.236s-.103-.236-.223-.236a.2.2 0 0 0-.064.009m-.442.227c0 .129-.098.236-.223.236-.124 0-.222-.107-.222-.236s.098-.236.223-.236c.124 0 .222.107.222.236m-1.615-1.067c0 .128-.099.236-.223.236-.125 0-.223-.108-.223-.236 0-.129.098-.236.223-.236.124 0 .223.107.223.236m3.162-2.409q0 .044-.012.082l.193.3h.05c.125 0 .224.102.224.231s-.099.236-.223.236c-.12 0-.223-.107-.223-.236q0-.058.026-.103l-.202-.308h-.021c-.103 0-.189-.086-.189-.202 0-.107.086-.197.189-.197s.188.086.188.197m.9.039c0 .128-.102.236-.222.236-.125 0-.223-.108-.223-.236 0-.129.098-.236.223-.236a.23.23 0 0 1 .223.236m-.445-.686c0 .129-.099.24-.223.24-.12 0-.223-.107-.223-.236 0-.128.103-.235.223-.235.124 0 .223.102.223.235zm-.84-1.149a.23.23 0 0 1-.223.236c-.12 0-.219-.107-.219-.236 0-.128.099-.235.219-.235.124 0 .223.107.223.236m.54.3a.23.23 0 0 0 .223-.235c0-.129-.099-.236-.223-.236-.12 0-.223.107-.223.236 0 .128.103.236.223.236m-.905.215c0 .128-.098.236-.222.236-.12 0-.223-.108-.223-.236 0-.129.103-.236.223-.236.124 0 .223.103.223.236m1.256.33c.129 0 .223-.107.223-.236 0-.128-.099-.236-.223-.236-.12 0-.218.103-.218.236 0 .129.098.236.218.236m-.634-.052a.24.24 0 0 0 .137-.218c0-.129-.098-.236-.219-.236-.124 0-.222.103-.222.236a.2.2 0 0 0 .008.073.43.43 0 0 1-.18.24.25.25 0 0 0-.176.244c0 .137.108.253.236.253.129 0 .24-.116.24-.253a.2.2 0 0 0-.013-.073.56.56 0 0 1 .189-.266m1.303.459a.25.25 0 0 1-.069.171l.069.172a.236.236 0 0 1 .223.24c0 .128-.103.236-.223.236-.125 0-.223-.108-.223-.236 0-.06.021-.112.051-.155l-.077-.197a.23.23 0 0 1-.197-.231c0-.129.099-.236.223-.236s.223.103.223.236"
          />
          <path
            fill="#282828"
            d="M12 6.6a1.15 1.15 0 0 0 1.144-1.157A1.15 1.15 0 0 0 12 4.286a1.15 1.15 0 0 0-1.145 1.157A1.15 1.15 0 0 0 12 6.6m5.713 3.441a1.144 1.144 0 1 0 .14-2.284 1.144 1.144 0 0 0-.14 2.284M18.857 15a1.071 1.071 0 1 1-2.143 0 1.071 1.071 0 0 1 2.143 0m-12.57-4.93c.63 0 1.14-.514 1.14-1.157s-.514-1.157-1.14-1.157a1.15 1.15 0 0 0-1.144 1.157 1.15 1.15 0 0 0 1.144 1.157m6.857 8.486A1.15 1.15 0 0 1 12 19.714a1.15 1.15 0 0 1-1.145-1.157A1.15 1.15 0 0 1 12 17.4c.63 0 1.144.514 1.144 1.157m-6.857-2.314c.63 0 1.14-.514 1.14-1.157a1.15 1.15 0 0 0-1.144-1.158 1.147 1.147 0 0 0-1.14 1.158c0 .643.514 1.157 1.14 1.157zM11.57 8.57V6.857h.857v1.714zm3.227 2.392 1.916-1.08-.428-.746-1.912 1.08.429.746zm-5.485 2.7-1.685.977-.343-.643 1.68-.977.343.643zm2.258 1.62v1.714h.857v-1.714zm4.702-.416-1.972-.9.343-.729 1.972.905zM12.963 6.38a1.4 1.4 0 0 0 .326-.591l3.626 2.048c-.18.138-.326.318-.42.528l-3.532-1.989zm4.749 3.887q.2-.001.385-.055v3.583a1.33 1.33 0 0 0-.767 0v-3.583c.125.034.249.056.386.056zm-1.187 5.405-3.558 1.963c.155.167.27.368.326.591l3.686-2.044a1.3 1.3 0 0 1-.454-.51m-5.82 2.558c.055-.227.17-.428.32-.595l-3.54-1.959c-.098.21-.252.386-.436.523zm-4.42-4.495c-.132 0-.26.021-.385.055v-3.58c.25.075.517.075.767 0v3.582a1.3 1.3 0 0 0-.385-.055zm1.218-5.37 3.532-1.993a1.35 1.35 0 0 1-.326-.587L7.084 7.834c.18.137.326.317.42.532"
          />
        </>
      )}
    </BaseIcon>
  ),
)

TokenIDEA.displayName = 'IDEA'
