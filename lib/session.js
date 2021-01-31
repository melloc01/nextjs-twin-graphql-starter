// this file is a wrapper with defaults to be used in both API routes and `getServerSideProps` functions
import { withIronSession } from 'next-iron-session'
import { SERVER_MESSAGES } from './constants'

export function withSession(handler) {
    return withIronSession(handler, {
        password: process.env.SECRET_COOKIE_PASSWORD,
        cookieName: 'app_session',
        cookieOptions: {
            // the next line allows to use the session in non-https environments like
            // Next.js dev mode (http://localhost:3000)
            secure: process.env.NODE_ENV === 'production'
        }
    })
}

export function authApiHandler(handler) {
    return withSession(async function (...args) {
        const [req, res] = args
        const user = req.session.get('user')

        if (!user) {
            return res.status(401).json({
                message: SERVER_MESSAGES.NOT_LOGGED
            })
        }

        return handler(...args)
    })
}
export function authenticationGate(req, res) {
    const user = req.session.get('user')

    if (!user) {
        // res.status(401).json({
        //     message: 'You must be looged to perform this action.'
        // })

        return false
    }

    return true
}

export const withUserProps = withSession(async function ({ req, res }) {
    // Get the user's session based on the request
    const user = req.session.get('user')

    if (!user) {
        return {
            redirect: {
                destination: '/login',
                permanent: true
            }
        }
    }

    return {
        props: { user }
    }
})
