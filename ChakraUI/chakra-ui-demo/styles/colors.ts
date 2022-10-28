import { DeepPartial, Theme } from '@chakra-ui/react'

/** extend additional color here */
const extendedColors: DeepPartial<Record<string, Theme['colors']['teal']>> = {
   teal: {
      50: '##E6FFFA',
      100: '#B2F5EA',
      200: '#81E6D9',
      300: '#4FD1C5',
      400: '#38B2AC',
      500: '#319795',
      600: '#2C7A7B',
      700: '#285E61',
      800: '#234E52',
      900: '#1D4044'
   },
   primaryColorScheme: {
      500: '#0072e6',
      600: '#0059b4'
   },
   dangerColorScheme: {
      500: '#bb2a2f',
      600: '#922024'
   }
}

/** override chakra colors here */
const overridenChakraColors: DeepPartial<Theme['colors']> = {}

const colors = {
   ...overridenChakraColors,
   ...extendedColors
}

export default colors
