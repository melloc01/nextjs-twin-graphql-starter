// pages/_document.js
// A way to prevent FOUC
// Antd Input was not playing well

import Document from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage
        const isNotAdmin = ctx.pathname !== '/admin'

        try {
            if (isNotAdmin) {
                ctx.renderPage = () =>
                    originalRenderPage({
                        enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
                    })
            }
            const initialProps = await Document.getInitialProps(ctx)

            return {
                ...initialProps,
                styles: (
                    <>
                        {isNotAdmin && sheet.getStyleElement()}
                        {initialProps.styles}
                    </>
                )
            }
        } finally {
            sheet.seal()
        }
    }
}
