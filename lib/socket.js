/* eslint-disable @typescript-eslint/no-var-requires */
const PubNub = require('pubnub')

// PubNub Integration
// turned off
class Socket {
    client = null

    constructor() {
        const cfg = {
            publishKey: '',
            subscribeKey: '',
            uuid: ''
        }

        // only on server
        if (typeof window === 'undefined') {
            cfg.secretKey = process.env.WS_SERVER_KEY
        }

        // this.client = new PubNub(cfg)
    }

    publish(channel, data) {
        // return this.client.publish({
        //     channel: channel,
        //     message: data
        // })
    }

    subscribe(channels, cb) {
        this.client.subscribe({ channels })
        this.client.addListener({
            message: function (m) {
                const channel = m.channel // Channel on which the message was published
                const channelGroup = m.subscription // Channel group or wildcard subscription match (if exists)
                const pubTT = m.timetoken // Publish timetoken
                const msg = m.message // Message payload
                const publisher = m.publisher // Message publisher

                cb({ channel, data: msg })
            }
        })
    }

    unsubscribe() {
        // this.client?.unsubscribeAll?.()
    }
}

module.exports = Socket
