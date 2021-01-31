import tw from 'twin.macro'
import { CursiveText } from './styled'
import styled from 'styled-components'

export function Signature() {
    return (
        <StyledSignature>
            <span>
                Desenvolvido por <a>Rafael Mello Campanari</a>
            </span>
            <p>
                Rafael <br />
                Mello <br />
                Campanari <br />
                <hr tw="my-1 border-blue-300" />
                <a
                    tw="mx-2"
                    href="https://www.linkedin.com/in/rafael-mello-campanari/"
                    rel="noreferrer"
                    target="_blank"
                >
                    LinkedIn
                </a>
                |
                <a tw="mx-2" href="https://github.com/melloc01" rel="noreferrer" target="_blank">
                    Github
                </a>
                |
                <a tw="ml-2" href="https://twitter.com/melloc01" rel="noreferrer" target="_blank">
                    Twitter
                </a>
                <br />
                <a href="https://www.rafael.dev.br">https://www.rafael.dev.br</a>
            </p>
        </StyledSignature>
    )
}

const StyledSignature = styled.div`
    position: fixed;
    bottom: 0;
    right: 0;
    padding: 0px 2px;
    background: white;
    font-size: 0.7rem;
    height: 30px;
    line-height: 28px;
    width: 242px;
    transition: 0.25s ease-in-out all;

    p,
    span {
        ${tw`p-4`}
    }
    p {
        text-align: right;

        a {
            ${tw`text-blue-200 hover:(underline text-blue-100) inline-block`}
        }
        display: none;
    }

    a {
        ${tw`text-blue-500`}
    }

    &:hover {
        text-align: center;
        font-size: 0.8rem;
        height: 184px;
        ${tw`bg-blue-900 text-white font-bold border-blue-300`}
        span {
            display: none;
        }
        p {
            display: block;
        }
    }
`
