import { ComponentStyleConfig } from '@chakra-ui/react'

export const Form: ComponentStyleConfig = {
   parts: ['form', 'title', 'altLink'],
   baseStyle: {
      form: {
         padding: '20px',
         boxShadow: 'base'
      },
      title: {
         size: 'lg'
      },
      altLink: {
         fontSize: 'xs'
      }
   }
}
