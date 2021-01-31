import styled from 'styled-components'
import tw from 'twin.macro'
import AppHead from '../components/AppHead'
import { CursiveText } from '../components/styled'
import { useRouter } from 'next/router'
import { AppWrappers } from '../components/AppWrappers'
import { ControlledFormItem } from '../components/ControlledFormItem'
import { useForm } from 'react-hook-form'
import { Button } from 'antd'
import 'antd/dist/antd.css'

export default function Login() {
    const router = useRouter()

    const { control } = useForm()

    const onSubmit = e => {
        const { username, password } = control.getValues()

        fetch('/api/login', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        }).then(r => {
            if (r.ok) {
                return router.push('/admin')
            }

            window.alert('Usuário ou senha estão errados.')
        })
    }

    return (
        <AppWrappers>
            <AppHead preventSeo />

            <main tw="absolute bg-gray-900 h-full w-full flex items-center justify-center">
                <div tw="relative mb-40">
                    <Form onSubmit={onSubmit}>
                        <Title as="div" tw="text-2xl text-center mb-2">
                            This is the login page, shall we?
                        </Title>
                        <div tw="text-center font-bold mb-2">ADMINISTRAÇÃO</div>

                        <ControlledFormItem
                            label="Email"
                            placeholder="Email"
                            name="username"
                            layout={{
                                span: 24
                            }}
                            type="text"
                            control={control}
                            defaultValue=""
                        />
                        <ControlledFormItem
                            label="Senha"
                            placeholder="Senha"
                            layout={{
                                span: 24
                            }}
                            name="password"
                            type="password"
                            control={control}
                            defaultValue=""
                        />

                        <div tw="text-center mb-2">
                            <Button type="primary" onClick={onSubmit}>
                                Entrar
                            </Button>
                        </div>
                    </Form>
                    <div tw="absolute left-0 top-0 w-full h-full" />
                </div>
            </main>
        </AppWrappers>
    )
}

const Form = styled.form`
    ${tw`bg-white py-8 px-5 border-gray-300 border-solid border block relative z-10`}

    +div {
        &:after,
        &::before {
            content: '';
            ${tw`bg-white absolute w-full h-full border-gray-300 border-solid border z-0`}
        }
        &::after {
            transform: rotate(5deg);
        }
        &::before {
            transform: rotate(-5deg);
        }
    }
`
const Title = styled(CursiveText)``
const Fieldset = styled.fieldset`
    label {
        display: block;
    }
    input {
        ${tw`mb-2`}
    }
`
