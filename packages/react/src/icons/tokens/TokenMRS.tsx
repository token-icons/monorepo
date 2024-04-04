import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenMRS = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M8.875 7.408s-.69.208-.335.951c0 0-.505-.257-.88-.064-.375.194-.918.456-1.341.15-.423-.305-.308-.85-.216-1.256.093-.407.072-1.012-.75-1.17 0 0 .714-.192 1.114.323.4.514.002 1.24.596 1.498s.843-.728 1.812-.432M7.523 8.745s-.044.391-.426.438c0 0 .124.867 1.13.536 0 0-.123.68-.675.91-.553.231-1.846.883-1.722 2.952 0 0-.623-.962-.12-2.686.257-.876 1.217-1.286 1.217-1.286s-.506-.042-.972.387c0 0 .366-1.107 1.568-1.251m1.739-1.343c-.36-.482-.79-.424-1.16-.23-.336.176-.822.391-1.067.075-.55-.712.108-1.252-.21-1.903-.373-.762-1.682-.922-1.682-.922.874-.255 1.924-.134 2.39.25.466.385.152 1 .632 1.341s1.186-.022 1.597.42c.41.443.3.904.175 1.073-.147.2-.454.077-.72.415-.268.338-.126.645-.126.645-.893-.71.17-1.164.17-1.164m5.772 6.882s-.122.106-.194.322c-.075.228-.108.498-.448.565 0 0 .109-.073.136-.132.09-.195.07-.61.506-.755m-3.384 1.48c.015-.026.017-.042.067-.036.05.005.3.016.415-.067.114-.084.135.012.104.082a.44.44 0 0 1-.139.167s.123.103.359.043.323-.1.266.014c-.042.082-.146.12-.216.158-.063.033-.3.154-.354.192-.026.018-.048.02-.084-.003s-.012-.092-.057-.124c-.044-.032-.106.011-.132.025s-.054.03-.128.007c-.074-.024-.201-.048-.188-.17a.9.9 0 0 1 .087-.288m-2.76-1.886s-.045.206.155.511c.198.306.756 1.063.288 2.14 0 0-.537-.343-.52-.835.016-.494.186-.463.158-.765-.028-.303-.235-.738-.08-1.05m-.17-1.09s-.553.681-.175 1.423c.33.646.127.791-.222 1.43-.442.807.097 1.726.097 1.726-.514-.142-.951-.677-.915-1.47.015-.338.224-.764.487-1.207.247-.416-.11-.534.198-1.278.14-.336.53-.625.53-.625m4.007-1.75s-.004.13.079.13c.069 0 .067-.062.067-.062s.051.004.07-.006c0 0-.033.242-.208.242-.032 0-.067-.039-.067-.039-.028-.01-.048 0-.035.044s.014.1.098.147c.083.049.205.08.323.175.056.044.202.194.259.285s-.007.049-.055.023c-.032-.016-.233-.17-.351-.212-.119-.043-.22-.032-.266-.1a.84.84 0 0 1-.129-.357c-.003-.123-.002-.13.03-.15zm.562-.487c.066.051.106.034.146.09.041.054-.028.22-.1.255s-.098-.028-.095-.044.057-.098-.052-.194c-.108-.097-.204-.122-.296-.044-.084.073-.086.089-.091.15-.005.06-.035.113-.191.165s-.396.009-.614-.134-.303-.318-.319-.44c0 0 .155.164.42.21 0 0 .112-.383.55-.442.146-.02.333.081.444.198.08.084.122.172.198.23m-.98-1.172c-.123-.057-.22-.104-.217-.22.005-.116.103-.235.284-.363.182-.129.325-.172.45-.115.443.2.463.26.704.701.07.13.094.264.142.316.094.102.23.177.322.323.093.147.09.366.128.49.062.2.135.234.17.338.023.072.031.222.024.378s.01.206.026.298.013.182-.171.13c-.186-.05-.178-.098-.23-.122a.5.5 0 0 0-.287-.02c-.142.025-.037.173.136.18a.9.9 0 0 1 .441.116c.167.098.287.145.352.286.064.14.097.219.306.371s.387.388.41.523c.022.134.043.233.152.43a.5.5 0 0 1 .045.377c-.02.095-.052.165-.075.219-.022.053-.061.088-.116.023-.054-.066-.137-.212-.171-.267-.112-.174-.46-.237-.553-.343-.086-.097-.11-.223-.138-.331s-.066-.153-.103-.017.017.332.094.502.202.54.174.771c-.03.232-.116.41-.176.469-.027.026-.104.057-.236.034-.133-.022-.592-.114-.859-.156 0 0-.294.295-.575.456-.274.157-.257.016-.116-.16.137-.174.26-.382.264-.465 0 0-.153-.097.015-.103a.73.73 0 0 1 .381.063c.115.053.27.143.187-.03-.082-.174-.561-.594-.597-.885-.034-.286.175-.666.427-.671.251-.005.662.251.793.665 0 0 .054-.12-.046-.305-.1-.183-.462-.6-.68-.595-.212.004-.5.093-.737.651-.154.362-.397.28-.45.267-.06-.017-.207-.2-.11-.275.096-.074.206-.162.242-.281 0 0-.569.28-.964.075-.395-.204-.272-.553-.295-.646-.02-.076-.076-.073-.142.02-.066.094-.209.462.102.73.31.269.565.182.694.155.129-.028.18.019.136.095-.046.076-.044.203.073.293s.505.18.497.387c-.005.134-.087.061-.151.047-.114-.026-1.17-.291-1.774.486-.162.208-.089.228-.027.34.04.072.174.493.105.999-.056.41-.027.539.146.7.073.069.287.215.522.184.168-.021.153.04.136.083s-.038.162-.273.176c-.054.003-.704-.006-.918-.372-.143-.245-.08-.31-.205-.6-.083-.196-.172-.177-.23-.348-.051-.145-.03-.241-.028-.35s.028-.164.13-.092c.101.072.195.158.214.18 0 0 0-.088-.122-.302-.122-.215-.977-.968-.685-1.959 0 0-.422-.17-.611.436 0 0-.108-.244.081-.528.141-.214.37-.237.256-.736-.087-.381-.193-.638.061-1.013.255-.374.483-.303.479-.461-.003-.113-.457-.21-.751.276 0 0-.334-1.091 1.29-1.37 0 0-.446-.187-1.043.16-.597.346-.542 1.106-.457 1.495.084.39.318.893-.412 1.41-.498.35-.355.68-.347 1.066.008.387-.193.862-.435 1.166 0 0-.228-.827.084-1.533.312-.704.54-.797.632-.998s-.005-.181-.158-.097c-.155.084-1.278.743-.898 3.113 0 0-.913-.824-.871-2.114s.515-1.915.85-2.192.51-.388.54-.097-.013.343-.163.515a.95.95 0 0 0-.236.647s.21-.37.52-.55c.225-.133.299-.501.303-.773s.18-.816.622-1.292c.441-.476.434-1.006-.064-.682s-.82.413-1.098.183c0 0 .287-.055.318-.352s.329-.551.774-.396.863.611 1.09.677c.224.065.638.143.803.36 0 0-.107-.692.291-.751 0 0-.042-.57-.628-.443-.514.113-.36.58-.36.58s-.672-.41-.269-.917c.389-.488 1.063-.458 1.375-.103 0 0 .12-.228-.04-.41s-.398.033-.492-.165c-.093-.199.18-.313-.046-.794s-.81-.651-1.144-.829-.542-.591-.442-1.084c0 0 .586.706 1.381.697.703-.009 1.054-.198 1.5-.02.444.178.6.494.634.765 0 0 .178-.143.125-.39s-.066-.328.142-.516c0 0-.053.4.502.75s1.052.485 1.096 1.244c.01.171-.169.798-.609 1.013-.21.102-.57.014-.57.014s.923-.739.01-1.466c0 0 .237.46-.197.879 0 0 .18-.558-.203-.653 0 0 .183.235-.095.566-.279.332-.032.531.286.734 0 0-.507.242-.752-.076-.162-.21.114-.54.018-.893-.014-.052-.057-.342-.672-.599-.614-.256-.597-.317-.737-.467 0 0 .02.197.194.42.195.25.426.293.508.443.081.147.088.36.155.446.098.127.227.164.283.309.057.144.105.307-.01.638 0 0-.2.036-.184-.217.015-.253-.046-.362-.242-.369 0 0 .102.122.094.295-.008.172-.165.261-.133.344.038.097.179.12.305.262.125.141.33.306.483.547.154.242.343.67.11.537-.235-.133-.346-.232-.577-.192s-.307.284-.32.574c-.012.291-.063.3-.23.426-.166.128-.295.185-.41.468-.114.282-.35.436-.52.522s-.5.201-.418.63c.082.43.368.843.544 1.002 0 0 .03-.231-.027-.42-.057-.19-.166-.482-.052-.828s.327-.429.379-.446c.051-.016.16-.058.282-.33.122-.27.216-.354.476-.413.261-.06.828-.033 1.034.217s.056.406.306.67c.25.266.442.245.671.293.245.053 1.03.393.867.183a1.14 1.14 0 0 0-.404-.344c-.167-.098-.33-.15-.434-.38-.086-.188-.095-.263-.105-.306-.01-.044-.01-.114.076-.137s.308-.046.36-.273c.04-.18-.037-.45-.064-.512-.057-.13-.21-.132-.284-.204-.107-.103-.435-.545-.58-.63-.077-.046-.292-.113-.363-.145m1.821 5.694s-.173.057-.317-.017c0 0-.184.23-.41.327-.197.084-.3.117-.193-.03.083-.115.097-.103.2-.197s.175-.198.237-.25c.076-.065.152-.032.483.167"
          />
          <path
            fill="currentColor"
            d="M15.34 14.685c-.773 1.284-1.94 2.61-3.706 3.688a12 12 0 0 1-.47-.303.98.98 0 0 0 .657-.457c.158-.258.187-.535.33-.647.153-.118.353-.166.504-.332.29-.317.301-.695.301-.695s.106-.005.203-.025c.105-.021.205-.062.33-.065.183-.003.416.089.595.05.216-.05.368-.105.45-.179.376-.333.325-.673.467-.784.076-.06.21-.142.34-.251m.407-.742c1.102-2.21 1.103-4.11 1.103-4.11-.629-.413-1.506-.933-3.094-1.185.046.15.096.333.11.462.013.136.053.103.142.178.09.076.234.217.286.355.052.14.086.326.135.454s.173.489.181.656c.008.166-.161.578-.09.72.16.32.684.502.841.825.135.277.14.447.188.663.049.216.27.585.203.954z"
          />
          <path
            fill="currentColor"
            d="M5.197 10.76a8 8 0 0 1-.035-1.48q.333-.21.672-.407a.5.5 0 0 0 .195.157s-.613.418-.511 1.317c0 0-.199.18-.32.414m13.641-1.48c-1.122-.707-2.248-1.318-3.957-1.639a1.3 1.3 0 0 1-.227.58c1.83.306 2.852.903 3.59 1.352 0 0 .337 5.954-6.245 9.425-1.4-.74-2.486-1.587-3.33-2.464-.018.254.06.68.431 1.294.844.716 1.803 1.331 2.9 1.887 2.433-1.23 4.184-2.753 5.51-5.023 1.061-1.848 1.442-3.873 1.328-5.412"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#MRS__a)"
            d="M8.875 7.408s-.69.208-.335.951c0 0-.505-.257-.88-.064-.376.194-.918.456-1.342.15-.423-.305-.308-.85-.215-1.256.092-.407.072-1.012-.75-1.17 0 0 .713-.192 1.114.323.4.514.002 1.24.596 1.498.593.258.843-.728 1.812-.432M7.523 8.745s-.045.391-.426.438c0 0 .123.867 1.13.536 0 0-.123.68-.676.91-.553.231-1.845.883-1.721 2.952 0 0-.624-.962-.12-2.686.257-.876 1.216-1.286 1.216-1.286s-.505-.042-.971.387c0 0 .365-1.107 1.568-1.251M9.26 7.402c-.359-.482-.79-.424-1.159-.23-.336.176-.823.391-1.068.075-.55-.712.109-1.252-.21-1.903-.373-.762-1.681-.922-1.681-.922.874-.255 1.924-.134 2.39.25.466.385.151 1 .632 1.341.48.34 1.186-.022 1.596.42.41.443.3.904.176 1.073-.147.2-.454.077-.721.415s-.125.645-.125.645c-.894-.71.17-1.164.17-1.164m5.772 6.882s-.122.106-.194.322c-.074.228-.108.498-.448.565 0 0 .109-.073.136-.132.09-.195.071-.61.506-.755m-3.383 1.48c.015-.026.017-.042.067-.036.05.005.3.016.415-.067.113-.084.134.012.103.082a.44.44 0 0 1-.138.167s.123.103.358.043c.236-.06.324-.1.266.014-.042.082-.145.12-.215.158-.063.033-.3.154-.355.192-.026.018-.047.02-.083-.003s-.013-.092-.057-.124-.106.011-.133.025-.053.03-.127.007c-.074-.024-.202-.048-.189-.17a.9.9 0 0 1 .088-.288m-2.76-1.886s-.045.206.154.511.756 1.063.289 2.14c0 0-.537-.343-.52-.835.015-.494.185-.463.158-.765-.028-.303-.235-.738-.081-1.05m-.17-1.09s-.554.681-.175 1.423c.33.646.127.791-.223 1.43-.441.807.097 1.726.097 1.726-.513-.142-.95-.677-.914-1.47.015-.338.224-.764.487-1.207.247-.416-.11-.534.198-1.278.14-.336.53-.625.53-.625m4.007-1.75s-.004.13.078.13c.069 0 .067-.062.067-.062s.052.004.07-.006c0 0-.032.242-.208.242-.032 0-.067-.039-.067-.039-.027-.01-.047 0-.034.044s.013.1.097.147c.084.049.206.08.323.175.056.044.202.194.26.285.056.09-.007.049-.055.023-.033-.016-.234-.17-.352-.212-.118-.043-.22-.032-.266-.1a.84.84 0 0 1-.128-.357c-.003-.123-.002-.13.029-.15zm.561-.487c.067.051.106.034.147.09.04.054-.029.22-.1.255-.073.035-.098-.028-.095-.044s.057-.098-.052-.194c-.109-.097-.205-.122-.296-.044-.084.073-.087.089-.092.15-.005.06-.034.113-.19.165-.157.053-.397.009-.615-.134s-.302-.318-.318-.44c0 0 .155.164.42.21 0 0 .111-.383.55-.442.146-.02.333.081.443.198.08.084.123.172.198.23m-.98-1.172c-.122-.057-.22-.104-.216-.22s.103-.235.284-.363c.181-.129.324-.172.45-.115.442.2.463.26.704.701.07.13.094.264.142.316.094.102.229.177.322.323s.09.366.127.49c.062.2.136.234.17.338.023.072.032.222.024.378-.006.156.01.206.027.298.016.092.013.182-.172.13-.185-.05-.177-.098-.229-.122a.5.5 0 0 0-.287-.02c-.142.025-.037.173.135.18a.9.9 0 0 1 .442.116c.167.098.287.145.351.286.065.14.098.219.306.371.209.152.388.388.41.523.023.134.044.233.153.43a.5.5 0 0 1 .045.377c-.02.095-.053.165-.075.219s-.062.088-.116.023c-.055-.066-.137-.212-.172-.267-.111-.174-.46-.237-.552-.343-.086-.097-.11-.223-.139-.331-.028-.109-.066-.153-.102-.017s.017.332.094.502.202.54.173.771c-.029.232-.116.41-.176.469-.026.026-.103.057-.236.034-.133-.022-.592-.114-.858-.156 0 0-.295.295-.576.456-.274.157-.257.016-.116-.16.138-.174.26-.382.264-.465 0 0-.153-.097.015-.103a.73.73 0 0 1 .382.063c.114.053.27.143.187-.03-.083-.174-.562-.594-.597-.885-.035-.286.175-.666.426-.671.252-.005.663.251.793.665 0 0 .054-.12-.045-.305-.1-.183-.462-.6-.68-.595-.212.004-.5.093-.738.651-.154.362-.397.28-.449.267-.06-.017-.207-.2-.111-.275.096-.074.206-.162.242-.281 0 0-.568.28-.963.075-.396-.204-.272-.553-.295-.646-.02-.076-.077-.073-.143.02-.066.094-.208.462.102.73.31.269.566.182.695.155.128-.028.18.019.135.095s-.044.203.073.293.506.18.498.387c-.006.134-.088.061-.152.047-.114-.026-1.169-.291-1.774.486-.162.208-.088.228-.026.34.04.072.174.493.105.999-.056.41-.027.539.146.7.072.069.287.215.522.184.168-.021.152.04.136.083s-.039.162-.274.176c-.053.003-.703-.006-.917-.372-.144-.245-.081-.31-.206-.6-.083-.196-.171-.177-.23-.348-.05-.145-.03-.241-.028-.35s.028-.164.13-.092.195.158.214.18c0 0 0-.088-.121-.302-.122-.215-.977-.968-.685-1.959 0 0-.422-.17-.612.436 0 0-.107-.244.082-.528.141-.214.37-.237.256-.736-.087-.381-.194-.638.06-1.013.255-.374.484-.303.48-.461-.004-.113-.458-.21-.752.276 0 0-.333-1.091 1.29-1.37 0 0-.446-.187-1.042.16-.597.346-.542 1.106-.458 1.495.085.39.318.893-.411 1.41-.498.35-.355.68-.347 1.066.008.387-.194.862-.435 1.166 0 0-.229-.827.083-1.533.313-.704.54-.797.633-.998.091-.201-.005-.181-.159-.097s-1.277.743-.898 3.113c0 0-.913-.824-.871-2.114s.516-1.915.85-2.192c.335-.277.511-.388.54-.097s-.013.343-.163.515a.95.95 0 0 0-.236.647s.211-.37.52-.55c.226-.133.3-.501.304-.773s.18-.816.621-1.292c.442-.476.435-1.006-.064-.682-.498.324-.82.413-1.097.183 0 0 .287-.055.318-.352s.328-.551.773-.396.864.611 1.09.677c.225.065.638.143.804.36 0 0-.107-.692.291-.751 0 0-.043-.57-.629-.443-.514.113-.359.58-.359.58s-.672-.41-.27-.917c.39-.488 1.063-.458 1.376-.103 0 0 .12-.228-.04-.41-.161-.182-.399.033-.492-.165-.094-.199.18-.313-.046-.794s-.81-.651-1.145-.829-.542-.591-.441-1.084c0 0 .585.706 1.38.697.704-.009 1.055-.198 1.5-.02.444.178.6.494.634.765 0 0 .179-.143.125-.39-.052-.248-.066-.328.143-.516 0 0-.053.4.501.75.556.35 1.052.485 1.096 1.244.01.171-.168.798-.608 1.013-.211.102-.571.014-.571.014s.924-.739.01-1.466c0 0 .237.46-.196.879 0 0 .18-.558-.204-.653 0 0 .183.235-.095.566-.278.332-.031.531.286.734 0 0-.507.242-.752-.076-.162-.21.114-.54.018-.893-.013-.052-.057-.342-.671-.599s-.598-.317-.737-.467c0 0 .02.197.194.42.195.25.425.293.507.443.082.147.089.36.155.446.098.127.227.164.284.309.057.144.105.307-.01.638 0 0-.201.036-.185-.217s-.046-.362-.242-.369c0 0 .103.122.095.295-.009.172-.165.261-.133.344.038.097.178.12.304.262.126.141.33.306.484.547s.343.67.11.537c-.235-.133-.347-.232-.578-.192s-.306.284-.319.574c-.013.291-.063.3-.23.426-.166.128-.295.185-.41.468-.115.282-.35.436-.52.522-.172.087-.501.201-.419.63.083.43.368.843.545 1.002 0 0 .03-.231-.028-.42-.056-.19-.165-.482-.051-.828.113-.346.327-.429.378-.446.052-.016.16-.058.283-.33.122-.27.215-.354.476-.413.26-.06.828-.033 1.033.217.206.25.056.406.306.67.25.266.443.245.672.293.245.053 1.03.393.866.183a1.14 1.14 0 0 0-.403-.344c-.167-.098-.33-.15-.435-.38-.085-.188-.094-.263-.104-.306-.01-.044-.01-.114.075-.137s.309-.046.36-.273c.04-.18-.036-.45-.064-.512-.057-.13-.21-.132-.284-.204-.107-.103-.435-.545-.58-.63-.077-.046-.292-.113-.362-.145m1.822 5.694s-.174.057-.318-.017c0 0-.183.23-.41.327-.196.084-.3.117-.192-.03.082-.115.097-.103.2-.197.102-.094.174-.198.236-.25.076-.065.152-.032.484.167"
          />
          <path
            fill="url(#MRS__b)"
            d="M15.34 14.685c-.773 1.284-1.941 2.61-3.707 3.688a12 12 0 0 1-.47-.303.98.98 0 0 0 .658-.457c.158-.258.187-.535.33-.647.153-.118.353-.166.504-.332a1.18 1.18 0 0 0 .3-.695s.106-.005.204-.025c.104-.021.205-.062.33-.065.183-.003.416.089.594.05.217-.05.369-.105.451-.179.376-.333.324-.673.466-.784.077-.06.21-.142.34-.251m.407-.742c1.102-2.21 1.103-4.11 1.103-4.11-.63-.413-1.506-.933-3.094-1.185.046.15.096.333.109.462.013.136.053.103.143.178.09.076.233.217.285.355.053.14.087.326.136.454s.173.489.18.656c.008.166-.16.578-.09.72.16.32.685.502.842.825.135.277.14.447.188.663s.269.585.203.954z"
          />
          <path
            fill="url(#MRS__c)"
            d="M5.197 10.76a8 8 0 0 1-.035-1.48q.331-.21.672-.407a.5.5 0 0 0 .195.157s-.613.418-.512 1.317c0 0-.198.18-.32.414m13.64-1.48c-1.121-.707-2.248-1.318-3.956-1.639a1.3 1.3 0 0 1-.228.58c1.83.306 2.852.903 3.59 1.352 0 0 .338 5.954-6.244 9.425-1.4-.74-2.487-1.587-3.33-2.464-.019.254.06.68.43 1.294.845.716 1.804 1.331 2.9 1.887 2.433-1.23 4.184-2.753 5.51-5.023 1.062-1.848 1.442-3.873 1.329-5.412"
          />
          <defs>
            <linearGradient
              id="MRS__a"
              x1="5.202"
              x2="17.75"
              y1="13.622"
              y2="9.438"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#B59978" />
              <stop offset=".201" stopColor="#BFA480" />
              <stop offset=".751" stopColor="#EDCFA5" />
            </linearGradient>
            <linearGradient
              id="MRS__b"
              x1="1.888"
              x2="20.534"
              y1="14.294"
              y2="9.43"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#8F191C" />
              <stop offset=".25" stopColor="#89181A" />
              <stop offset=".65" stopColor="#9E1D20" />
              <stop offset="1" stopColor="#89181A" />
            </linearGradient>
            <linearGradient
              id="MRS__c"
              x1="7.252"
              x2="18.362"
              y1="15.049"
              y2="8.543"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".25" stopColor="#A89C8E" />
              <stop offset=".65" stopColor="#DFD1C0" />
              <stop offset="1" stopColor="#B0A495" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

TokenMRS.displayName = 'MRS'
