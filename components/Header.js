import Link from 'next/link'
import styled from 'styled-components'
import tw from 'twin.macro'

export default function Header({ isAdmin }) {
    return (
        <header id="main-header" tw="bg-yellow-200  p-4 pt-8 shadow-md">
            <div tw="container mx-auto ">
                <div tw="flex flex-col text-center sm:flex-row">
                    <Logo tw="text-5xl flex-1 font-cursive text-center sm:text-left mb-6">My App</Logo>

                    {isAdmin ? (
                        <div tw="text-2xl self-center mr-4 md:mt-4">ADMIN</div>
                    ) : (
                        <div tw="flex flex-col justify-between text-2xl mb-4">
                            <Link href="/admin">
                                <span tw="text-blue-500 cursor-pointer hover:(underline text-blue-800)">Login</span>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </header>
    )
}

const Logo = styled.h1`
    text-shadow: 1px 1px 1px black;
    ${tw`text-red-brand`}
`
