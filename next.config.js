/* eslint-disable @typescript-eslint/no-var-requires */
const clientEnvVars = []

const config = {
    webpack: (config, { isServer }) => {
        // Fixes packages that depend on fs/module module
        if (!isServer) {
            config.node = { fs: 'empty', module: 'empty' }
        }

        return config
    },
    env: clientEnvVars.reduce(
        (acc, name) => {
            acc[name] = process.env[name]

            return acc
        },
        {
            buildTime: +new Date()
        }
    )
}

const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true'
})
module.exports = withBundleAnalyzer(config)
