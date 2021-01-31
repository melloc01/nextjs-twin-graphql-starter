import { withSession } from '../../lib/session'
import type { NextApiResponse } from 'next'
import { AppNextApiRequest } from '../../next-env'

export default withSession((req: AppNextApiRequest, res: NextApiResponse): void => {
    req.session.destroy()

    res.redirect('/')
})
