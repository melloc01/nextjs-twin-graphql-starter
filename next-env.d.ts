import * as next from 'next'
import 'next/types/global'

import { Session } from 'next-iron-session'

declare type AppNextApiRequest = next.NextApiRequest & {
    session: Session
}
