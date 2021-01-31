import Head from 'next/head'
import { META_TAGS } from '../lib/constants'

export default function AppHead({ preventSeo = false }: { preventSeo: boolean }) {
    return (
        <Head>
            <meta charSet="utf-8" lang={META_TAGS.LANG} />
            <title>{META_TAGS.TITLE}</title>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="author" content={META_TAGS.AUTHOR} />
            <link rel="shortcut icon" type="image/x-icon" href="/public/favicon.ico" />
            <link rel="icon" href="favicon.ico"></link>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0"
            />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet" type="text/css" />
            <link
                href="https://fonts.googleapis.com/css?family=Niconne&display=swap"
                rel="stylesheet"
                type="text/css"
            />

            {preventSeo ? (
                <meta name="robots" content="noindex" />
            ) : (
                <>
                    <meta name="description" content={META_TAGS.SITE_DESCRIPTION} />
                    <meta name="keywords" content={META_TAGS.KEYWORDS} />

                    <meta property="og:title" content={META_TAGS.OG.TITLE} />
                    <meta property="og:type" content={META_TAGS.OG.TITLE} />
                    <meta property="og:url" content={META_TAGS.OG.URL} />
                    <meta property="og:image" content={META_TAGS.OG.IMAGE} />
                    <meta property="og:site_name" content={META_TAGS.OG.SITE_NAME} />
                    <meta property="og:description" content={META_TAGS.OG.DESCRIPTION} />
                    {/* Google analytics */}
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
  
        ga('create', 'UA-56074212-1', 'auto');
        ga('send', 'pageview');`
                        }}
                    />
                </>
            )}
        </Head>
    )
}
