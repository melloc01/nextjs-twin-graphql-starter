import Header from '../components/Header'
import AppHead from '../components/AppHead'
import tw, { GlobalStyles } from 'twin.macro'
import { useScrolledPastHeader } from '../lib/hooks/useScrolledPastHeader'
import { Signature } from '../components/Signature'
import { CursiveText } from '../components/styled'
import Link from 'next/link'

export default function Home() {
    return (
        <>
            <GlobalStyles />
            <AppHead preventSeo={false} />
            <Header isAdmin={false} />
            <HomeContent />
        </>
    )
}

function HomeContent(): JSX.Element {
    const scrolledPast = useScrolledPastHeader('#main-header')

    return (
        <>
            <Signature />
            <header
                style={{ display: scrolledPast ? 'flex' : 'none' }}
                tw="w-full p-4 top-0 hidden bg-yellow-200 shadow-md fixed"
            >
                <div tw="container mx-auto justify-between flex align-middle flex-col text-center sm:text-left sm:flex-row">
                    <CursiveText tw="text-3xl text-red-brand">Scrolling header</CursiveText>
                    <div tw="flex align-middle justify-center mt-2 sm:mt-0 sm:justify-end">
                        <Link href="/admin">
                            <span tw="text-blue-500 cursor-pointer hover:(underline text-blue-800)">Login</span>
                        </Link>
                    </div>
                </div>
            </header>
            <main tw="container mx-auto p-4 pt-6">
                <div tw="h-96 bg-blue-400 my-4" />
                <div tw="h-96 bg-blue-400 my-4" />
                <div tw="h-96 bg-blue-400 my-4" />
            </main>
        </>
    )
}
