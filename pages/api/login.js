import { withSession } from '../../lib/session'

export default withSession(async (req, res) => {
    const { username, password } = await req.body

    if (username === process.env.ADMIN_USER && password === process.env.ADMIN_PASS) {
        const user = {
            username: process.env.ADMIN_NAME
        }
        req.session.set('user', user)
        await req.session.save()

        return res.json(user)
    }

    res.status(401).json({
        message: 'Wrong password'
    })
})
