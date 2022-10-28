import { DeepPartial, Theme } from '@chakra-ui/react'

const breakpoints: DeepPartial<Theme['breakpoints']> = {
   sm: '40em', //640px
   md: '52em', //800px
   lg: '64em', //1024px
   xl: '80em', //1280
   '2xl': '92em' //1472px
}

export default breakpoints
