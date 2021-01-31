module.exports = {
    schema: ['./lib/graphql/schema.graphql'],
    documents: ['./lib/graphql/documents/*.{graphql,js,ts,jsx,tsx}'],
    extensions: {
        endpoints: {
            default: {
                url: 'http://localhost:3000/api/graphql',
                headers: {}
            }
        }
    }
}
