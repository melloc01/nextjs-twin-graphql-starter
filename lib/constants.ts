export const GRAPHQL_PATH = 'api/graphql'

export enum GRAPHQL_CHANNELS {
    NEW_MENU_ITEM = 'NEW_MENU_ITEM',
    DELETED_MENU_ITEM = 'DELETED_MENU_ITEM'
}

const host = typeof window === 'undefined' ? '' : window.location.host
const wsProtocol = process.env.NODE_ENV === 'production' ? 'wss' : 'ws'
export const GRAPHQL_SUB_PATH = `${wsProtocol}://${host}/api/graphql-sub`

// SERVER MESSAGES
export const SERVER_MESSAGES = {
    NOT_LOGGED: 'You must be looged to perform this action.'
}

export const META_TAGS = {
    AUTHOR: 'Rafael Mello Campanari <lab.rafamello@gmail.com>',
    LANG: 'en-GB',
    TITLE: 'Next.js & friends',
    SITE_DESCRIPTION: 'Next.js & friends',
    KEYWORDS: 'nextjs reactjs graphql tailwindcss mongodb atlas',
    // OpenGraph Protocol: https://ogp.me/
    // Used for facebook/whatsapp previews
    OG: {
        TITLE: 'This goes on top of the card',
        TYPE: 'website',
        URL: 'https://your-prod-address.com',
        IMAGE: 'https://your-prod-address.com/public/og-image.jpg',
        SITE_NAME: 'The root site name',
        DESCRIPTION: `What's it about`
    }
}
