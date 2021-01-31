import { createGlobalStyle } from 'styled-components'
import tw from 'twin.macro'

export const AppGlobalStyles = createGlobalStyle`
    body, html {
        color: #333;
        ${tw`font-sans`}
    }
    
`
