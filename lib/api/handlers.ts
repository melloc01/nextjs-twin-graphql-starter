import { ClientError } from 'graphql-request'

export function consoleErrorHandler(err: ClientError) {
    console.error(err)
}
